import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function getPropertiey(id) {
//   const query = {
//     content_type: "alraya-projects",
//   };



  const res = await client.getEntry(id);
  console.log("res property", res?.fields);
const item = res.fields;

  if (!item) return null; // لو مفيش entry
  // استخراج البيانات
  const {
    title,
    adress,
    details,
    area,
    buildingage ,
    barkingStauts ,
    bathrooms,
    city,
    bedrooms,
    d3map,
    images,
    firstPayemnt,
    installemnt,
    installemntPeriod,
    installemntPermonth,
    furniture ,
    map,
    opeartion,
    pdfAndWord,
    priec,
    projectFeatures,
    propertiesServies ,
    typeOfproject
  } = item;

  const seriesimagesCutmez = checkimageprotcoll(images);

  return {
    id: res.sys.id,
    title,
    adress,
    details,
    area,
    bathrooms,
    city,
    buildingage ,
    barkingStauts ,
    furniture ,
    bedrooms,
    d3map,
    seriesimagesCutmez,
    firstPayemnt,
    installemnt,
    installemntPeriod,
    installemntPermonth,
    map,
    opeartion,
    pdfAndWord,
    priec,
    projectFeatures,
    propertiesServies ,
    typeOfproject
  };

}
