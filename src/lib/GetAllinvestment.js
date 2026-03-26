import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetAllinvestment() {
  const query = {
    content_type: "alraya-investment",
  };





  const res = await client.getEntries(query);
  console.log("res", res);
  const customezData = res.items?.map((item) => {
         const { title , details, area  , city  , images  , 


type ,
region ,
price

          } = item.fields
         const seriesimagesCutmez = checkimageprotcoll(images)
            const id = item.sys.id;
         return {
            title , id , details, area  , city   , seriesimagesCutmez ,
type ,
region ,
price

         }
  })
  
  return customezData;
}
