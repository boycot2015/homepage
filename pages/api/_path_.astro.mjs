import { S as SITE_CONFIG } from '../../chunks/scripts_CWVoRoSx.mjs';
export { renderers } from '../../renderers.mjs';

const Api = SITE_CONFIG.Api;
async function GET(context) {
  const { request, params } = context;
  let res;
  try {
    const hasQuery = !!request.url.split("?")[1];
    const query = hasQuery ? "?" + request.url.split("?")[1] : "";
    res = await fetch(Api + "/" + params.path + query).then((res2) => res2.json());
  } catch (error) {
  }
  return Response.json({
    status: res ? 200 : 404,
    data: res?.data || {}
  }, {
    status: res ? 200 : 404
  });
}
async function getStaticPaths() {
  const response = await fetch(Api.replace(/\/api$/g, "/swagger.json")).then((res) => res.json());
  const { paths, ...data } = response;
  return Object.keys(paths).filter((endpoint) => endpoint.split("/").length < 3).map((endpoint) => {
    return {
      params: { path: endpoint || "/" },
      props: { ...data }
    };
  }).concat([{
    params: { path: "/swagger.json" },
    props: { ...data }
  }]);
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
