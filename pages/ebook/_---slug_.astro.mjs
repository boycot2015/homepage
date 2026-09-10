import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, g as renderScript, m as maybeRenderHead, d as addAttribute, h as renderTransition } from '../../chunks/astro_Cs5b5Iv6.mjs';
import '../../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$Layout } from '../../chunks/Layout_5jcBB16y.mjs';
import { g as getAllbooks } from '../../chunks/ebook_qIfkMI13.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = (async () => {
  const allbooks = await getAllbooks();
  return allbooks.map((book) => ({
    params: { slug: book.data.title },
    props: { book, allbooks }
  }));
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { book, allbooks } = Astro2.props;
  const meta = {
    description: book.data.description,
    title: book.data.title
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "Title": meta.title, "Keywords": "eBook", "Description": meta.description, "PageCover": book.data.img, "activeNav": "eBook" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "book-component", "book-component", { "data-book": JSON.stringify(book) }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col"> <div class="flex flex-col"${addAttribute(renderTransition($$result2, "4r7764jq", "", `title-${book.data.title}`), "data-astro-transition-scope")}> <div class="flex justify-between items-center pb-2 border-b mb-4 border-b-[var(--byt-main-color)]"> <select id="books"> ${allbooks.map((item) => renderTemplate`<option${addAttribute(item.data.title, "label")}${addAttribute(item.id, "value")}></option>`)} </select> <h3 class="text-center flex-1 text-xl">${book.data.title}</h3> <div class="cursor-pointer add-label-btn">+加入书签</div> </div> <div class="flex justify-between"> <select class="w-[40%]" id="columns"> <option label="请选择"></option> </select> <div>跳转第
<input class="border pager rounded-md mx-2 text-center w-[60px]" type="text">页
</div> </div> </div> <div class="flex justify-center items-center my-4"${addAttribute(renderTransition($$result2, "wt22fylg", "", `img-${book.data.title}-${book.data.author}`), "data-astro-transition-scope")}> <div class="w-full !text-[var(--byt-font-color)] h-[100vh] md:h-[300vh] overflow-hidden" id="book"> <!-- <div class="text-center my-20">资源加载中，请稍后...</div> --> <section class="byt-space-loading"><span></span><span></span><span></span></section> </div> </div> <div class="page flex justify-between"> <div class="btn-prev cursor-pointer hover:text-[var(--byt-font-color)]">← 上一页</div> <div class="flex w-[60%] md:w-[auto] min-w-[80px] md:absolute right-[80px] top-[4px] items-center"> <select id="marks" class="max-w-[150px]"> <option label="请选择"></option> </select> <span class="ml-2 manager-btn relative"> <svg class="cursor-pointer hover:text-[var(--byt-font-color)]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"></path></svg> <div class="booksmarks-panel flex flex-col hidden absolute right-[-100%] bottom-[120%] md:bottom-[-140px] w-60 rounded-md bg-[var(--color-global-bg)] shadow-2xl"></div> </span> </div> <div class="btn-next cursor-pointer hover:text-[var(--byt-font-color)]">下一页 →</div> </div> </div> ` })} ${renderScript($$result2, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/eBook/[...slug].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/eBook/[...slug].astro", "self");

const $$file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/eBook/[...slug].astro";
const $$url = "/eBook/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
