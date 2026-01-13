import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetProjectByid(id) {

  const res = await client.getEntry(id);
  console.log("res project data", res?.fields);
const item = res.fields;
 if (!item) return null; // لو مفيش entry
  // استخراج البيانات
  const {
  title,adress , details, area , numberofunits , city,buildingheight ,map3d , images , firstPayemnt , 
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
  } = item;

  const seriesimagesCutmez = checkimageprotcoll(images);

  return {
    id: res.sys.id,
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
  };
}
