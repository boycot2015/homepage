import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../chunks/astro_Cs5b5Iv6.mjs';
import '../../chunks/vendor_6cuRSzg4.mjs';
import { b as getTagsList, $ as $$Archive } from '../../chunks/Archive_B_x1zsli.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DhLq0NIO.mjs';
import { S as SITE_CONFIG } from '../../chunks/scripts_CWVoRoSx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_5jcBB16y.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  let tagList = [];
  posts.forEach((post) => tagList = [...tagList, ...post.data.tags || []]);
  return [...new Set(tagList)].map((tags) => ({ params: { tags } }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tags } = Astro2.params;
  const articleList = await getTagsList(tags);
  const { Description } = SITE_CONFIG;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u6807\u7B7E ${tags} \u4E0B\u7684\u6587\u7AE0`, "description": Description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Archive", $$Archive, { "articleList": articleList })} ` })}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/tag/[...tags].astro", void 0);

const $$file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/tag/[...tags].astro";
const $$url = "/tag/[...tags]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
