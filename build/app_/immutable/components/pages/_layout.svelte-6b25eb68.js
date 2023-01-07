import { _ as __vitePreload } from "../../chunks/preload-helper-f8376bb0.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, C as create_slot, H as HtmlTagHydration, e as empty, a as space, k as element, D as head_selector, E as claim_html_tag, h as detach, c as claim_space, l as claim_element, m as children, F as append_hydration, b as insert_hydration, G as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, f as transition_in, t as transition_out, o as onMount } from "../../chunks/index-e7831287.js";
import { s as setStatus } from "../../chunks/sw-73f34a9a.js";
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/vji-embark/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/vji-embark/manifest.webmanifest">' } };
function create_fragment(ctx) {
  let html_tag;
  let html_anchor;
  let t;
  let main;
  let current;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  return {
    c() {
      html_tag = new HtmlTagHydration(false);
      html_anchor = empty();
      t = space();
      main = element("main");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1h3nao2", document.head);
      html_tag = claim_html_tag(head_nodes, false);
      html_anchor = empty();
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = html_anchor;
    },
    m(target, anchor) {
      html_tag.m(ctx[0], document.head);
      append_hydration(document.head, html_anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 1)
        html_tag.p(ctx2[0]);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[1],
            !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      detach(html_anchor);
      if (detaching)
        html_tag.d();
      if (detaching)
        detach(t);
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let webManifestLink;
  let { $$slots: slots = {}, $$scope } = $$props;
  onMount(async function() {
    if (!pwaInfo) {
      return;
    }
    const { registerSW } = await __vitePreload(() => import("../../chunks/virtual_pwa-register-41891b6f.js"), true ? ["../../chunks/virtual_pwa-register-41891b6f.js","../../chunks/preload-helper-f8376bb0.js"] : void 0, import.meta.url);
    registerSW({
      immediate: true,
      onRegistered(r) {
        console.log(r);
        setStatus({ status: "installed" });
      },
      onRegisterError(err) {
        console.error(err);
        setStatus({ error: err });
      }
    });
  });
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  $$invalidate(0, webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : "");
  return [webManifestLink, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
