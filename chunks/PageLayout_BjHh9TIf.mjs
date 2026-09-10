import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot } from './astro_Cs5b5Iv6.mjs';
import './vendor_6cuRSzg4.mjs';
import { S as SITE_CONFIG, c as checkComment } from './scripts_CWVoRoSx.mjs';
import { $ as $$Layout } from './Layout_5jcBB16y.mjs';
import { $ as $$Comment } from './Comment_BEIDKC3x.mjs';
/* empty css                        */
/* empty css                      */

const $$Astro = createAstro();
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { frontmatter } = Astro2.props;
  const { Description, Title } = SITE_CONFIG;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title || Title, "description": Description, "activeNav": frontmatter.type || "-" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section${addAttribute(`byt-page byt-${frontmatter.type || ""} byt-animation byt-animation-init`, "class")}> <header class="byt-page-header"> <h1>${frontmatter.h1}</h1> <p>${frontmatter.desc}</p> </header> <main>${renderSlot($$result2, $$slots["default"])}</main> ${checkComment() && frontmatter.comment != false && renderTemplate`${renderComponent($$result2, "Comment", $$Comment, {})}`} </section> ` })}`;
}, "/Users/boycott/Desktop/my-project/boycot/byt.github/src/layouts/PageLayout/PageLayout.astro", void 0);

export { $$PageLayout as $ };
