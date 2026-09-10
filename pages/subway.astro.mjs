import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro_Cs5b5Iv6.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$Layout } from '../chunks/Layout_5jcBB16y.mjs';
import { G as GET } from '../chunks/subway_DYQJXAk8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const subway = await GET();
  const { data } = await subway.json();
  const { subways = [] } = data || {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5730\u94C1\u4FE1\u606F", "description": "\u6DF1\u5733\u5E02\u5730\u94C1\u4FE1\u606F", "activeNav": "subway" }, { "default": async ($$result2) => renderTemplate`${subways?.map((el) => renderTemplate`${maybeRenderHead()}<div class="my-4 subway-line"${addAttribute("subway-" + el.line, "id")}> ${renderComponent($$result2, "b-collapse", "b-collapse", { "style": `
                    --header-bg-color: ${el.color};
                    --banana-color-success: ${el.color};
                    --banana-color-success-hover: rgb(from var(--banana-color-success) r g b / 88%);
                    --banana-color-success-active: rgb(from var(--banana-color-success) r g b / 88%)`, "title": el.line + "\u53F7\u7EBF\uFF08\u7EC8\u70B9\u7AD9\uFF1A " + el.destination?.join("\u3001") + "\uFF09" }, { "default": () => renderTemplate` <div slot="expand-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"></path></svg> </div> <div slot="collapse-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"></path></svg> </div> <style>
                    .subway-line b-collapse::part(header) {
                        background-color: var(--header-bg-color);
                        color: #fff !important;
                    }
                    .subway-line b-collapse::part(base) {
                        border-color: var(--header-bg-color);
                    }
                </style> <div class="flex gap-4 flex-wrap"> ${el.subways?.map((item) => renderTemplate`<div${addAttribute(["byt-subway-item", !item.ZDJS ? "!flex !gap-2 w-[auto]" : "w-full flex flex-col md:block"], "class:list")}> <div class="flex-col lg:flex-row flex lg:items-center"> ${renderComponent($$result2, "b-button", "b-button", { "class": "byt-subway-name lg:mr-2", "type": "success" }, { "default": () => renderTemplate`${item.ZDMZ}${item.transfer?.length ? `\uFF08${item.time ? "\u7EC8\u70B9\u7AD9\uFF0C" : ""}\u53EF\u6362\u4E58${item.transfer.join("\u3001")}\u53F7\u7EBF\uFF09` : item.time ? "\uFF08\u7EC8\u70B9\u7AD9\uFF09" : ""}` })}  ${item.time && renderTemplate`<span class="byt-subway-time mt-2 pb-2 lg:mt-0 lg:pb-0 lg:ml-2 border-b border-b-[var(--header-bg-color)]">
发车时刻表：
                                        早：<span class="text-[var(--header-bg-color)]">${item.time?.FIRST_SUBWAY_TIME}</span>；
                                        晚：<span class="text-[var(--header-bg-color)]">${item.time?.LAST_SUBWAY_TIME}</span>，
                                        发车间隔：<span class="text-[var(--header-bg-color)]">${item.time?.INTERVAL}</span>；
                                        高峰期：<span class="text-[var(--header-bg-color)]">${item.time?.PEAK_INTERVAL}</span> </span>`} </div> ${item.ZDJS && renderTemplate`<p class="byt-subway-desc !mt-3 text-justify">${item.ZDJS}</p>`} </div>`)} </div> ` })} </div>`)}` })}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/subway/index.astro", void 0);

const $$file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/subway/index.astro";
const $$url = "/subway";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
