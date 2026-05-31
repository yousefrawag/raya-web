export default async function sitemap() {
  const baseUrl = "https://www.rayapal.com";

  // 1️⃣ المسارات والروابط الثابتة الأساسية للموقع
  const staticRoutes = [
    "",
    "/map",
    "/investment",
    "/blogs",
     "/regions",
    "/properties",
    "/contracting",
    "/engineering-consultation",
  ];

  // تحويل المسارات الثابتة إلى الهيكل المطلوب
  const sitemapEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2️⃣ توليد روابط المحافظات والبلدات ديناميكياً بناءً على مجلد /regions الجديد
  regionsStructure.forEach((region) => {
    // أ) رابط المحافظة الرئيسي (مثال: /regions/jerusalem)
    sitemapEntries.push({
      url: `${baseUrl}/regions/${region.slug}`, // 🛠️ تم التعديل إلى /regions
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });

    // ب) روابط البلدات التابعة لكل محافظة (مثال: /regions/jerusalem/kafr-aqab)
    region.locations.forEach((location) => {
      // تفادي تكرار نفس الاسم إذا كان اسم البلدة متطابقاً مع المحافظة (مثل أريحا/أريحا)
      if (location.slug !== region.slug) {
        sitemapEntries.push({
          url: `${baseUrl}/regions/${region.slug}/${location.slug}`, // 🛠️ تم التعديل إلى /regions/[city]/[location]
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
    });
  });

  return sitemapEntries;
}