// تحويل بيانات Contentful لشكل "كارت" خفيف قبل ما نبعتها لأي client component.
//
// ليه؟ أي data بتتبعت لـ "use client" component بتتحط كاملة جوه HTML الصفحة.
// كنا بنبعت المقالات بنصها الكامل والعقارات بكل حقولها وصورها، فـ HTML الرئيسية
// كان 416KB منهم ~270KB بيانات مش بتظهر أصلاً. الكروت بتعرض سطرين وصورة واحدة بس.

const excerpt = (text, max = 220) => {
  if (typeof text !== "string") return "";
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max)}…` : clean;
};

const firstImage = (images) => (images?.[0]?.url ? [{ url: images[0].url }] : []);

export const toBlogCard = (post) => ({
  id: post.id,
  blogTietal: post.blogTietal,
  blogCatgeoray: post.blogCatgeoray,
  blogImageCutmez: post.blogImageCutmez?.url ? { url: post.blogImageCutmez.url } : null,
  createdAt: post.createdAt,
  blogDeatils: excerpt(post.blogDeatils),
});

export const toPropertyCard = (property) => ({
  id: property.id,
  title: property.title,
  adress: property.adress,
  area: property.area,
  bathrooms: property.bathrooms,
  bedrooms: property.bedrooms,
  price: property.price,
  type: property.type,
  typeOfproject: property.typeOfproject,
  // الكارت بيستخدمه بس عشان يعرض شارة "متميز"
  projectFeatures: Boolean(property.projectFeatures),
  seriesimagesCutmez: firstImage(property.seriesimagesCutmez),
});

export const toInvestmentCard = (item) => ({
  id: item.id,
  title: item.title,
  city: item.city,
  region: item.region,
  price: item.price,
  area: item.area,
  type: item.type,
  details: excerpt(item.details, 160),
  seriesimagesCutmez: firstImage(item.seriesimagesCutmez),
});
