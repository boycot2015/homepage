/*
 * @Author: boycot
 * @Date: 2025-04-07 11:31:34
 * @LastEditors: boycot
 * @LastEditTime: 2025-04-21 14:32:19
 * @Description: 
 * 
 */
import SITE_INFO from "@/config";
import { LoadScript } from "@/utils/index";
declare const twikoo: any;
const cdnUrl = 'https://cdn.jsdelivr.net';
// Twikoo 评论
const TwikooFn = async (commentDOM: string) => {
  document.querySelector(commentDOM)!.innerHTML = '<section class="byt-space-loading"><span></span><span></span><span></span></section>'
  await LoadScript(`${cdnUrl}/npm/twikoo@1.6.41/dist/twikoo.min.js`);
  twikoo.init({ envId: SITE_INFO.Comment.Twikoo.envId, el: commentDOM, onCommentLoaded: () => setTimeout(() => document.querySelectorAll('.byt-comment a[href="#"]').forEach(link => link.removeAttribute('href'))) })
}

// Waline 评论
const WalineFn = async (commentDOM: string, walineInit: any) => {
  import('@waline/client/waline.css');
  import('@waline/client/waline-meta.css');
  const { init } = await import('@waline/client');
  walineInit = init({
    el: commentDOM, path: window.location.pathname.replace(/\/$/, ''), serverURL: SITE_INFO.Comment.Waline.serverURL,
    emoji: [
      `${cdnUrl}/npm/@waline/emojis@1.3.0/alus`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/bilibili`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/bmoji`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/qq`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/tieba`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/weibo`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/soul-emoji`],
    reaction: [
      `${cdnUrl}/npm/@waline/emojis@1.3.0/tieba/tieba_agree.png`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/tieba/tieba_look_down.png`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/tieba/tieba_sunglasses.png`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/tieba/tieba_pick_nose.png`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/tieba/tieba_awkward.png`,
      `${cdnUrl}/npm/@waline/emojis@1.3.0/tieba/tieba_sleep.png`,
    ],
    requiredMeta: ['nick', 'mail'],
    imageUploader: async (file: any) => {
      const body = new FormData();
      body.append('file', file);
      // https://wp-cdn.4ce.cn/upload
      const uploadApi = SITE_INFO.Api;
      const res = await fetch(`${uploadApi}/upload`, { method: "POST", body });
      const resJson = await res.json();
      console.log(resJson, 'resJson');
      // return resJson.data.link.replace('i.imgur.com', 'wp-cdn.4ce.cn/v2');
      return resJson.data.replace('i.imgur.com', 'wp-cdn.4ce.cn/v2');
    },
    // login: 'disable',
  });
}

// 检查是否开启评论
const checkComment = () => {
  const CommentARR: any = Object.keys(SITE_INFO.Comment);
  const CommentItem = CommentARR.find((i: keyof typeof SITE_INFO.Comment) => SITE_INFO.Comment[i].enable);
  return CommentItem;
}

// 初始化评论插件
const commentInit = async (key: string, walineInit: any) => {
  // 评论 DOM 
  const commentDOM = '.byt-comment>section'
  if (!document.querySelector(commentDOM)) return;
  // 评论列表
  const CommentList: any = { TwikooFn, WalineFn };
  if (SITE_INFO.Comment[key as keyof typeof SITE_INFO.Comment].readonly) {
    document.querySelector('.byt-comment')!.classList.add('readonly');
  };
   // 初始化评论
  CommentList[`${key}Fn`](commentDOM, walineInit);
}

export { checkComment, commentInit }