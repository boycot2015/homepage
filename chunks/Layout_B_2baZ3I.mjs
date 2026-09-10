import { c as createComponent, b as createAstro, a as renderTemplate, i as renderHead, e as renderSlot, d as addAttribute, u as unescapeHTML, r as renderComponent, F as Fragment, m as maybeRenderHead, g as renderScript, $ as $$Index$1 } from './astro_B7m96e1z.mjs';
import './vendor_6cuRSzg4.mjs';
import { S as SITE_CONFIG, g as getDescription, d as getGreat, f as fmtTime, e as getBeijingTime } from './scripts_CWVoRoSx.mjs';
/* empty css                        */
import { g as getCollection } from './_astro_content_B8BtAnm3.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Head;
  const canonicalData = new URL(Astro2.url.pathname, Astro2.site);
  const canonicalURL = canonicalData.href.replace(/\/+$/, "");
  const { Title, Keywords, Description, PageCover } = Astro2.props;
  const { Site, Title: SiteName, Subtitle, Author, Cover, DNSOptimization, Favicon } = SITE_CONFIG;
  const WebTitle = Title || SiteName;
  const SiteCover = Site + Cover;
  const WebCover = PageCover || SiteCover;
  const WebSiteData = { "@context": "https://schema.org", "@type": "WebSite", url: canonicalURL, name: WebTitle, description: Description, inLanguage: "zh-CN", image: WebCover, publisher: { "@type": "Organization", name: WebTitle, logo: { "@type": "ImageObject", url: SiteCover } } };
  const ArticleData = { "@context": "https://schema.org", "@type": "BlogPosting", mainEntityOfPage: { "@type": "WebPage", "@id": canonicalURL }, headline: WebTitle, description: Description, image: [WebCover], datePublished: (/* @__PURE__ */ new Date()).toISOString().replace("Z", `+08:00`), dateModified: (/* @__PURE__ */ new Date()).toISOString().replace("Z", `+08:00`), author: { "@type": "Person", name: Author, url: Site }, publisher: { "@type": "Organization", name: SiteName, logo: { "@type": "ImageObject", url: SiteCover } }, keywords: (Keywords || ["Astro", "\u5206\u4EAB", "\u535A\u5BA2"]).join(", ") };
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<head><meta charset="UTF-8"><meta name="referrer" content="no-referrer"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"><title>', '</title><meta name="keywords"', '><meta name="description"', '><meta name="format-detection" content="telephone=no, email=no, date=no, address=no"><!-- \u5143\u6570\u636E --><meta name="title"', '><meta name="site"', '><meta name="author"', '><meta name="generator"', '><meta name="robots" content="index, follow, max-image-preview:large"><meta itemprop="image"', '><!-- Open Graph --><meta property="article:author"', '><meta property="og:type"', '><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:locale" content="zh_CN"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:creator"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:url"', '><meta name="twitter:image"', '><!-- \u8F93\u51FA\u7ED3\u6784\u5316\u6570\u636E --><script type="application/ld+json">', '<\/script><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- DNS\u9884\u89E3\u6790 -->', "", '<!-- LINK \u6807\u7B7E --><link rel="canonical"', '><link rel="icon" type="image/x-icon"', '><!-- <link rel="stylesheet" href="/assets/css/global.css"> -->', "", "</head>"])), Title ? `${Title} | ${SiteName}` : `${SiteName} - ${Subtitle}`, addAttribute((Keywords || ["Astro", "\u5206\u4EAB", "\u535A\u5BA2"]).join(", "), "content"), addAttribute(Description, "content"), addAttribute(WebTitle, "content"), addAttribute(Site, "content"), addAttribute(Author, "content"), addAttribute(Astro2.generator, "content"), addAttribute(WebCover, "content"), addAttribute(Author, "content"), addAttribute(PageCover ? "article" : "website", "content"), addAttribute(SiteName, "content"), addAttribute(WebTitle, "content"), addAttribute(Description, "content"), addAttribute(canonicalURL, "content"), addAttribute(WebCover, "content"), addAttribute(SiteName, "content"), addAttribute(Author, "content"), addAttribute(WebTitle, "content"), addAttribute(Description, "content"), addAttribute(canonicalURL, "content"), addAttribute(WebCover, "content"), unescapeHTML(JSON.stringify(PageCover ? ArticleData : WebSiteData)), DNSOptimization.map((url) => renderTemplate`<link rel="dns-prefetch"${addAttribute(url, "href")}>`), DNSOptimization.map((url) => renderTemplate`<link rel="preconnect"${addAttribute(url, "href")}>`), addAttribute(canonicalURL, "href"), addAttribute(Favicon, "href"), renderSlot($$result, $$slots["default"]), renderHead());
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Head/Head.astro", void 0);

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

