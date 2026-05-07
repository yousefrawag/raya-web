export default async function sitemap() {
  const baseUrl = "https://www.rayapal.com";

  // 🔥 الصفحات الثابتة
  const staticPages = [
    "",
    "/map",
    "/investment",
    "/blogs",
    "/properties",
  ];

  // 🔥 المناطق
  const regions = [
    {
      id: "jerusalem",
      locations: [
        "sur-baher",
        "shuafat",
        "beit-hanina",
        "kafr-aqab",
        "jabal-al-mukaber",
        "ras-al-amud"
      ]
    },
    {
      id: "jericho",
      locations: ["jericho", "al-bawaba"]
    },
    {
      id: "ramallah",
      locations: ["ramallah", "al-bireh", "al-masayef"]
    }
  ];

  // 🔥 توليد روابط المناطق
  const regionPages = regions.flatMap(region => {
    return [
      {
        url: `${baseUrl}/${region.id}`,
        lastModified: new Date(),
      },
      ...region.locations.map(loc => ({
        url: `${baseUrl}/${region.id}/${loc}`,
        lastModified: new Date(),
      }))
    ];
  });

  // 🔥 الصفحات الثابتة
  const staticUrls = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...regionPages];
}