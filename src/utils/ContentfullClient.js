import { createClient } from 'contentful';

 export const client = createClient({
  space: "snlnd3ub5yl6" ,
  accessToken:"AlhN84A6xuBHkfByA1E-z4IAUsEPWPS-YRRVOoWwMug" , // Your Contentful access token
  environment: "master",
});
export const client2 = createClient({
     space: "s2ctombok2fz" ,
  accessToken:"tcNgrtoLtnp2CzZ3eiHug-Rz6gBTfZNe4xtdZcYTOcM" , // Your Contentful access token
  environment: "mydata", 
})
// "s2ctombok2fz"
// "tcNgrtoLtnp2CzZ3eiHug-Rz6gBTfZNe4xtdZcYTOcM"
export const checkimageprotcoll = (images) => {
  if (!images) return null;

  const fixUrl = (url) => {
    if (!url) return null;

    let finalUrl = url.startsWith("//") ? `https:${url}` : url;

    try {
      // نفك الـ encoding لو بايظ
      finalUrl = decodeURIComponent(finalUrl);
    } catch (e) {
      // لو حصل error سيبه زي ما هو
    }

    return finalUrl;
  };

  if (Array.isArray(images)) {
    return images
      .map((image) => {
        const url = image?.fields?.file?.url;
        const fixed = fixUrl(url);
        return fixed ? { url: fixed } : null;
      })
      .filter(Boolean);
  }

  const singleUrl = images?.fields?.file?.url;
  const fixed = fixUrl(singleUrl);

  return fixed ? { url: fixed } : null;
};