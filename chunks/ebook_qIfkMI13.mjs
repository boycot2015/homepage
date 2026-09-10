import { g as getCollection } from './_astro_content_DhLq0NIO.mjs';
import { a as get } from './scripts_CWVoRoSx.mjs';

async function getAllbooks() {
  const [apiBooks, localBooks] = await Promise.all([
    get(),
    getCollection("ebook")
  ]);
  const formattedApiBooks = apiBooks?.map((el) => ({
    id: el.attributes.title,
    body: "",
    data: {
      img: el.attributes?.img?.replace("dailynote", "blog-cloud") || "",
      title: el.attributes.title,
      author: el.attributes.author || "",
      file: el.attributes.url.replace("dailynote", "blog-cloud"),
      objectId: el.id,
      description: el.attributes.description || ""
    },
    collection: "ebook",
    rendered: void 0,
    filePath: void 0
  })) || [];
  return [...formattedApiBooks, ...localBooks.filter((el) => el.data.title)];
}

export { getAllbooks as g };
