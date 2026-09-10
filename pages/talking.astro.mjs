import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro_B7m96e1z.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$ToolLayout } from '../chunks/ToolLayout_0rsHwAfW.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<section><p>这里记录着我想记录的生活～</p></section>";

				const frontmatter = {"title":"动态","h1":"动态 🥫","desc":"记录美好生活.","layout":"@/layouts/ToolLayout/ToolLayout.astro","type":"talking","reading_time":0.06,"article_word_count":12};
				const file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/talking/index.md";
				const url = "/talking";
				function rawContent() {
					return "   \n           \n           \n               \n                                               \n               \n   \n\n:::note{type=\"import\"}\n这里记录着我想记录的生活～\n:::\n";
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
