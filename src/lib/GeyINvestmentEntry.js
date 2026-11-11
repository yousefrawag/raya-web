import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GeyINvestmentEntry(id) {
  const query = {
    content_type: "alraya-investment",
  };





  let res;
  try {
    res = await client.getEntry(id);
  } catch (error) {
    // الـ ID غير موجود في Contentful → نرجع null عشان الصفحة ترجع 404 حقيقي
    return null;
  }

  const item = res.fields
   if (!item) return null; // لو مفيش entry
 
        
    
    const { title , details, area  , city  , images  , 

whatssapfolow1 ,
type ,
region ,
price ,
details2

          } = item

         const seriesimagesCutmez = checkimageprotcoll(images)
         

 
  
  return {
                title , id:res.sys.id , details, area  , city   , seriesimagesCutmez , whatssapfolow1 ,
type ,
region ,
price ,
details2
  };
}
