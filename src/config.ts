import { imgApi, HitokotoApi, musicApi } from './api';
import githubConfig from './github.config.ts';
const customConfig = {
  imgApi,
  HitokotoApi,
  // 博客音乐组件解析接口 metting-js
  musicApi,
  // 地图接口
  mapApi: {
    url: 'https://api.map.baidu.com',
    key: 'ZOEMtLtuqvNV7uBvRUtDYiG3jBn1GD02',
  },
  ApiDocs: 'https://doc-api.boycot.top',
  '60sApi': 'https://60s-api.viki.moe/v2', // https://api-v2.boycot.top/v2
  Api: 'https://api.boycot.top/api',// https://api-v2.boycot.top/v2
}
const MODE = process.env.MODE;
if (MODE === 'github') {
  // const githubConfig = await import('./github.config.ts');
  // Object.assign(customConfig, githubConfig.default)
  Object.assign(customConfig, githubConfig)
}
console.log(MODE, 'currentMode');
export default {
  // 网站标题
  Title: 'boycot',
  // 网站图标
  Favicon: '/favicon.svg',
  // 网站地址
  Site: 'https://www.boycot.top',
  // 网站副标题
  Subtitle: '专注于前端开发与相关技术的实战分享',
  // 网站描述
  Description: '👋🏻我是boycot 专注于前端开发与相关技术的实战分享，涵盖Vue框架、React框架、Astro框架、Node.js、Serverless等，并涉及Node、Linux、Docker等领域。同时也分享作者的生活、音乐和数码的热爱。',
  // 网站作者
  Author: 'boycot',
  // 作者头像
  Avatar: `/avatar.svg`, // https://cdn.jsdelivr.net/gh/boycot2015/picx-images-hosting@master/avatar/avatar.7pnvyzg2f.webp
  // 网站座右铭
  Motto: '越努力越幸运.',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '<p>欢迎光临我的博客 🎉</p><p>这里会分享我的日常和学习中的收集、整理及总结，希望能对你有所帮助:) 💖</p>',
  // 首页打字机文案列表
  TypeWriteList: [
    '世上无难事，只怕有心人',
    "越努力越幸运",
  ],
  // 网站创建时间
  CreateTime: '2022-06-04',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    type: 'swiper', // image | swiper, 默认 image
    swiperOptions: {
      loop: true,
      autoplay: {
       delay: 5000,
       disableOnInteraction: false
      },
      pagination: {
       el: '.swiper-pagination',
       clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    // 首页轮播图配置 (swiper 类型时生效), 可以在文章加上recommend: true 来开启
    list:[{
      title: '世上无难事，只怕有心人',
      img: `${imgApi}?t=1696428800`,
    },{
      title: '越努力越幸运',
      img: `${imgApi}?t=1696428801`,
    }],
    // 首页高度
    HomeHeight: '38.88rem',
    // 其他页面高度
    PageHeight: '28.88rem',
    // 背景
    background: `url(${imgApi}) no-repeat center 60%/cover,url(${imgApi}?t=1696428800) no-repeat center 60%/cover,url(${imgApi}?t=1696428801) no-repeat center 60%/cover`, // swiper 类型时生效，多张图片时逗号隔开，例如：'url1, url2, url3'
    // background: "url('/assets/images/home-banner.webp') no-repeat center 60%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--byt-main-color": "#126e82",
    // 字体颜色
    "--byt-font-color": "#34495e",
    // 侧边栏宽度
    "--byt-aside-width": "318px",
    // 全局圆角
    "--byt-main-radius": "0.5rem",
    // 主体内容宽度
    "--byt-main-max-width": "1200px", // 大 1458px 小 1200px
  },
  // 导航栏 (新窗口打开 target: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: '友链', link: '/links', icon: 'Nav_friends' },
    { text: '圈子', link: '/friends', icon: 'Nav_rss' },
    { text: '动态', link: '/talking', icon: 'Nav_talking' },
    { text: '新闻', link: '/news', icon: 'Nav_news' },
    { text: '书籍', link: '/eBook', icon: 'Nav_book' },
    { text: '归档', link: '/archives', icon: 'Nav_archives' },
    { text: '留言', link: '/message', icon: 'Nav_message' },
    { text: '关于', link: '/about', icon: 'Nav_about' },
    {
      text: '小站',
      icon: 'arrow_right',
      target: '',
      children: [
        { text: '音乐鉴赏', link: 'https://music.boycot.top', icon: 'Nav_music', target: '_blank' },
        { text: '地铁信息', link: '/subway', icon: 'subway' },
        { text: 'API文档', icon: 'Nav_link', link: customConfig.ApiDocs, target: '_blank' },
        { text: 'API文档_v2', icon: 'Nav_link', link: customConfig.Api, target: '_blank' },
      ]
    },
  ],
  NavsShow: {
    position: 'center', // 导航栏位置 center | right, 默认 center
  },
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/boycot2015', icon: 'WebSite_github' },
    { text: 'boycotAPI', link: customConfig.ApiDocs, icon: 'WebSite_api' },
    { text: '每日热榜', link: 'https://news.boycot.top', icon: 'WebSite_hot' },
  ],
  // 博客路牌
  Blogsignage: '我在深圳很想你',
  // 侧边栏展示
  AsideShow: {
    position: 'right', // 侧边栏位置 left | right, 默认 right
    // 是否展示一言
    ScentenceShow: true,
    // 是否展示欢迎语
    GreatShow: import.meta.env.PROD || false,
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: !import.meta.env.PROD,
    // 是否展示标签
    TagsShow: true,
    // 是否展示博客路牌
    BlogsignageShow: {
      weather: { // 天气路牌
        hoursShow: true,
        dailyShow: true,
        lifeShow: true,
      }
    },
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://cn.cravatar.com',
    'https://registry.npmmirror.com'
  ],
  // 博客音乐组件是否开启
  musicBoxShow: !import.meta.env.PROD,
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      // AhBbW9j4bNIOrrWR
      // 替换为你自己的环境 ID
      envId: 'https://comment.boycot.top'
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: 'https://waline.boycot.top'
    }
  },
  // Analytics 统计
  Analytics: {
    enable: true,
    server: 'https://byt-analytics.pages.dev', // https://byt-analytics.pages.dev/analytics.min.js
    siteId: 'blog'
  },
  // Google 广告
  GoogleAds: {
    ad_Client: '', //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
  // 文章内赞赏码
  Reward: {
    // 支付宝收款码
    AliPay: '',
    // 微信收款码
    WeChat: ''
  },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url'
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 888,
  ...customConfig
}