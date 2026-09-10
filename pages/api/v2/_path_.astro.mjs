import { S as SITE_CONFIG } from '../../../chunks/scripts_CWVoRoSx.mjs';
export { renderers } from '../../../renderers.mjs';

const Api = SITE_CONFIG["60sApi"];
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
  const response = await fetch(Api.replace(/\/v2/g, "")).then((res) => res.json());
  const { endpoints, ...data } = response;
  return endpoints.filter((endpoint) => endpoint.split("/").length < 4).map((endpoint) => {
    return {
      params: { path: endpoint.replace(/\/v2/g, "") || "/" },
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
