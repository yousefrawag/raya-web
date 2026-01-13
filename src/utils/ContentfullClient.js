import { createClient } from 'contentful';

 export const client = createClient({
  space:"s2ctombok2fz",
  accessToken: "tcNgrtoLtnp2CzZ3eiHug-Rz6gBTfZNe4xtdZcYTOcM", // Your Contentful access token
  environment: "mydata",
});

export const checkimageprotcoll = (images) =>{
  const  custmezimages = images.map((image) =>{
        if(image?.fields?.file?.url?.startsWith("//")) {
            const url = `https:${image.fields.file.url}`
            return {url}
        }else{
            const url = image?.fields?.file?.url
            return {url}
        }
    })
    return custmezimages
}