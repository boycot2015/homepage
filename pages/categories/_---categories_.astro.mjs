import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../chunks/astro_B7m96e1z.mjs';
import '../../chunks/vendor_6cuRSzg4.mjs';
import { a as getCategoriesList, $ as $$Archive } from '../../chunks/Archive_Clgxye_x.mjs';
import { g as getCollection } from '../../chunks/_astro_content_B8BtAnm3.mjs';
import { S as SITE_CONFIG } from '../../chunks/scripts_CWVoRoSx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_2baZ3I.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({ params: { categories: post.data.categories }, props: post }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { categories } = Astro2.params;
  const articleList = await getCategoriesList(categories);
  const { Description } = SITE_CONFIG;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u5206\u7C7B ${categories} \u4E0B\u7684\u6587\u7AE0`, "description": Description, "activeNav": "categories" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Archive", $$Archive, { "articleList": articleList })} ` })}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/categories/[...categories].astro", void 0);

const $$file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/categories/[...categories].astro";
const $$url = "/categories/[...categories]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
