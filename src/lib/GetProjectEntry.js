import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetProjectEntry(searchParams) {
  const query = {
    content_type: "alraya-projects-project",
  };

  if (searchParams.city) {
    query["fields.city"] = searchParams.city || "";
  }

  if (searchParams.projectType) {
    query["fields.projectType"] = searchParams.projectType || "";
  }

  if (searchParams.region) {
    query["fields.region"] = searchParams.region || "";
  }

  if (searchParams.bedrooms) {
    query["fields.bedrooms"] = searchParams.bedrooms || "";
  }
  if (searchParams.area) {
    query["fields.area"] = searchParams.area || "";
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
