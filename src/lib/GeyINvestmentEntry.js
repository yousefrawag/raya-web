import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GeyINvestmentEntry(id) {
  const query = {
    content_type: "alraya-investment",
  };





  const res = await client.getEntry(id);
  console.log("res-investment", res?.fields);
  const item = res.fields
   if (!item) return null; // لو مفيش entry
 
        
    
    const { title , details, area  , city  , images  , 


type ,
region ,
price

          } = item

         const seriesimagesCutmez = checkimageprotcoll(images)
         

 
  
  return {
                title , id:res.sys.id , details, area  , city   , seriesimagesCutmez ,
type ,
region ,
price
  };
}
