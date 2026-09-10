import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro_Cs5b5Iv6.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { g as getCollection } from '../chunks/_astro_content_DhLq0NIO.mjs';
import fs from 'fs/promises';
import path from 'path';
import * as cheerio from 'cheerio';
import { S as SITE_CONFIG, g as getDescription, f as fmtTime, b as fmtPage } from '../chunks/scripts_CWVoRoSx.mjs';
import { g as getRecommendArticles, $ as $$Layout } from '../chunks/Layout_5jcBB16y.mjs';
/* empty css                         */
import { g as getCover } from '../chunks/getCover_WKa6O-ul.mjs';
export { renderers } from '../renderers.mjs';

const setSearchJson = async (posts) => {
  const searchIndex = posts.map((i) => {
    const $ = cheerio.load(`<body>${i.rendered.html}</body>`);
    return {
      title: i.data.title,
      url: `/article/${i.data.id || i.data.title}`,
      content: `${i.data.title} - ` + $("body").text().replace(/\n/g, "").replace(/<[^>]+>/g, "")
    };
  });
  try {
    await fs.writeFile(
      path.join(process.cwd(), "dist", "byt-search.json"),
      JSON.stringify(searchIndex)
    );
    await fs.writeFile(
      path.join(process.cwd(), "public", "byt-search.json"),
      JSON.stringify(searchIndex)
    );
    console.log("\x1B[32m%s\x1B[0m", "搜索文件byt-search文件已生成 successfully");
  } catch (error) {
    console.error("Error writing search index file:", error);
  }
};

const moveTopToFirst = (arr) => {
  const index = arr.findIndex((item) => item.data.top === true);
  if (index !== -1) {
    const [item] = arr.splice(index, 1);
    arr.unshift(item);
  }
  return arr;
};

