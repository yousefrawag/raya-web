import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetAllConslutions() {
  const query = {
    content_type: "engineering-consultation",
  };
  const res = await client.getEntries(query);
  console.log("res", res);
  const customezData = res.items?.map((item) => {
         const { title , details, images,badg ,features , whatssapfolow ,youtupeUrl , slug


          } = item.fields
         const seriesimagesCutmez = checkimageprotcoll(images)
            const id = item.sys.id;
         return {
 title,seriesimagesCutmez , id , details, badg ,features ,whatssapfolow , youtupeUrl , slug

         }
  })
  
  return customezData;
}
