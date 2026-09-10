import { g as getCollection } from './_astro_content_DhLq0NIO.mjs';
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro_Cs5b5Iv6.mjs';
import './vendor_6cuRSzg4.mjs';
import { f as fmtTime } from './scripts_CWVoRoSx.mjs';
/* empty css                         */

const fmtArticleList = (articleList) => {
  const groupedByYear = articleList.filter((i) => !i.data.draft && !i.data.hide).reduce((acc, item) => {
    const year = item.data.date.getFullYear();
    !acc[year] && (acc[year] = []);
    acc[year].push(item.data);
    return acc;
  }, {});
  return Object.keys(groupedByYear).map((year) => ({ name: parseInt(year), data: groupedByYear[year] })).reverse();
};
const getCategoriesList = async (categories) => {
  const posts = await getCollection("blog");
  const articleList = posts.filter((i) => i.data.categories == categories).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return fmtArticleList(articleList);
};
const getTagsList = async (tags) => {
  const posts = await getCollection("blog");
  const articleList = posts.filter((i) => (i.data.tags || []).map((_i) => String(_i)).includes(tags)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return fmtArticleList(articleList);
};
const getArchiveList = async () => {
  const posts = await getCollection("blog");
  const articleList = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return fmtArticleList(articleList);
};

const $$Astro = createAstro();
const $$Archive = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archive;
  const { articleList } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="byt-archive-main byt-animation byt-animation-init"> <div class="archive-list"> ${articleList.map((i) => renderTemplate`<div class="archive-list-item"> <p class="title"> <em>${i.name}</em> <i></i> <span>${i.data.length}篇文章</span> </p> ${i.data.map((_) => renderTemplate`<a${addAttribute(`/article/${_.id || _.title}`, "href")}> <em>${fmtTime(_.date, "MM-DD")}</em> <i></i> <span class="byt-ellipsis">${_.title}</span> <cite class="byt-ellipsis">${_.tags?.map((tag) => `#${tag}`).join(" ")}</cite> </a>`)} </div>`)} </div> </section>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Archive/Archive.astro", void 0);

export { $$Archive as $, getCategoriesList as a, getTagsList as b, getArchiveList as g };
