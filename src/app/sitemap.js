export default async function sitemap() {
  const baseUrl = "https://www.rayapal.com";

  // 1️⃣ المسارات والروابط الثابتة الأساسية للموقع
  const staticRoutes = [
    "",
    "/map",
    "/investment",
    "/blogs",
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

// ⬇️ الحفاظ الكامل على مصفوفة البيانات الخاصة بك كما هي
const regionsStructure = [
  {
    name: "القدس",
    slug: "jerusalem",
    image: "quets", 
    description: "العاصمة وقلب فلسطين العقاري النابض",
    locations: [
      { name: "صور باهر", slug: "sur-baher", image: "surbare" },
      { name: "شعفاط", slug: "shuafat", image: "quets" },
      { name: "بيت صفافا", slug: "beit-safafa", image: "quets" },
      { name: "كفر عقب", slug: "kafr-aqab", image: "akrab" },
      { name: "بيت حنينا", slug: "beit-hanina", image: "phetahnen" },
      { name: "جبل المكبر", slug: "jabal-al-mukaber", image: "quets" },
      { name: "ام طوبا", slug: "umm-tuba", image: "quets" },
      { name: "راس العمود", slug: "ras-al-amud", image: "quets" },
    ],
  },
  {
    name: "اريحا",
    slug: "jericho",
    image: "phetahnen", 
    description: "أقدم مدن العالم وعاصمة الاستثمار الاستجمامي والسياحي",
    locations: [
      { name: "اريحا", slug: "jericho", image: "phetahnen" },
      { name: "البوابه", slug: "al-bawaba", image: "akrab" },
    ],
  },
  {
    name: "رام الله",
    slug: "ramallah",
    image: "ramella", 
    description: "المركز الاستثماري، التجاري، والسكني الأسرع نمواً",
    locations: [
      { name: "رام الله", slug: "ramallah", image: "ramella" },
      { name: "البيره", slug: "al-bireh", image: "ramella" },
      { name: "المصايف", slug: "al-masyef", image: "ramella" },
    ],
  },
];