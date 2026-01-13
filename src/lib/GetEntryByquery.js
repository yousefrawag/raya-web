import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetEntryByquery(city) {
  const query = {
    content_type: "alraya-projects",
  };

  if (city) {
    query["fields.city"] = city || "";
  }
  // if (city) {
  //   query["fields.region"] = city || "";
  // }


  const res = await client.getEntries(query);
  console.log("res from query city related", res);
  const customezData = res.items?.map((item) => {
         const { title,adress , details, area , bathrooms , city,bedrooms ,d3map , images , firstPayemnt , 
installemnt ,
installemntPeriod ,
installemntPermonth ,
map ,
buildingage ,
opeartion ,
pdfAndWord ,
priec ,
projectFeatures ,
typeOfproject ,
barkingStauts ,
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
barkingStauts ,
furniture ,
buildingage ,
opeartion ,
pdfAndWord ,
priec ,
projectFeatures ,
propertiesServies ,
typeOfproject
         }
  })
  
  return customezData;
}
