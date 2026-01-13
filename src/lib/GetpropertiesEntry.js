import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function getProperties(searchParams) {
  const query = {
    content_type: "alraya-projects",
  };

  if (searchParams.city) {
    query["fields.city"] = searchParams.city || "";
  }

  if (searchParams.propertyType) {
    query["fields.typeOfproject"] = searchParams.propertyType || "";
  }

  if (searchParams.opeartion) {
    query["fields.opeartion"] = searchParams.opeartion || "";
  }

  if (searchParams.bedrooms) {
    query["fields.bedrooms"] = searchParams.bedrooms || "";
  }
  
  if (searchParams.area) {
    query["fields.area"] = searchParams.area || "";
  }
  if (searchParams.region) {
    query["fields.region"] = searchParams.region || "";
  }
  const res = await client.getEntries(query);
  console.log("res", res);
  const customezData = res.items?.map((item) => {
         const { title,adress , details, area , bathrooms , city,bedrooms ,d3map , images , firstPayemnt , 
installemnt ,
installemntPeriod ,
installemntPermonth ,
map ,
lat ,
buildingage ,
barkingStauts ,
opeartion ,
pdfAndWord ,
priec ,
projectFeatures ,
typeOfproject ,
furniture ,
propertiesServies


          } = item.fields
         const seriesimagesCutmez = checkimageprotcoll(images)
            const id = item.sys.id;
         return {
            title,adress , id , details, area , bathrooms , city,bedrooms ,d3map , seriesimagesCutmez , firstPayemnt , 
installemnt ,
installemntPeriod ,
installemntPermonth ,
map ,
lat ,
opeartion ,
barkingStauts ,
buildingage ,
propertiesServies ,
furniture ,
pdfAndWord ,
priec ,
projectFeatures ,
typeOfproject
         }
  })
  
  return customezData;
}
