import { client } from "@/utils/ContentfullClient";
import { regions } from "@/data/regions";

// الـ sitemap بيتجدد كل ساعة عشان أي عقار جديد يظهر لجوجل بسرعة
export const revalidate = 3600;

const baseUrl = "https://www.rayapal.com";

// بيجيب كل الـ entries من نوع معين (مع pagination لأن Contentful بيرجع 100 بس افتراضياً)
// وبيطلب الحقول اللي محتاجينها بس عشان الطلب يبقى خفيف
async function fetchAllEntries(contentType, select = "sys.id,sys.updatedAt") {
  const items = [];
  const limit = 1000;
  let skip = 0;

  try {
    while (true) {
      const res = await client.getEntries({
        content_type: contentType,
        select,
        limit,
        skip,
      });
      items.push(...(res.items || []));
      skip += limit;
      if (skip >= res.total) break;
    }
  } catch (error) {
    // لو نوع واحد فشل، الـ sitemap يكمل بباقي الأنواع بدل ما يقع كله
    console.error(`sitemap: failed to fetch ${contentType}`, error?.message);
  }

  return items;
}

export default async function sitemap() {
  const now = new Date();

  // 1️⃣ الصفحات الثابتة
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/properties", priority: 0.9, changeFrequency: "daily" },
    { path: "/regions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/investment", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contracting", priority: 0.7, changeFrequency: "monthly" },
    { path: "/engineering-consultation", priority: 0.7, changeFrequency: "monthly" },
    { path: "/ImportExport", priority: 0.6, changeFrequency: "monthly" },
    { path: "/map", priority: 0.6, changeFrequency: "weekly" },
  ];

  const entries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // 2️⃣ المحافظات والبلدات (من نفس ملف البيانات اللي صفحات /regions بتستخدمه)
  regions.forEach((region) => {
    entries.push({
      url: `${baseUrl}/regions/${region.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    region.locations?.forEach((location) => {
      // تفادي تكرار نفس الاسم لو البلدة هي نفسها المحافظة (مثل أريحا/أريحا)
      if (location.slug === region.slug) return;
      entries.push({
        url: `${baseUrl}/regions/${region.slug}/${location.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });
  });

  // 3️⃣ الصفحات الديناميكية من Contentful
  const [properties, blogs, investments, contracting, consultations] =
    await Promise.all([
      fetchAllEntries("arya-properties"),
      fetchAllEntries("raya-blogs"),
      fetchAllEntries("alraya-investment"),
      fetchAllEntries("alraya-contraction", "sys.id,sys.updatedAt,fields.slug"),
      fetchAllEntries("engineering-consultation", "sys.id,sys.updatedAt,fields.slug"),
    ]);

  const toEntry = (path, item, priority, changeFrequency = "weekly") => ({
    url: `${baseUrl}${path}`,
    lastModified: item.sys?.updatedAt ? new Date(item.sys.updatedAt) : now,
    changeFrequency,
    priority,
  });

  properties.forEach((item) =>
    entries.push(toEntry(`/properties/${item.sys.id}`, item, 0.8))
  );

  blogs.forEach((item) =>
    entries.push(toEntry(`/blogs/${item.sys.id}`, item, 0.7, "monthly"))
  );

  investments.forEach((item) =>
    entries.push(toEntry(`/investment/${item.sys.id}`, item, 0.8))
  );

  contracting.forEach((item) => {
    if (!item.fields?.slug) return;
    entries.push(toEntry(`/contracting/${item.fields.slug}`, item, 0.6, "monthly"));
  });

  consultations.forEach((item) => {
    if (!item.fields?.slug) return;
    entries.push(
      toEntry(`/engineering-consultation/${item.fields.slug}`, item, 0.6, "monthly")
    );
  });

  return entries;
}
