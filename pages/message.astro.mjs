import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro_Cs5b5Iv6.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$ToolLayout } from '../chunks/ToolLayout_CsuYYQko.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<div class=\"w-full bg-[#fff] shadow-[var(--byt-box-shadow)] rounded-[var(--byt-main-radius)]\">\n    <div style=\"margin: 0 auto;text-align: center;\">\n        <img src=\"/assets/images/chat_bg.webp\" style=\"display: inline-block;\" height=\"100%\" alt=\"\">\n    </div>\n</div>\n<section><p>期待你的畅所欲言～</p></section>";

				const frontmatter = {"title":"留言","h1":"留言板 🌸","desc":"快友之事莫若谈。","layout":"@/layouts/ToolLayout/ToolLayout.astro","type":"message","reading_time":0.13,"article_word_count":26};
				const file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/message/index.md";
				const url = "/message";
				function rawContent() {
					return "   \n           \n            \n                \n                                               \n               \n   \n<div class=\"w-full bg-[#fff] shadow-[var(--byt-box-shadow)] rounded-[var(--byt-main-radius)]\">\n    <div style=\"margin: 0 auto;text-align: center;\">\n        <img src=\"/assets/images/chat_bg.webp\" style=\"display: inline-block;\" height=\"100%\" alt=\"\">\n    </div>\n</div>\n\n:::note{type=\"info\"}\n期待你的畅所欲言～\n:::\n\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$ToolLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
