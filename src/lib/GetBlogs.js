import { client , checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetBlogs() {
  const query = {
    content_type: "raya-blogs",
  };


  const res = await client.getEntries(query);
  console.log("res", res?.items);
  const customezData = res.items?.map((item) => {
         const { blogTietal,
                    blogCatgeoray ,
                    blogDeatils ,
                    blogImage

          } = item.fields
         const blogImageCutmez = checkimageprotcoll(blogImage)
            const id = item.sys.id;
             const createdAt = item.sys.createdAt;
         return {
 id , blogTietal , blogCatgeoray ,
                    blogDeatils ,
                    blogImageCutmez ,
                    createdAt
         }
  })
  
  return customezData;
}