const $$Astro$6 = createAstro();
const $$Svg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Svg;
  const { src } = Astro2.props;
  const svgContent = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../../public/assets/images/svg/Nav_about.svg": () => import('./Nav_about_-gB3rnLF.mjs'),"../../../public/assets/images/svg/Nav_archives.svg": () => import('./Nav_archives_C1eKVygt.mjs'),"../../../public/assets/images/svg/Nav_book.svg": () => import('./Nav_book_Bi5GTjUx.mjs'),"../../../public/assets/images/svg/Nav_friends.svg": () => import('./Nav_friends_CSPjBggu.mjs'),"../../../public/assets/images/svg/Nav_link.svg": () => import('./Nav_link_C2ngvt9L.mjs'),"../../../public/assets/images/svg/Nav_message.svg": () => import('./Nav_message_BDb8IaNL.mjs'),"../../../public/assets/images/svg/Nav_music.svg": () => import('./Nav_music_Cq6RkXR9.mjs'),"../../../public/assets/images/svg/Nav_news.svg": () => import('./Nav_news_CgKH7ilc.mjs'),"../../../public/assets/images/svg/Nav_rss.svg": () => import('./Nav_rss_CE_G2pND.mjs'),"../../../public/assets/images/svg/Nav_talking.svg": () => import('./Nav_talking_CTjPOtfC.mjs'),"../../../public/assets/images/svg/WebSite_analytics.svg": () => import('./WebSite_analytics_DkBV0eI8.mjs'),"../../../public/assets/images/svg/WebSite_api.svg": () => import('./WebSite_api_Tjm6VOVO.mjs'),"../../../public/assets/images/svg/WebSite_github.svg": () => import('./WebSite_github_GlRKHNiR.mjs'),"../../../public/assets/images/svg/WebSite_hot.svg": () => import('./WebSite_hot_D81GwNYi.mjs'),"../../../public/assets/images/svg/WebSite_img.svg": () => import('./WebSite_img_JG2GWZck.mjs'),"../../../public/assets/images/svg/arrow_right.svg": () => import('./arrow_right_C4wqrnKM.mjs'),"../../../public/assets/images/svg/logo.svg": () => import('./logo_BG2ePwPd.mjs'),"../../../public/assets/images/svg/subway.svg": () => import('./subway_xQ3oGjUO.mjs')})), `../../../public/assets/images/svg/${src}.svg`, 8).then((m) => m.default);
  return renderTemplate`${svgContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(svgContent)}` })}`}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Svg/Svg.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="byt-search"> <main> <div class="search-input"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#B4B4B4" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path></svg> <input type="text" placeholder="搜索文章"> </div> <section class="byt-search-list"><em></em></section> </main> </section>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Search/Search.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const { activeNav, bgType } = Astro2.props;
  const { Navs, NavsShow, Title } = SITE_CONFIG;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(["byt-header", `${bgType === "swiper" ? "" : "image-banner"}`], "class:list")}> <section class="main"> <a href="/" class="home byt-hover items-center flex"> ${renderComponent($$result, "Svg", $$Svg, { "src": "logo" })} <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path><path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path></svg> --> <span>${Title || "Home"}</span> </a> <nav${addAttribute(`margin-left: ${!NavsShow.position || NavsShow.position === "right" ? "auto" : "0"}`, "style")}> ${Navs.map((i) => i.link ? renderTemplate`<a${addAttribute(`nav-link byt-hover${i.link?.includes(activeNav) ? " active" : ""}`, "class")}${addAttribute(i.link, "href")}${addAttribute(i.target ? "_blank" : "_self", "target")}> <span class="line-clamp-1">${i.text}</span> <span>${renderComponent($$result, "Svg", $$Svg, { "src": i.icon })}</span> </a>` : i.children ? renderTemplate`<div class="nav-link"> ${renderComponent($$result, "b-dropdown", "b-dropdown", { "placement": "bottomLeft", "class": "byt-dropdown group", "trigger-action": "hover" }, { "default": () => renderTemplate` <span class="gap-2 items-center h-full hidden md:flex"><span class="line-clamp-1">${i.text}</span><span class="group-hover:rotate-z-45 transition-all">${renderComponent($$result, "Svg", $$Svg, { "src": i.icon })}</span></span> ${renderComponent($$result, "b-menu", "b-menu", { "slot": "drop", "style": "max-width: 200px;", "class": "hidden" }, { "default": () => renderTemplate` ${i.children.map((j) => renderTemplate`${renderComponent($$result, "b-menu-item", "b-menu-item", { "class": "group/color", "value": JSON.stringify(j) }, { "default": () => renderTemplate`<a class="flex items-center gap-2 group-hover/color:!text-[#fff]"${addAttribute(j.link, "href")}${addAttribute(j.target ? "_blank" : "_self", "target")}>${j.text}${renderComponent($$result, "Svg", $$Svg, { "src": j.icon })}</a>` })}`)} ` })} ` })} </div>` : null)} </nav> <span class="nav-link byt-hover search-btn min-w-[4.8rem]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg> &nbsp;&nbsp;搜索</span> <span class="nav-link byt-hover menu-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6h16"></path><path d="M7 12h13"></path><path d="M10 18h10"></path></svg></span> ${renderComponent($$result, "Search", $$Search, {})} </section> </header>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Header/Header.astro", void 0);

const $$MainHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header-main"> <div class="avatar"> <img src="/assets/images/lazy-loading.webp"${addAttribute(SITE_CONFIG.Avatar, "data-byt-lz-src")} alt="avatar"> </div> <h3 class="auther text-shadow-lg !text-[#fff]">${SITE_CONFIG.Author || "-"}</h3> ${Array.isArray(SITE_CONFIG.TypeWriteList) && SITE_CONFIG.TypeWriteList.length > 0 && renderTemplate`<p class="desc text-shadow-lg !text-[#fff]"></p>`} </div>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/MainHeader/MainHeader.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="byt-footer"> <main class="flex flex-col items-center justify-center gap-2"> <p> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#fff" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"></path></svg><cite>稳定运行</cite><em class="web_time"></em></span> <a href="https://astro.build/" target="_blank" rel="noopener noreferrer"><img alt="Astro" src="/assets/images/footer/astro.svg"></a><a href="https://github.com/boycot2015/byt.blog-template-astro" target="_blank" rel="noopener noreferrer"><img alt="bytAstro-Theme" src="/assets/images/footer/theme.svg"></a> </p> <p> <a href="/sitemap-index.xml" target="_blank"><img alt="sitemap" src="/assets/images/footer/sitemap.svg"></a><a href="/rss.xml" target="_blank"><img alt="rss" src="/assets/images/footer/rss.svg"></a> <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer"><img alt="粤ICP备18002072号" src="/assets/images/footer/icp.svg"></a> </p> </main> </footer>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Footer/Footer.astro", void 0);

const $$BackTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="byt-back-top"> <svg viewBox="0 0 24 24"> <defs> <linearGradient id="Gradient" x1="0%" y1="0%" x2="100%" y2="0%"> <!-- <stop offset="0%" style="stop-color:blue;stop-opacity:1"></stop> --> <!-- <stop offset="50%" style="stop-color:violet;stop-opacity:1"></stop> --> <stop offset="100%" style="stop-color:var(--byt-main-color);stop-opacity:1"></stop> </linearGradient> </defs> <circle stroke="url(#Gradient)" cx="12" cy="12" r="10" fill="none" stroke-width="2" stroke-linecap="round" transform="rotate(-90, 12, 12)"></circle> </svg> <svg class="icon" viewBox="0 0 24 24"><path fill="none" stroke="var(--byt-main-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"></path></svg> </section>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/BackTop/BackTop.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "class": "theme-toggle" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button class="hover:text-accent relative h-9 w-9 cursor-pointer rounded-md p-2" type="button"> <span class="sr-only">Dark Theme</span> <svg aria-hidden="true" class="absolute start-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0" fill="none" focusable="false" id="sun-svg" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <svg aria-hidden="true" class="absolute start-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100" fill="none" focusable="false" id="moon-svg" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path> <path d="M19 11h2m-1 -1v2"></path> </svg> </button> ` })} ${renderScript($$result, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/FixBar/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/FixBar/ThemeToggle.astro", void 0);

const $$Astro$3 = createAstro();
const $$ThemeColorToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeColorToggle;
  const { className } = Astro2.props;
  let colors = [
    { name: "red", value: "#ef4444" },
    { name: "orange", value: "#f97316" },
    // { name: 'yellow', value: 'yellow' },
    { name: "green", value: "#10b981" },
    { name: "blue", value: "#3b82f6" }
    // { name: 'purple', value: '#8b5cf6' },
  ];
  try {
    const res = await fetch("https://zhongguose.com/colors.json", {});
    colors = await res.json();
    colors.map((el) => {
      el.value = el.hex;
    });
  } catch (error) {
    console.log(error, "ThemeColorToggle");
  }
  const getCurrentColor = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme-color") || "#3b82f6";
    }
    return "#3b82f6";
  };
  getCurrentColor();
  return renderTemplate`${renderComponent($$result, "theme-color-toggle", "theme-color-toggle", { "class": `theme-color-toggle ${className || ""}` }, { "default": () => renderTemplate` ${maybeRenderHead()}<button class="relative h-8 w-8 cursor-pointer p-1 hover:text-accent" type="button" aria-label="Change theme color"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 14 14"><!-- Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M8.09.065a7.06 7.06 0 0 0-6.676 2.893a7.06 7.06 0 0 0-.502 7.259a7.06 7.06 0 0 0 6.214 3.784a6.8 6.8 0 0 0 1.878-.259c.775-.218 1.104-.902 1.087-1.514c-.017-.59-.357-1.244-1.039-1.498l-.023-.008a1.356 1.356 0 0 1-.902-1.483A1.356 1.356 0 0 1 9.45 8.115h1.837V7.49l-.002.625a2.61 2.61 0 0 0 2.118-1.092c.481-.68.605-1.576.327-2.36A7.06 7.06 0 0 0 8.09.064m.914 13.677l-.169-.602zM2.434 3.68A5.8 5.8 0 0 1 7.92 1.303a5.8 5.8 0 0 1 4.63 3.777a1.36 1.36 0 0 1-.168 1.22a1.36 1.36 0 0 1-1.095.565H9.452v.625l.002-.625h-.001a2.606 2.606 0 0 0-2.56 2.175a2.606 2.606 0 0 0 1.73 2.865c.113.045.213.178.218.36a.33.33 0 0 1-.044.186c-.021.033-.056.067-.131.088h-.003a5.6 5.6 0 0 1-1.534.212h-.001a5.8 5.8 0 0 1-5.106-3.108a5.8 5.8 0 0 1 .412-5.963M4.5 8.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7 4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M4.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></path></svg> <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      class="h-8 w-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg> --> </button> <div class="theme-colors transition-all translate-x-[360px] duration-300 z-9999 absolute right-full top-[-90px] w-60 rounded-md backdrop-blur p-2 py-4 shadow-lg dark:bg-[var(--byt-white-color)]"> <div class="max-h-[200px] overflow-y-auto grid grid-cols-4 gap-1"> ${colors.map((color) => renderTemplate`<div class="flex flex-col text-center mx-[auto]"> <button class="h-8 w-8 cursor-pointer mx-[auto]"${addAttribute(`background-color: ${color.value}`, "style")}${addAttribute(color.value, "data-color")}${addAttribute(`Set theme color to ${color.name}`, "aria-label")}></button> <span class="line-clamp-1 w-[50px] mt-1">${color.name}</span> </div>`)} </div> </div> ` })} ${renderScript($$result, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/FixBar/ThemeColorToggle.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/FixBar/ThemeColorToggle.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fix-bar fixed bottom-4 right-4 !gap-4"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} ${renderComponent($$result, "ThemeColorToggle", $$ThemeColorToggle, {})} ${renderComponent($$result, "BackTop", $$BackTop, {})} </div>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/FixBar/index.astro", void 0);

const $$MobileSidebar = createComponent(($$result, $$props, $$slots) => {
  const { Navs, Title } = SITE_CONFIG;
  return renderTemplate`${maybeRenderHead()}<nav class="byt-sidebar"> <section class="main"> <div class="byt-sidebar-list flex items-center user-panel"> ${renderComponent($$result, "Svg", $$Svg, { "src": "logo" })} <h3>${Title}</h3> </div> <div class="byt-sidebar-list byt-link-list"> ${Navs.map((i) => i.children ? i.children.map((j) => renderTemplate`<a${addAttribute(j.link?.replace("/", ""), "class")}${addAttribute(j.link, "href")}${addAttribute(i.target ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Svg", $$Svg, { "src": j.icon })} ${j.text} </a>`) : renderTemplate`<a${addAttribute(i.link?.replace("/", ""), "class")}${addAttribute(i.link, "href")}${addAttribute(i.target ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Svg", $$Svg, { "src": i.icon })} ${i.text} </a>`)} </div> </section> </nav>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/MobileSidebar/MobileSidebar.astro", void 0);

