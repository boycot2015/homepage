import { c as createComponent, r as renderComponent, g as renderScript, a as renderTemplate, d as addAttribute, m as maybeRenderHead, h as renderTransition } from '../chunks/astro_Cs5b5Iv6.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$ToolLayout } from '../chunks/ToolLayout_CsuYYQko.mjs';
import { g as getAllbooks } from '../chunks/ebook_qIfkMI13.mjs';
import { S as SITE_CONFIG } from '../chunks/scripts_CWVoRoSx.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allbooks = await getAllbooks();
  const meta = {
    type: "eBook",
    description: "我最近在阅读的电子书，感兴趣的朋友可以与我一起分享",
    title: "电子书 📖"
  };
  const data = allbooks.map((el) => el.data);
  const isMaxFitContent = SITE_CONFIG.Theme["--byt-main-max-width"].includes("1200");
  return renderTemplate`${renderComponent($$result, "Layout", $$ToolLayout, { "frontmatter": meta }, { "default": async ($$result2) => renderTemplate`${data.length === 0 ? renderTemplate`${maybeRenderHead()}<section class="byt-space-loading absolute"><span></span><span></span><span></span></section>` : null} ${renderTemplate`<div class="add-btn cursor-pointer rounded-md bg-[var(--byt-white-color)] px-10 mb-4 text-[40px] w-full justify-center items-center flex flex-col h-[100px] text-[var(--byt-main-color)] transition-all duration-300 ease-in-out shadow-[var(--byt-box-shadow)]"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Majesticons by Gerrit Halfmann - https://github.com/halfmage/majesticons/blob/main/LICENSE --><g fill="currentColor"><path d="M12.5 6c-2.294 0-3.71 1.655-4.106 2.447A1 1 0 0 1 7.5 9c-.757 0-1.914.235-2.853.912C3.758 10.552 3 11.626 3 13.5s.758 2.949 1.647 3.588c.94.677 2.096.912 2.853.912a1 1 0 1 1 0 2c-1.077 0-2.67-.315-4.022-1.288C2.075 17.701 1 16.026 1 13.5s1.075-4.201 2.478-5.212c1.124-.809 2.413-1.163 3.435-1.26C7.751 5.773 9.626 4 12.5 4c2.13 0 3.65 1.08 4.607 2.33a7.133 7.133 0 0 1 1.285 2.745c.785.127 1.695.43 2.505 1.014C22.092 10.948 23 12.373 23 14.5c0 2.126-.908 3.551-2.103 4.412C19.753 19.735 18.41 20 17.5 20a1 1 0 1 1 0-2c.59 0 1.497-.185 2.228-.712c.68-.49 1.272-1.314 1.272-2.788c0-1.474-.592-2.299-1.272-2.789c-.73-.526-1.638-.711-2.228-.711a1 1 0 0 1-1-1c0-.502-.284-1.543-.982-2.455C14.85 6.67 13.87 6 12.5 6zm-1.207 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 13.414V19a1 1 0 1 1-2 0v-5.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3z"></path></g></svg> <span class="text-xl mt-2">上传</span> <input type="file" accept=".epub,.txt" hidden> </div>` }<div id="books"${addAttribute(["books grid grid-cols-2 gap-4", isMaxFitContent ? "md:grid-cols-3 lg:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"], "class:list")}> ${data.map((item, index) => renderTemplate`<div${addAttribute(`book${index + 1}`, "id")}${addAttribute(item.objectId, "data-id")} class="book-item rounded overflow-hidden bg-[var(--byt-white-color)] shadow-[var(--byt-box-shadow)]"><a${addAttribute("/eBook/" + item.title, "href")}><div${addAttribute(`w-full  overflow-hidden`, "class")}${addAttribute(`${item.title}-${item.author}`, "title")}> <img${addAttribute(item.img, "data-byt-lz-src")} class="h-[230px] sm:h-[260px] w-full object-cover"${addAttribute(item.title, "alt")}${addAttribute(renderTransition($$result2, "hx7s7sxz", "", `img-${item.title}-${item.author}`), "data-astro-transition-scope")}> <h3 class="text-center !text-sm !line-clamp-1 mt-2"${addAttribute(renderTransition($$result2, "kfnppz75", "", `title-${item.title}`), "data-astro-transition-scope")}>${item.title}-${item.author.split(".")[0]}</h3></div></a> ${renderTemplate`<div class="flex justify-center my-1"><button class="remove-btn border px-1 rounded-md text-[var(--byt-main-color)] border-[var(--byt-main-color)] cursor-pointer"${addAttribute(item.objectId, "data-object-id")}${addAttribute(`book${index + 1}`, "data-id")}>删除</button></div>` } </div>`)} </div> ` })} ${renderScript($$result, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/eBook/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/eBook/index.astro", "self");
const $$file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/eBook/index.astro";
const $$url = "/eBook";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
