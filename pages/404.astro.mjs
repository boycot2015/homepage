import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro_B7m96e1z.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_bLRsw50L.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<section><p>你来到了一个不存在的页面。</p></section>";

				const frontmatter = {"title":"404 Not Found","h1":"404 Not Found","layout":"@/layouts/PageLayout/PageLayout.astro","comment":false,"reading_time":0.06,"article_word_count":12};
				const file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/404.md";
				const url = "/404";
				function rawContent() {
					return "   \n                      \n                   \n                                               \n              \n   \n\n:::note{type=\"error\"}\n你来到了一个不存在的页面。\n:::";
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

					return renderTemplate`${renderComponent(result, 'Layout', $$PageLayout, {
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
