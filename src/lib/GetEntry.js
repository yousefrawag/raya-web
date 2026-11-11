import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function getPropertiey(id) {

  let res;
  try {
    res = await client.getEntry(id);
  } catch (error) {
    // الـ ID غير موجود في Contentful → نرجع null عشان الصفحة ترجع 404 حقيقي
    return null;
  }

const item = res?.fields;

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
    typeOfproject ,
    videos ,
    youtupeUrl ,
    whatssapfolow ,
    details2
  } = item;

  const seriesimagesCutmez = checkimageprotcoll(images);
  const vidoesCustmez = checkimageprotcoll(videos)

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
    typeOfproject ,
    vidoesCustmez ,
    youtupeUrl ,
    whatssapfolow ,
    details2
  };

}
