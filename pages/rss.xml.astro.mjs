import { getRssString } from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_DhLq0NIO.mjs';
import { S as SITE_CONFIG, g as getDescription } from '../chunks/scripts_CWVoRoSx.mjs';
export { renderers } from '../renderers.mjs';

const { Title, Description } = SITE_CONFIG;
async function GET(context) {
  const posts = await getCollection("blog");
  const res = await getRssString({
    title: Title,
    description: Description,
    site: context.site,
    items: posts.filter((i) => !i.data.hide && !i.data.draft).map((post) => ({
      title: post.data.title,
      pubDate: post.data.updated || post.data.date,
      description: getDescription(post),
      link: `/article/${post.data.id || post.data.title}`
    })).sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
  });
  const xmlHead = '<?xml version="1.0" encoding="UTF-8"?>';
  const xmlMain = res.replace(xmlHead, `${xmlHead}<?xml-stylesheet type="text/xsl" href="/rss.xsl" ?>`).replace(/\/<\/link>/g, "</link>");
  return new Response(xmlMain, { headers: { "Content-Type": "application/xml" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
