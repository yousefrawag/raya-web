import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetProjectEntry(city ,projectType ,region ,bedrooms ,area  ) {
  const query = {
    content_type: "alraya-projects-project",
  };

  if (city) {
    query["fields.city"] = city || "";
  }

  if (projectType) {
    query["fields.projectType"] = projectType || "";
  }

  if (region) {
    query["fields.region"] = region || "";
  }

  if (bedrooms) {
    query["fields.bedrooms"] = bedrooms || "";
  }
  if (area) {
    query["fields.area"] = area|| "";
  }

  const res = await client.getEntries(query);
  console.log("res -projects-map", res);
  const customezData = res.items?.map((item) => {
         const { title,adress , details, area , projectType, numberofunits , city,buildingheight ,map3d , images , firstPayemnt , 
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
projectType ,
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
