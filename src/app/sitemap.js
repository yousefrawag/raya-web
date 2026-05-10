export default async function sitemap() {
  const baseUrl = "https://www.rayapal.com";

  const routes = [
    "",
    "/map",
    "/investment",
    "/blogs",
    "/properties",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));
}