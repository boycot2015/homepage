import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro_Cs5b5Iv6.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$ToolLayout } from '../chunks/ToolLayout_CsuYYQko.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<section><p>如果你是我的邻居，但是没有在这里看到自己，可以立刻马上告诉我你的 RSS 订阅地址噢～</p></section>";

				const frontmatter = {"title":"朋友的新动态","h1":"朋友的新动态 🎴","desc":"来看看我的朋友们都在干嘛.","layout":"@/layouts/ToolLayout/ToolLayout.astro","type":"friends","reading_time":0.18,"article_word_count":36};
				const file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/friends/index.md";
				const url = "/friends";
				function rawContent() {
					return "   \n               \n               \n                     \n                                               \n               \n   \n\n:::note{type=\"error\"}\n如果你是我的邻居，但是没有在这里看到自己，可以立刻马上告诉我你的 RSS 订阅地址噢～\n:::";
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
