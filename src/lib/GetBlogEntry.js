import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetBlogEntry(id) {
console.log("id-project" , id);

  const res = await client.getEntry(id);

const item = res.fields;
 if (!item) return null; // لو مفيش entry
  // استخراج البيانات
  const {
 blogTietal,
                    blogCatgeoray ,
                    blogDeatils ,
                    blogImage
  } = item;

  const blogImageCutmez = checkimageprotcoll(blogImage)

  return {
     blogTietal,
                    blogCatgeoray ,
                    blogDeatils ,
    id: res.sys.id,
    createdAt:res.sys.createdAt ,
    blogImageCutmez
           
  };
}
