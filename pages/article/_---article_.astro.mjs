import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, f as renderEntry, r as renderComponent, g as renderScript } from '../../chunks/astro_Cs5b5Iv6.mjs';
import '../../chunks/vendor_6cuRSzg4.mjs';
import { S as SITE_CONFIG, g as getDescription, f as fmtTime, c as checkComment } from '../../chunks/scripts_CWVoRoSx.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DhLq0NIO.mjs';
import { g as getCover } from '../../chunks/getCover_WKa6O-ul.mjs';
import { $ as $$Layout, a as $$GoogleAd } from '../../chunks/Layout_5jcBB16y.mjs';
/* empty css                                       */
import { $ as $$Comment } from '../../chunks/Comment_BEIDKC3x.mjs';
/* empty css                                 */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Copyright = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Copyright;
  const { time, sitename, title, site, id, auther } = Astro2.props;
  const articleURL = `${site}/article/${id || title}`;
  return renderTemplate`${maybeRenderHead()}<section class="byt-copyright"> <p>本文由 <span>${auther}</span> 于 ${time} 发布</p> <p>文章地址：<a${addAttribute(articleURL, "href")}>${title}</a></p> <p>本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" rel="noopener nofollow">CC BY-NC-SA 4.0</a> 许可协议。完整转载请注明来自 <a${addAttribute(site, "href")}>${sitename}</a>！</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> <path d="M245.8 214.9l-33.2 17.3c-9.4-19.6-25.2-19.9-27.5-19.9-22.1 0-33.2 14.6-33.2 43.8 0 23.6 9.2 43.8 33.2 43.8 14.5 0 24.7-7.1 30.6-21.3l30.6 15.5c-6.2 11.5-25.7 39-65.1 39-22.6 0-74-10.3-74-77.1 0-58.7 43-77.1 72.6-77.1 30.7 0 52.7 12 66 35.9zm143.1 0l-32.8 17.3c-9.5-19.8-25.7-19.9-27.9-19.9-22.1 0-33.2 14.6-33.2 43.8 0 23.6 9.2 43.8 33.2 43.8 14.5 0 24.7-7.1 30.5-21.3l31 15.5c-2.1 3.8-21.4 39-65.1 39-22.7 0-74-9.9-74-77.1 0-58.7 43-77.1 72.6-77.1 30.7 0 52.6 12 65.6 35.9zM247.6 8.1C104.7 8.1 0 123.1 0 256.1c0 138.5 113.6 248 247.6 248 129.9 0 248.4-100.9 248.4-248 0-137.9-106.6-248-248.4-248zm.9 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.4 85.4-203.3 203.7-203.3 112.5 0 202.8 89.5 202.8 203.3 0 121.7-99.7 202.8-202.8 202.8z"></path></svg> </section>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Copyright/Copyright.astro", void 0);

const $$Reward = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${SITE_CONFIG.Reward.AliPay && SITE_CONFIG.Reward.WeChat && renderTemplate`${maybeRenderHead()}<section class="byt-reward"><p>喜欢这篇文章嘛，觉得文章不错的话，奖励奖励我！</p><div class="reward-list">${SITE_CONFIG.Reward.AliPay && renderTemplate`<span class="alipay"><img${addAttribute(SITE_CONFIG.Reward.AliPay, "src")} alt="支付宝打赏">
支付宝
</span>`}${SITE_CONFIG.Reward.WeChat && renderTemplate`<span class="wechat"><img${addAttribute(SITE_CONFIG.Reward.WeChat, "src")} alt="微信打赏"> 微信
</span>`}</div></section>`}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Reward/Reward.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({ params: { article: post.data.id || post.data.title }, props: post }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const ARTICLE_COVER = await getCover(post.data.cover);
  const { Site, Title, Author, GoogleAds} = SITE_CONFIG;
  const description = getDescription(post);
  const { Content, remarkPluginFrontmatter } = await renderEntry(post);
  const { reading_time, article_word_count } = remarkPluginFrontmatter;
  const { headings } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "keywords": post.data.tags, "description": description, "pagecover": ARTICLE_COVER, "headings": headings, "activeNav": "article" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="byt-article-main byt-animation byt-animation-init main-inner"> <div class="main-inner-content"> <header> <h1>${post.data.title}</h1> <div class="article-meta"> <span class="article-meta-item"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12h3.5"></path><path d="M12 7v5"></path></svg> <time>${fmtTime(post.data.date, "YYYY-MM-DD A")}</time> <span class="count"><strong>${article_word_count || "\u4E00\u70B9"}</strong>字</span> <span class="time"><strong>${parseFloat((Number(reading_time) || 0).toFixed(1).replace(/\.0+$/, ""))}</strong>分钟</span> </span> <a class="article-meta-item"${addAttribute(`/categories/${post.data.categories}`, "href")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6h16"></path><path d="M7 12h13"></path><path d="M10 18h10"></path></svg> <span>${post.data.categories}</span> </a> </div> </header> <main> <!-- ai 生成的内容 文章概要：--> <div id="ai-content-sum" class="bg-[var(--byt-code-bg)] rounded-xl overflow-hidden clear-both p-2 my-2"> <section class="byt-space-loading !h-[2.88rem]"><span></span><span></span><span></span></section> </div> <!-- 音乐组件 --> ${post.data.music && renderTemplate`<div class="byt-node byt-music"${addAttribute(JSON.stringify({ type: post.data.music?.type, server: post.data.music?.server, id: post.data.music?.id }), "data-config")}></div>`} ${renderComponent($$result2, "Content", Content, {})} <section class="tag-list"> ${(post.data.tags || []).map((i) => renderTemplate`<a${addAttribute(`/tag/${i}`, "href")}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path> <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"></path> </svg> ${i} </a>`)} </section> </main> <footer> <!-- 打赏组件 --> ${SITE_CONFIG.Reward && (SITE_CONFIG.Reward.AliPay || SITE_CONFIG.Reward.WeChat) && renderTemplate`${renderComponent($$result2, "Reward", $$Reward, {})}`} <!-- 版权©️信息 --> ${renderComponent($$result2, "Copyright", $$Copyright, { "site": Site, "id": post.data.id, "title": post.data.title, "sitename": Title, "time": fmtTime(post.data.date, "YYYY-MM-DD A"), "auther": Author })} <!-- 底部谷歌广告 --> ${GoogleAds.ad_Client && GoogleAds.articleAD_Slot && renderTemplate`${renderComponent($$result2, "GoogleAd", $$GoogleAd, { "className": "byt-article-ad", "slotID": GoogleAds.articleAD_Slot })}`} </footer> ${checkComment() && renderTemplate`${renderComponent($$result2, "Comment", $$Comment, {})}`} ${renderComponent($$result2, "astro-anchor", "astro-anchor", { "data-post": JSON.stringify(post) })} </div> </article> ${renderScript($$result2, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/article/[...article].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/article/[...article].astro", void 0);

const $$file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/article/[...article].astro";
const $$url = "/article/[...article]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
