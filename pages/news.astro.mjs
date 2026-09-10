import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro_B7m96e1z.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$ToolLayout } from '../chunks/ToolLayout_0rsHwAfW.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<section><p>每日新闻60s动态</p></section>";

				const frontmatter = {"title":"新闻60s动态","h1":"新闻动态 📰","desc":"新闻60s动态.","layout":"@/layouts/ToolLayout/ToolLayout.astro","type":"news","reading_time":0.035,"article_word_count":7};
				const file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/news/index.md";
				const url = "/news";
				function rawContent() {
					return "   \n                \n             \n                \n                                               \n            \n   \n\n:::note{type=\"error\"}\n每日新闻60s动态\n:::";
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
