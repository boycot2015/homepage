import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro_B7m96e1z.mjs';
import '../chunks/vendor_6cuRSzg4.mjs';
import { $ as $$ToolLayout } from '../chunks/ToolLayout_0rsHwAfW.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<section><p>✉️ 在评论区按以上格式留下你的友链数据，和我互换友链吧！</p><p>👭 排名不分先后，每次刷新 友链 会随机排列噢~</p></section>\n<section class=\"byt-code-box\"><span class=\"byt-code-copy\"></span><pre class=\"astro-code astro-code-themes everforest-light everforest-dark\" style=\"background-color:#fdf6e3;--shiki-dark-bg:#2d353b;color:#5c6a72;--shiki-dark:#d3c6aa; overflow-x: auto;\" tabindex=\"0\" data-language=\"yaml\"><code><span class=\"line\"><span style=\"color:#F57D26;--shiki-dark:#E69875\">name</span><span style=\"color:#939F91;--shiki-dark:#859289\">:</span><span style=\"color:#8DA101;--shiki-dark:#A7C080\"> boycot博客</span></span>\n<span class=\"line\"><span style=\"color:#F57D26;--shiki-dark:#E69875\">link</span><span style=\"color:#939F91;--shiki-dark:#859289\">:</span><span style=\"color:#8DA101;--shiki-dark:#A7C080\"> https://www.boycot.top/</span></span>\n<span class=\"line\"><span style=\"color:#F57D26;--shiki-dark:#E69875\">avatar</span><span style=\"color:#939F91;--shiki-dark:#859289\">:</span><span style=\"color:#8DA101;--shiki-dark:#A7C080\"> https://www.boycot.top/favicon.svg</span></span>\n<span class=\"line\"><span style=\"color:#F57D26;--shiki-dark:#E69875\">desc</span><span style=\"color:#939F91;--shiki-dark:#859289\">:</span><span style=\"color:#8DA101;--shiki-dark:#A7C080\"> 越努力越幸运.</span></span></code></pre></section>";

				const frontmatter = {"title":"友情链接","h1":"朋友圈 👭","desc":"天下快意之事莫若友。","layout":"@/layouts/ToolLayout/ToolLayout.astro","type":"links","reading_time":0.295,"article_word_count":59};
				const file = "/Users/boycott/Desktop/my-project/boycot/byt.github/src/pages/links/index.md";
				const url = "/links";
				function rawContent() {
					return "   \n             \n            \n                  \n                                               \n             \n   \n\n:::note{type=\"success\"}\n✉️ 在评论区按以上格式留下你的友链数据，和我互换友链吧！\n\n👭 排名不分先后，每次刷新 友链 会随机排列噢~\n:::\n\n```yaml\nname: boycot博客\nlink: https://www.boycot.top/\navatar: https://www.boycot.top/favicon.svg\ndesc: 越努力越幸运.\n```\n";
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
