import path from 'path';
import _fs from 'fs';
import { fileURLToPath } from 'url';
import { S as SITE_CONFIG } from './scripts_CWVoRoSx.mjs';

const fs = _fs.promises;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SUPPORTED_EXTENSIONS = /* @__PURE__ */ new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"]);
async function getImageFiles(dir) {
  try {
    const files = await fs.readdir(dir);
    return files.filter((file) => SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase()));
  } catch (error) {
    console.error(`无法读取目录 ${dir}:`, error);
    return [];
  }
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
async function* createImageIterator(dir) {
  let images = await getImageFiles(dir);
  if (images.length === 0) {
    throw new Error(`目录 ${dir} 中没有图片文件`);
  }
  while (true) {
    images = shuffleArray([...images]);
    for (const image of images) {
      yield image;
    }
  }
}
const targetDir = path.resolve(__dirname, "../../public/assets/images/banner/");
const fileIter = createImageIterator(targetDir);
const getCover = async (filename) => {
  if (filename) return filename;
  const str = Math.random().toString(36).substring(2, 8);
  const { value } = await fileIter.next();
  if (!filename) return `${SITE_CONFIG.imgApi}?timestamp=${Date.now() + str}&type=2`;
  return SITE_CONFIG.Site + `/assets/images/banner/${value}`;
};

export { getCover as g };
