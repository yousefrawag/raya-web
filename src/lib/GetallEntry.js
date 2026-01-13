import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetallEntry() {
  const query = {
    content_type: "alraya-projects",
  };


  const res = await client.getEntries(query);
  console.log("res", res);
  const customezData = res.items?.map((item) => {
         const { title,adress , details, area , bathrooms , city,bedrooms ,d3map , images , firstPayemnt , 
installemnt ,
installemntPeriod ,
installemntPermonth ,
map ,
opeartion ,
pdfAndWord ,
priec ,
projectFeatures ,
typeOfproject


          } = item.fields
         const seriesimagesCutmez = checkimageprotcoll(images)
            const id = item.sys.id;
         return {
 title,adress , id , details, area , bathrooms , city,bedrooms ,d3map , seriesimagesCutmez , firstPayemnt , 
installemnt ,
installemntPeriod ,
installemntPermonth ,
map ,
opeartion ,
pdfAndWord ,
priec ,
projectFeatures ,
typeOfproject
         }
  })
  
  return customezData;
}
