export default async function sitemap() {
  const baseUrl = "https://www.rayapal.com";

  // 1. الصفحات الثابتة (Static Pages)
  const staticPages = [
    "",            // الصفحة الرئيسية
    "/map",        // الخريطة
    "/investment", // استثمار
    "/blogs",      // المدونة
    "/properties", // العقارات
  ];

  // 2. هيكل البيانات للمناطق والأحياء (باللغة العربية كما تستخدمها في البحث)
  const regions = [
    {
      name: "القدس",
      locations: [
        "صور باهر",
        "شعفاط",
        "بيت صفافا",
        "كفر عقب",
        "بيت حنينا",
        "جبل المكبر",
        "ام طوبا",
        "راس العمود"
      ]
    },
    {
      name: "اريحا",
      locations: ["اريحا", "البوابه"]
    },
    {
      name: "رام الله",
      locations: ["رام الله", "البيره", "المصايف"]
    }
  ];

  // 3. تحويل الصفحات الثابتة لروابط Sitemap
  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  // 4. توليد روابط البحث الديناميكية للمناطق والأحياء
  const dynamicUrls = regions.flatMap((region) => {
    // رابط المدينة الرئيسي (مثل: /properties?city=القدس)
    const cityUrl = {
      url: `${baseUrl}/properties?city=${encodeURIComponent(region.name)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    };

    // روابط الأحياء داخل كل مدينة (مثل: /properties?city=القدس&location=كفر عقب)
    const locationUrls = region.locations.map((loc) => ({
      url: `${baseUrl}/properties?city=${encodeURIComponent(region.name)}&region=${encodeURIComponent(loc)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    return [cityUrl, ...locationUrls];
  });

  return [...staticUrls, ...dynamicUrls];
}