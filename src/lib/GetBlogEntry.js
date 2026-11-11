import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetBlogEntry(id) {


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
 blogTietal,
                    blogCatgeoray ,
                    blogDeatils ,
                    blogImage ,
                    youtupeUrl ,
                    details2
  } = item;

  const blogImageCutmez = checkimageprotcoll(blogImage)

  return {
     blogTietal,
                    blogCatgeoray ,
                    blogDeatils ,
                    youtupeUrl ,
    id: res.sys.id,
    createdAt:res.sys.createdAt ,
    blogImageCutmez ,
    details2
           
  };
}
