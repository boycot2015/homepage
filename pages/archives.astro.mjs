import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro_B7m96e1z.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { g as getArchiveList, $ as $$Archive } from '../chunks/Archive_Clgxye_x.mjs';
import { S as SITE_CONFIG } from '../chunks/scripts_CWVoRoSx.mjs';
import { $ as $$Layout } from '../chunks/Layout_B_2baZ3I.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articleList = await getArchiveList();
  const { Description } = SITE_CONFIG;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5F52\u6863", "description": Description, "activeNav": "archives" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="byt-container"> ${renderComponent($$result2, "Archive", $$Archive, { "articleList": articleList })} </section> ` })}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/archives/index.astro", void 0);

const $$file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/archives/index.astro";
const $$url = "/archives";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
