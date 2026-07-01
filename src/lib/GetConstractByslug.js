import { client, checkimageprotcoll } from "../utils/ContentfullClient";

export async function GetConstractByslug(slug) {
  const query = {
    content_type: "alraya-contraction",
    "fields.slug": slug,
    limit: 1,
  };

  const res = await client.getEntries(query);

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
    badg,
    features,
    whatssapfolow,
    youtupeUrl,
    slug: itemSlug,
    details2
  };
}