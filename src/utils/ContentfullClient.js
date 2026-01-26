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

  // لو Array
  if (Array.isArray(images)) {
    return images.map((image) => {
      const url = image?.fields?.file?.url;
      if (!url) return null;

      return {
        url: url.startsWith("//") ? `https:${url}` : url
      };
    }).filter(Boolean);
  }

  // لو صورة واحدة
  const singleUrl = images?.fields?.file?.url;
  if (!singleUrl) return null;

  return {
    url: singleUrl.startsWith("//") ? `https:${singleUrl}` : singleUrl
  };
};