const posts = (await getCollection("blog")).filter((i) => !i.data.hide && !i.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
const getCategories = () => {
  const categoriesList = posts.filter((i) => i.data.categories).reduce((acc, i) => {
    acc[i.data.categories] = (acc[i.data.categories] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(categoriesList).map(([title, count]) => ({ title, count }));
};
const getCountInfo = () => {
  return { ArticleCount: posts.length, CategoryCount: getCategories().length, TagCount: getTags().length };
};
const getTags = () => {
  const tagList = posts.filter((i) => i.data.tags).reduce((acc, i) => {
    (i.data.tags || []).forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
  return Object.entries(tagList).sort((a, b) => b[1] - a[1]);
};
const getRecommendArticles = () => {
  const recommendList = posts.filter((i) => i.data.recommend);
  const convert = (item) => ({ title: item.data.title, date: item.data.date, id: item.data.id || item.data.title, img: item.data.cover, desc: getDescription(item) });
  return (recommendList.length ? recommendList : posts.slice(0, 6)).filter((i) => !i.data.hide && !i.data.draft).map(convert);
};

const $$Astro$2 = createAstro();
const $$GoogleAd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GoogleAd;
  const { slotID, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`byt-ad ${className}`, "class")}>${unescapeHTML(slotID)}</div>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/GoogleAd/GoogleAd.astro", void 0);

const $$Astro$1 = createAstro();
const $$Aside = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Aside;
  const { Avatar, Author, Motto, WebSites, GoogleAds, AsideShow } = SITE_CONFIG;
  const categories = getCategories();
  const tags = getTags();
  const CountInfo = getCountInfo();
  const great = getGreat();
  const recommendArticles = getRecommendArticles();
  return renderTemplate`${maybeRenderHead()}<aside class="byt-aside"> <!-- 头像块 --> ${AsideShow.WebSitesShow && renderTemplate`<section class="byt-aside-item user"> <img class="byt-aside-avatar" src="/assets/images/lazy-loading.webp"${addAttribute(Avatar, "data-byt-lz-src")}${addAttribute(Author, "alt")}> <span class="byt-aside-auther">${Author}</span> <p class="byt-aside-motto">${Motto}</p> <section class="byt-aside-links"> ${WebSites.map((item) => renderTemplate`<a class="byt-aside-links-item"${addAttribute(item.link, "href")}${addAttribute(item.text, "title")} target="_blank" rel="noopener nofollow"> ${renderComponent($$result, "Svg", $$Svg, { "src": item.icon })} </a>`)} </section> <section class="byt-aside-info"> <div class="art-item count"> <span>${CountInfo.ArticleCount}</span> <p>文章数</p> </div> <div class="cat-item count"> <span>${CountInfo.CategoryCount}</span> <p>分类数</p> </div> <div class="tag-item count"> <span>${CountInfo.TagCount}</span> <p>标签数</p> </div> </section> <canvas class="byt-aside-canvas" width="888" height="1888"></canvas> </section>`} <!-- 随机句子块 --> ${AsideShow.ScentenceShow && renderTemplate`<section class="w-full byt-aside-item !items-start scentence !p-0"> <div class="header text-center text-xl !tracking-widest leading-[48px] text-[#fff] w-full"> <img src="/assets/images/lazy-loading.webp"${addAttribute(SITE_CONFIG.imgApi + "?t=" + (/* @__PURE__ */ new Date()).getTime(), "data-byt-lz-src")}> </div> <div class="footer w-full"> <section class="byt-space-loading !h-[40px]"><span></span><span></span><span></span></section> </div> </section>`} <!-- 博客路牌块 --> ${AsideShow.BlogsignageShow && SITE_CONFIG.Blogsignage && renderTemplate`<section class="w-full byt-aside-item blogsignage !p-0"> <div class="header flex justify-between text-center text-xl !tracking-widest leading-[48px] text-[#fff] w-full !bg-[var(--byt-main-color)] px-2"> <div class="left flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M20 9v6h-8v4.84L4.16 12L12 4.16V9z"></path></svg>
西
</div> <p class="flex-1">${SITE_CONFIG.Blogsignage}</p> <div class="right flex items-center gap-1">
东
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M4 15V9h8V4.16L19.84 12L12 19.84V15z"></path></svg> </div> </div> <div class="footer weather w-full flex items-center justify-between px-2 pb-2"> <section class="byt-space-loading !h-[300px]"><span></span><span></span><span></span></section> </div> </section>`} <!-- 公告块 --> ${SITE_CONFIG.Tips && AsideShow.GreatShow && renderTemplate`<section class="byt-aside-item tips"> <p class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M9 21v-5q-1.55-.125-3.037-.35T3 15l.5-2q2.075.575 4.2.788T12 14q2.15 0 4.275-.213T20.5 13l.5 2q-1.5.425-2.988.65T15 16v5zm3-8q-.85 0-1.425-.575T10 11q0-.825.575-1.412T12 9q.825 0 1.413.588T14 11q0 .85-.587 1.425T12 13m-7.5-3q-.65 0-1.075-.425T3 8.5q0-.625.425-1.062T4.5 7q.625 0 1.063.438T6 8.5q0 .65-.437 1.075T4.5 10m15 0q-.65 0-1.075-.425T18 8.5q0-.625.425-1.062T19.5 7q.625 0 1.063.438T21 8.5q0 .65-.437 1.075T19.5 10M7.25 6.25q-.65 0-1.075-.425T5.75 4.75q0-.625.425-1.062T7.25 3.25q.625 0 1.063.438T8.75 4.75q0 .65-.437 1.075T7.25 6.25m9.5 0q-.65 0-1.075-.425T15.25 4.75q0-.625.425-1.062t1.075-.438q.625 0 1.063.438t.437 1.062q0 .65-.437 1.075t-1.063.425M12 5q-.65 0-1.075-.425T10.5 3.5q0-.625.425-1.062T12 2q.625 0 1.063.438T13.5 3.5q0 .65-.437 1.075T12 5"></path></svg>
欢迎来访者!
</p> <div class="tips-content"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(SITE_CONFIG.Description)}` })} </div> <p>热烈欢迎🤪！来自 <span class="!text-[var(--byt-main-color)] location text-shadow-lg"><span class="blur">--</span></span> 的朋友，你好呀！😝</p>
今天你喝奶茶了嘛~🍺
<p>你的网络IP为：<span class="transition-all ip-text duration-300 blur hover:!blur-none">--</span></p>
🕞 ${great} </section>`} <!-- 公告块 --> ${SITE_CONFIG.Tips && !AsideShow.GreatShow && renderTemplate`<section class="byt-aside-item tips"> <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 9.662c2 2.338 2 4.338 0 6.338c3 .5 4.5 1 5 4c2 -3 6 -4 9 0c0 -3 1 -4 4 -4.004q -3 -2.995 0 -5.996c-3 0 -5 -2 -5 -5c-2 4 -5 3 -7.5 -1c-.5 3 -2.5 5 -5.5 5.662"></path> </svg>
公告
</span> <div class="tips-content"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(SITE_CONFIG.Tips)}` })} </div> <div class="bg w-full"><img style="width: 100%;" src="/assets/images/notice.avif" alt=""></div> </section>`} <!-- 分类块 --> ${AsideShow.CategoriesShow && renderTemplate`<section class="byt-aside-item cat"> <h3 class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path></svg>
分类
</h3> <div class="byt-aside-cat"> ${categories.sort((a, b) => b.count - a.count).map((i) => renderTemplate`<a${addAttribute(`/categories/${i.title}`, "href")}> <span class="!text-lg md:!text-sm">${i.title}</span> <i>${i.count}</i> </a>`)} </div> </section>`} <section class="sticky-aside"> <!-- 标签块 --> ${AsideShow.TagsShow && renderTemplate`<section class="byt-aside-item tags"> <h3 class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#888888" d="M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm14-4V4H7V2h11q.825 0 1.413.588T20 4v14z"></path></svg>
热门标签
</h3> <div class="byt-aside-tags"> ${tags.map((i) => renderTemplate`<a${addAttribute(`/tag/${i[0]}`, "href")}> <span class="!text-lg md:!text-sm">${i[0]}</span> <em>${i[1]}</em> </a>`)} </div> </section>`} <!-- 最新文章块 --> ${recommendArticles.length && AsideShow.recommendArticleShow && renderTemplate`<section class="byt-aside-item articles"> <h3 class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><!-- Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></path><path d="M7 7.5c1-2 3-1 3 .5c0 2-3 3-3 3s-3-1-3-3c0-1.5 2-2.5 3-.5Z"></path></g></svg>
推荐文章
</h3> <div class="byt-aside-articles"> ${recommendArticles.map((i, idx) => renderTemplate`<a${addAttribute(`/article/${i.id}`, "href")}> <span> ${idx < 3 ? renderTemplate`<i>${idx + 1}</i>` : renderTemplate`<em>${idx + 1}.</em>`} <cite class="byt-ellipsis !text-lg md:!text-sm">${i.title}</cite> </span> <time class="!text-xs">${fmtTime(i.date, "YYYY-MM-DD A")}</time> </a>`)} </div> </section>`} <!-- 谷歌广告块 --> ${GoogleAds.ad_Client && GoogleAds.asideAD_Slot && renderTemplate`<section class="byt-aside-item ad"> <h3>广而告之</h3> ${renderComponent($$result, "GoogleAd", $$GoogleAd, { "className": "byt-aside-ad", "slotID": GoogleAds.asideAD_Slot })} </section>`} ${renderSlot($$result, $$slots["default"])} </section> </aside>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/components/Aside/Aside.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, keywords, description, pagecover, activeNav, Home, headings } = Astro2.props;
  const { GoogleAds, Theme, HomeBanner, AsideShow } = SITE_CONFIG;
  const { ad_Client, asideAD_Slot, articleAD_Slot } = GoogleAds;
  if (Astro2.slots.has("aside")) {
    console.log(Astro2.slots, "Astro.slots");
    await Astro2.slots.render("aside", headings);
  }
  const railwayStation = {
    line: "5",
    destination: "\u9EC4\u8D1D\u5CAD",
    nextStation: "\u6DF1\u5733\u5317\u7AD9"
  };
  return renderTemplate`<html lang="zh-CN"> ${renderComponent($$result, "Head", $$Head, { "Title": title, "Keywords": keywords, "Description": description, "PageCover": pagecover }, { "default": async ($$result2) => renderTemplate(_b || (_b = __template(['<script src="/assets/js/wc-ui.min.js" defer><\/script>', '<script src="/assets/js/caiqi.js" defer><\/script>', ""])), ad_Client && (asideAD_Slot || articleAD_Slot) && renderTemplate(_a || (_a = __template(["<script async", ' crossorigin="anonymous"><\/script>'])), addAttribute(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ad_Client}`, "src")), renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(`<style>:root {${Object.entries(Theme).map(([key, value]) => `${key}:${value};`).join("")}--byt-main-header-height:${Home ? HomeBanner.HomeHeight : HomeBanner.PageHeight};--byt-home-banner:${pagecover ? `url(${pagecover}) center/100% no-repeat` : HomeBanner.background.split(",")[0]}}</style>`)}` })) })}${maybeRenderHead()}<body> ${renderComponent($$result, "MobileSidebar", $$MobileSidebar, {})} ${renderComponent($$result, "Header", $$Header, { "activeNav": activeNav, "bgType": HomeBanner.type })} <main class="main"> ${HomeBanner.enable && HomeBanner.type !== "swiper" && renderTemplate`${renderComponent($$result, "MainHeader", $$MainHeader, {})}`} <section class="main-inner"${addAttribute(`padding-top:${HomeBanner.enable && HomeBanner.type !== "swiper" ? "0.88rem" : "calc(66px + 0.68rem)"};flex-direction:${AsideShow.position === "left" ? "row-reverse" : "row"}`, "style")}> <section class="main-inner-content"> <div class="marquee flex grid grid-cols-2 lg:grid-cols-3 justify-between items-center text-[var(--byt-main-color)] !mb-4 gap-2 md:gap-4 w-full"> <span class="flex items-center gap-2 w-[300px]"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Feather Icon by Megumi Hano - https://github.com/feathericon/feathericon/blob/master/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M15.085 4.853a2.501 2.501 0 1 1 2.572 3.142A6 6 0 0 1 18 10v6h1c.55 0 1 .45 1 1s-.45 1-1 1h-4v1a3 3 0 0 1-6 0v-1H5c-.55 0-1-.45-1-1s.45-1 1-1h1v-6a6 6 0 0 1 5-5.917V3a1 1 0 0 1 2 0v1.083a6 6 0 0 1 2.085.77M12 20a1 1 0 0 0 1-1v-1h-2v1a1 1 0 0 0 1 1m-4-4h8v-6a4 4 0 1 0-8 0z"></path></svg> <time><span class="hidden md:inline-block">北京时间：</span><span id="bj-time">${getBeijingTime("YYYY-MM-DD HH:mm")}</span></time> </span> <a${addAttribute(`/subway/#subway-${railwayStation.line}`, "href")} class="col-span-1 lg:col-span-2 blur-bg" id="subway"> ${renderComponent($$result, "b-marquee", "b-marquee", { "class": "w-full", "data-id": railwayStation.line, "fixed": true, "style": "--banana-marquee-color: var(--byt-main-color);", "duration": "40", "content": `\u6B22\u8FCE\u4E58\u5750${railwayStation.line}\u53F7\u7EBF\uFF0C\u672C\u6B21\u5217\u8F66\u5F00\u5F80${railwayStation.destination}\u65B9\u5411\uFF0C\u4E0B\u4E00\u7AD9${railwayStation.nextStation}\uFF0C\u8BF7\u8981\u4E0B\u8F66\u7684\u4E58\u5BA2\u5E26\u597D\u60A8\u7684\u884C\u674E\u7269\u54C1\u51C6\u5907\u4E0B\u8F66\uFF1B\u6587\u660E\u51FA\u884C\uFF0C\u793C\u8BA9\u4E3A\u5148` })} </a> <!-- <b-marquee class="flex-1" id="subway" data-id={railwayStation.line} fixed style="--banana-marquee-color: var(--byt-main-color);" duration="40" content={\`欢迎乘坐\${railwayStation.line}号线，本次列车开往\${railwayStation.destination}方向，下一站\${railwayStation.nextStation}，请要下车的乘客带好您的行李物品准备下车；文明出行，礼让为先\`}></b-marquee> --> </div> ${renderSlot($$result, $$slots["default"])} </section> ${renderComponent($$result, "Aside", $$Aside, {})} </section> </main> ${renderComponent($$result, "FixBar", $$Index, {})} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Analytics", $$Index$1, {})} ${renderScript($$result, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/layouts/Layout/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/layouts/Layout/Layout.astro", void 0);

export { $$Layout as $, $$GoogleAd as a, getRecommendArticles as g };
