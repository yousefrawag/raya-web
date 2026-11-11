// صور Contentful بتتخزن بحجمها الأصلي (ممكن 3-5MB للصورة).
// Contentful عنده Images API بيصغّر ويحوّل لـ webp من الـ CDN بتاعه مباشرة،
// فبنطلب الصورة بالعرض اللي الكارت محتاجه بس بدل الصورة الأصلية.
// https://www.contentful.com/developers/docs/references/images-api/
export function ctfImage(url, width = 800, quality = 70) {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("images.ctfassets.net")) return url; // فيديوهات أو روابط خارجية زي ما هي

  const [base] = url.split("?");
  return `${encodeURI(base)}?w=${width}&q=${quality}&fm=webp`;
}
