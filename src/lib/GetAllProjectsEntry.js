import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetAllProjectsEntry(city) {
  const query = {
    content_type: "raya-projects-lastedtion",
  };

  if (city) {
    query["fields.city"] = city || "";
    
  }



  const res = await client.getEntries(query);
  console.log("res", res);
  const customezData = res.items?.map((item) => {
         const { title,adress , details, area , numberofunits , city,buildingheight ,map3d , images , firstPayemnt , 
installemnt ,
installemntPeriod ,
projectdeatline ,
map ,
numberoftall ,
realstateDevelopment ,
startingPrice ,
projectFeatures ,
projectservies ,
projectfiles


          } = item.fields
         const seriesimagesCutmez = checkimageprotcoll(images)
            const id = item.sys.id;
         return {
            title,adress , id , details, area , numberofunits , city,buildingheight ,map3d , seriesimagesCutmez , firstPayemnt , 
installemnt ,
installemntPeriod ,
projectdeatline ,
map ,
numberoftall ,
realstateDevelopment ,
startingPrice ,
projectFeatures ,
projectservies ,
projectfiles
         }
  })
  
  return customezData;
}