const $$Astro$3 = createAstro();
const $$Swiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Swiper;
  const { data } = Astro2.props;
  let reg = /url\("?'?.*"?'?\)/g;
  let regReplace = /"|'|url|\(|\)/g;
  let list = [];
  const getBannerList = async () => {
    list = await Promise.all(data.map(async (el) => {
      if (el.title) return { title: el.title, img: el.img || el, url: el.url || null, id: Math.random() };
      let res = await fetch(SITE_CONFIG.HitokotoApi + "?c=j&encode=text&r=" + Math.random()).then((res2) => res2.text());
      return { title: res || el.title, desc: el.desc || "", img: el.img || el, id: Math.random() };
    }));
    let recommends = await getRecommendArticles();
    list = await list.concat(...recommends.map((i) => ({ ...i, url: "/article/" + (i.id || i.title) }))).reverse();
  };
  await getBannerList();
  const getImageUrl = (item, id) => item?.match(reg)?.[0].replace(regReplace, "") || item || SITE_CONFIG.imgApi + "?t=" + Date.now() + id;
  return renderTemplate`<!-- 轮播容器 -->${maybeRenderHead()}<div class="banner-swiper w-full mb-4 overflow-hidden shadow-[var(--byt-box-shadow)] rounded-[var(--byt-main-radius)] max-h-[10.88rem] md:max-h-[16.88rem]"> <div class="swiper" id="swiper"> <div class="swiper-wrapper"> ${list.map((item, index) => renderTemplate`<div class="swiper-slide w-full overflow-hidden"> <a${addAttribute(item.url || "", "href")}${addAttribute(item.target || "_self", "target")}${addAttribute(item.url ? "" : "event.preventDefault()", "onclick")} rel="noopener nofollow"> <img class="rounded-[var(--byt-main-radius)] object-cover w-full h-[10.88rem] md:h-[16.88rem]"${addAttribute(getImageUrl(item.img, item.id || index), "data-byt-lz-src")} src="/assets/images/lazy-loading.webp" alt=""> ${item.title && renderTemplate`<div class="text-xl text-[var(--byt-font-color)] bg-[var(--byt-white-color)] px-1 rounded-bl-[0.2rem] absolute top-0 right-0">${item.title}</div>`} ${item.desc && renderTemplate`<div class="text-xl max-w-[80%] text-[#fff] line-clamp-1 px-1 rounded-bl-[0.2rem] absolute left-1 bottom-1">${item.desc}</div>`} </a> </div>`)} </div> <div class="swiper-pagination !text-right !pr-3"></div> <div class="swiper-button-prev !hidden"></div> <div class="swiper-button-next !hidden"></div> </div> </div>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Swiper/Swiper.astro", void 0);

const $$Astro$2 = createAstro();
const $$ArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { post } = Astro2.props;
  const description = getDescription(post);
  const ARTICLE_COVER = await getCover(post.data.cover);
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`byt-article-item byt-article-link${post.data.top ? " active" : ""}`, "class")}> <section class="byt-article-banner"><a class="byt-ellipsis"${addAttribute(`/article/${post.data.id || post.data.title}`, "href")}><img src="/assets/images/lazy-loading.webp"${addAttribute(ARTICLE_COVER, "data-byt-lz-src")}${addAttribute(post.data.title, "alt")}></a></section> <header> <h3><a${addAttribute(`byt-article-cat byt-cat-${post.data.categories}`, "class")}${addAttribute(`/categories/${post.data.categories}`, "href")}>${post.data.categories}</a><time>${fmtTime(post.data.date)}</time></h3> <h1 class="title"><a class="byt-ellipsis"${addAttribute(`/article/${post.data.id || post.data.title}`, "href")}>${post.data.title}</a></h1> </header> <h2 class="byt-article-excerpt byt-ellipsis line-2">${description}</h2> <h4 class="byt-article-taglist byt-ellipsis"> ${post.data.tags?.map((tag) => renderTemplate`<a${addAttribute(`/tag/${tag}`, "href")}>${tag}</a>`)} </h4> </article>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/ArticleCard/ArticleCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="byt-art-page"> <!-- 上一页 --> <a${addAttribute(`byt-pagination-item${!data.prev ? " disabled" : ""}`, "class")}${addAttribute(data.prev || "javascript:;", "href")} title="上一页"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"></path></svg> </a> <!-- 首页 --> ${data.first && data.prev && renderTemplate`<a${addAttribute(`byt-pagination-item`, "class")}${addAttribute(data.first, "href")} title="第一页">
1
</a>`} <!-- 总页的前一页 --> ${(!data.next || !data.last) && data.prev && data.current !== "/2" && renderTemplate`<a${addAttribute(`byt-pagination-item`, "class")}${addAttribute(data.prev, "href")}${addAttribute(`\u7B2C${fmtPage(data.prev)}\u9875`, "title")}> ${fmtPage(data.prev)} </a>`} <!-- 当前页 --> <a class="byt-pagination-item active" href="javascript:;"${addAttribute(`\u7B2C${fmtPage(data.current)}\u9875`, "title")}>${fmtPage(data.current) || "1"}</a> <!-- 第一页的后一页 --> ${(!data.prev || !data.first) && data.next && data.last !== "/2" && renderTemplate`<a class="byt-pagination-item"${addAttribute(data.next, "href")}${addAttribute(`\u7B2C${fmtPage(data.next)}\u9875`, "title")}> ${fmtPage(data.next)} </a>`} <!-- 总页 --> ${data.next && data.last && renderTemplate`<a${addAttribute(`byt-pagination-item`, "class")}${addAttribute(data.last, "href")}${addAttribute(`\u7B2C${fmtPage(data.last)}\u9875`, "title")}> ${fmtPage(data.last)} </a>`} <!-- 下一页 --> <a${addAttribute(`byt-pagination-item${!data.next ? " disabled" : ""}`, "class")}${addAttribute(data.next || "javascript:;", "href")} title="下一页"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg> </a> </section>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Pagination/Pagination.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths(options) {
  const { paginate } = options;
  const posts = (await getCollection("blog")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  moveTopToFirst(posts);
  await setSearchJson(posts);
  return paginate(
    posts.filter((i) => !i.data.hide && !i.data.draft),
    { pageSize: 15 }
  );
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { data, ...pageData } = page;
  const { Description, HomeBanner } = SITE_CONFIG;
  const currentPage = pageData.url.current.replace("/", "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": currentPage ? `\u7B2C${currentPage}\u9875\u6587\u7AE0` : "", "description": Description, "Home": true, "activeNav": "home" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="article-list-main byt-animation byt-animation-init"> ${HomeBanner.enable && HomeBanner.type === "swiper" && renderTemplate`${renderComponent($$result2, "Swiper", $$Swiper, { "data": HomeBanner.list || HomeBanner.background?.split(",") || [] })}`} <section class="article-list w-full"> <!-- 文章列表 --> ${data.map((post, index) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "post": post, "index": index })}`)} <!-- 分页 --> </section> ${renderComponent($$result2, "Pagination", $$Pagination, { "data": pageData.url })} </section> ` })}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/[...page].astro", void 0);

const $$file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/[...page].astro";
const $$url = "/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
