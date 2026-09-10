import xml2js from 'xml2js';
export { renderers } from '../../renderers.mjs';

const Link = {
  // 合并数据
  // api 为空则使用 data 静态数据
  data: [
    {
      "name": "boycot",
      "link": "https://www.boycot.top",
      "avatar": "https://www.boycot.top/favicon.svg",
      "descr": "专注于前端开发与相关技术的实战分享"
    },
    {
      "name": "boycot-nuxt博客",
      "link": "https://blog-new.boycot.top",
      "avatar": "https://blog-new.boycot.top/images/logo.png",
      "descr": "天生我材必有用，千金散尽还复来"
    },
    {
      "name": "vhan",
      "link": "https://www.vvhan.com",
      "avatar": "https://q1.qlogo.cn/g?b=qq&nk=1655466387&s=640",
      "descr": "不曾与你分享的时间,我在进步"
    },
    {
      "name": "boycotAPI",
      "link": "https://api.boycot.top",
      "avatar": "https://api.boycot.top/favicon.png",
      "descr": "免费Web API数据接口调用服务平台"
    },
    {
      "name": "bytMusic",
      "link": "https://music.boycot.top",
      "avatar": "https://music.boycot.top/favicon.svg",
      "descr": "bytMusic平台"
    },
    {
      "name": "今日诗词",
      "link": "https://www.jinrishici.com/",
      "avatar": "https://www.jinrishici.com/img/icon-small.png",
      "descr": "每次返回一句诗词根据时间、地点、天气、事件智能推荐,支持图片和 JSON 格式调用，一分钟快速部署"
    },
    {
      "name": "张洪Heo",
      "link": "https://blog.zhheo.com/",
      "avatar": "https://blog.zhheo.com//img/favicon4.0.webp",
      "descr": "分享设计与科技生活"
    },
    {
      "name": "每日手记",
      "link": "https://dailynote.boycot.top/",
      "avatar": "https://dailynote.boycot.top/favicon.svg",
      "descr": "记录美好生活"
    },
    {
      "name": "一言",
      "link": "https://hitokoto.cn/",
      "avatar": "https://hitokoto.cn/favicon.ico",
      "descr": "一言，一个在线的句子生成网站。"
    },
    {
      "name": "BIIBII - 记录生活中的技术脉搏",
      "link": "https://www.biibii.cn/",
      rss: "/feed",
      "avatar": "https://www.biibii.cn/usr/themes/HarmonyHues/assets/images/favicon.webp",
      "descr": "记录生活中的技术脉搏"
    },
    {
      "name": "唯知笔记",
      "link": "https://note.weizwz.com/",
      "avatar": "https://note.weizwz.com/favicon.ico",
      rss: "/feed.xml",
      "descr": "探索知识的无限可能"
    }
  ]
};

async function GET(context) {
  if (Link.data && Array.isArray(Link.data) && Link.data.length > 0) {
    let list = [];
    await Promise.all(Link.data.filter((i) => i.link).map(async (i) => {
      try {
        if (i.rss) {
          i.content = await fetch((i.link + i.rss).replace(/\/\/+/g, "/")).then((res) => res?.text());
        } else {
          i.content = await fetch((i.link + "/rss.xml").replace(/\/\/+/g, "/")).then((res) => res?.text());
          if (!i.content)
            i.content = await fetch((i.link + "/feed/").replace(/\/\/+/g, "/")).then((res) => res?.text());
        }
      } catch (error) {
      }
      i.content && xml2js.parseString(i.content, (err, result) => {
        if (err) ; else {
          result.rss?.channel?.[0]?.item?.slice(0, 10).map((item) => {
            list.push({
              title: item.title?.[0],
              link: item.link?.[0],
              content: item.description?.[0],
              date: item.pubDate?.[0],
              avatar: i.avatar,
              auther: item["dc:creator"]?.[0] || item.creator || i.name
            });
          });
        }
      });
    }));
    return new Response(JSON.stringify({ status: 200, data: list }));
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
