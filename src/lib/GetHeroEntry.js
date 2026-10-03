import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetHeroEntry() {
  const query = {
    content_type: "herosection",
  };


  const res = await client.getEntries(query);

  const customezData = res.items?.map((item) => {
         const { title,  details, umageHero , 



          } = item.fields
         const seriesimagesCutmez = checkimageprotcoll(umageHero)
            const id = item.sys.id;
         return {
 title , id , details, seriesimagesCutmez 

         }
  })
  
  return customezData;
}
