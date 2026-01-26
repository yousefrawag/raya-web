import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function getProperties(city ,  propertyType , area, bedrooms ,region , opeartion) {
  const query = {
    content_type: "arya-properties",
  };

  if (city) {
    query["fields.city"] = city || "";
  }

  if (propertyType) {
    query["fields.typeOfproject"] = propertyType || "";
  }

  if (opeartion) {
    query["fields.opeartion"] = opeartion || "";
  }

  if (bedrooms) {
    query["fields.bedrooms"] = bedrooms || "";
  }
  
  if (area) {
    query["fields.area"] = area || "";
  }
  if (region) {
    query["fields.region"] = region || "";
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
