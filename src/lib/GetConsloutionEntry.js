import { client, checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetConsloutionEntry(slug) {
  const query = {
    content_type: "engineering-consultation",
    "fields.slug": slug,
    limit: 1,
  };

  const res = await client.getEntries(query);
console.log("res-engenaring-consolution" , res);

  const item = res.items?.[0];

  if (!item) {
    return null;
  }

  const {
    title,
    details,
    details2,

    images,
    badg,
    features,
    whatssapfolow,
    youtupeUrl,
    slug: itemSlug,
  } = item.fields;

  const seriesimagesCutmez = checkimageprotcoll(images);

  return {
    title,
    seriesimagesCutmez,
    id: item.sys.id,
    details,
     details2,
    badg,
    features,
    whatssapfolow,
    youtupeUrl,
    slug: itemSlug,
  };
}