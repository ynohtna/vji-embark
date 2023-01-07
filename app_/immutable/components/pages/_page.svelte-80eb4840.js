import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, F as append_hydration, B as noop, e as empty, L as update_keyed_each, u as set_data, M as destroy_each, N as destroy_block, w as create_component, x as claim_component, y as mount_component, f as transition_in, t as transition_out, z as destroy_component, K as component_subscribe, o as onMount } from "../../chunks/index-e7831287.js";
import { v as version, j as assets, k as base } from "../../chunks/singletons-a1b4880f.js";
import { p as page } from "../../chunks/stores-33177de1.js";
import { a as status } from "../../chunks/sw-73f34a9a.js";
const BROWSER = true;
const DEV = false;
const browser = BROWSER;
const dev = DEV;
function create_fragment$2(ctx) {
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  let t3;
  let section;
  let a0;
  let t4;
  let t5;
  let a1;
  let t6;
  let t7;
  let h20;
  let t8;
  let t9;
  let ul;
  let li0;
  let t10;
  let t11;
  let li1;
  let t12;
  let t13;
  let li2;
  let t14;
  let t15;
  let li3;
  let t16;
  let t17;
  let li4;
  let t18;
  let t19;
  let li5;
  let t20;
  let t21;
  let li6;
  let t22;
  let t23;
  let li7;
  let t24;
  let t25;
  let h21;
  let t26;
  let t27;
  let h22;
  let t28;
  let t29;
  let h23;
  let t30;
  let t31;
  let h24;
  let t32;
  let t33;
  let h25;
  let t34;
  let t35;
  let h26;
  let t36;
  return {
    c() {
      h1 = element("h1");
      t0 = text("VJI Embark");
      t1 = space();
      p = element("p");
      t2 = text("VJI Embark is a free remote clip launcher for Resolume Arena and Avenue VJ software.");
      t3 = space();
      section = element("section");
      a0 = element("a");
      t4 = text("Tablet App");
      t5 = space();
      a1 = element("a");
      t6 = text("Phone App");
      t7 = space();
      h20 = element("h2");
      t8 = text("Overview");
      t9 = space();
      ul = element("ul");
      li0 = element("li");
      t10 = text("tablet and phone versions (tested on iPad and iPhone)");
      t11 = space();
      li1 = element("li");
      t12 = text("4 layers");
      t13 = space();
      li2 = element("li");
      t14 = text("opacity, bypass, assignable layer invert");
      t15 = space();
      li3 = element("li");
      t16 = text("immediate blend mode changes");
      t17 = space();
      li4 = element("li");
      t18 = text('"flipvert" to quickly toggle');
      t19 = space();
      li5 = element("li");
      t20 = text("clip arming, punch-ins");
      t21 = space();
      li6 = element("li");
      t22 = text("multi-touch, faders and blend modes can be swiped across");
      t23 = space();
      li7 = element("li");
      t24 = text("lock screen");
      t25 = space();
      h21 = element("h2");
      t26 = text("Get Started");
      t27 = space();
      h22 = element("h2");
      t28 = text("Detached Demo Mode");
      t29 = space();
      h23 = element("h2");
      t30 = text("Usage");
      t31 = space();
      h24 = element("h2");
      t32 = text("Caveats");
      t33 = space();
      h25 = element("h2");
      t34 = text("FAQ");
      t35 = space();
      h26 = element("h2");
      t36 = text("Road Map");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "VJI Embark");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "VJI Embark is a free remote clip launcher for Resolume Arena and Avenue VJ software.");
      p_nodes.forEach(detach);
      t3 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      a0 = claim_element(section_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "Tablet App");
      a0_nodes.forEach(detach);
      t5 = claim_space(section_nodes);
      a1 = claim_element(section_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "Phone App");
      a1_nodes.forEach(detach);
      section_nodes.forEach(detach);
      t7 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", {});
      var h20_nodes = children(h20);
      t8 = claim_text(h20_nodes, "Overview");
      h20_nodes.forEach(detach);
      t9 = claim_space(nodes);
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t10 = claim_text(li0_nodes, "tablet and phone versions (tested on iPad and iPhone)");
      li0_nodes.forEach(detach);
      t11 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t12 = claim_text(li1_nodes, "4 layers");
      li1_nodes.forEach(detach);
      t13 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t14 = claim_text(li2_nodes, "opacity, bypass, assignable layer invert");
      li2_nodes.forEach(detach);
      t15 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t16 = claim_text(li3_nodes, "immediate blend mode changes");
      li3_nodes.forEach(detach);
      t17 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      t18 = claim_text(li4_nodes, '"flipvert" to quickly toggle');
      li4_nodes.forEach(detach);
      t19 = claim_space(ul_nodes);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      t20 = claim_text(li5_nodes, "clip arming, punch-ins");
      li5_nodes.forEach(detach);
      t21 = claim_space(ul_nodes);
      li6 = claim_element(ul_nodes, "LI", {});
      var li6_nodes = children(li6);
      t22 = claim_text(li6_nodes, "multi-touch, faders and blend modes can be swiped across");
      li6_nodes.forEach(detach);
      t23 = claim_space(ul_nodes);
      li7 = claim_element(ul_nodes, "LI", {});
      var li7_nodes = children(li7);
      t24 = claim_text(li7_nodes, "lock screen");
      li7_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      t25 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", {});
      var h21_nodes = children(h21);
      t26 = claim_text(h21_nodes, "Get Started");
      h21_nodes.forEach(detach);
      t27 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", {});
      var h22_nodes = children(h22);
      t28 = claim_text(h22_nodes, "Detached Demo Mode");
      h22_nodes.forEach(detach);
      t29 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", {});
      var h23_nodes = children(h23);
      t30 = claim_text(h23_nodes, "Usage");
      h23_nodes.forEach(detach);
      t31 = claim_space(nodes);
      h24 = claim_element(nodes, "H2", {});
      var h24_nodes = children(h24);
      t32 = claim_text(h24_nodes, "Caveats");
      h24_nodes.forEach(detach);
      t33 = claim_space(nodes);
      h25 = claim_element(nodes, "H2", {});
      var h25_nodes = children(h25);
      t34 = claim_text(h25_nodes, "FAQ");
      h25_nodes.forEach(detach);
      t35 = claim_space(nodes);
      h26 = claim_element(nodes, "H2", {});
      var h26_nodes = children(h26);
      t36 = claim_text(h26_nodes, "Road Map");
      h26_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/vji-embark/tablet");
      attr(a1, "href", "/vji-embark/phone");
      attr(ul, "class", "notes");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, section, anchor);
      append_hydration(section, a0);
      append_hydration(a0, t4);
      append_hydration(section, t5);
      append_hydration(section, a1);
      append_hydration(a1, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, h20, anchor);
      append_hydration(h20, t8);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, ul, anchor);
      append_hydration(ul, li0);
      append_hydration(li0, t10);
      append_hydration(ul, t11);
      append_hydration(ul, li1);
      append_hydration(li1, t12);
      append_hydration(ul, t13);
      append_hydration(ul, li2);
      append_hydration(li2, t14);
      append_hydration(ul, t15);
      append_hydration(ul, li3);
      append_hydration(li3, t16);
      append_hydration(ul, t17);
      append_hydration(ul, li4);
      append_hydration(li4, t18);
      append_hydration(ul, t19);
      append_hydration(ul, li5);
      append_hydration(li5, t20);
      append_hydration(ul, t21);
      append_hydration(ul, li6);
      append_hydration(li6, t22);
      append_hydration(ul, t23);
      append_hydration(ul, li7);
      append_hydration(li7, t24);
      insert_hydration(target, t25, anchor);
      insert_hydration(target, h21, anchor);
      append_hydration(h21, t26);
      insert_hydration(target, t27, anchor);
      insert_hydration(target, h22, anchor);
      append_hydration(h22, t28);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, h23, anchor);
      append_hydration(h23, t30);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, h24, anchor);
      append_hydration(h24, t32);
      insert_hydration(target, t33, anchor);
      insert_hydration(target, h25, anchor);
      append_hydration(h25, t34);
      insert_hydration(target, t35, anchor);
      insert_hydration(target, h26, anchor);
      append_hydration(h26, t36);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(section);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(h20);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(ul);
      if (detaching)
        detach(t25);
      if (detaching)
        detach(h21);
      if (detaching)
        detach(t27);
      if (detaching)
        detach(h22);
      if (detaching)
        detach(t29);
      if (detaching)
        detach(h23);
      if (detaching)
        detach(t31);
      if (detaching)
        detach(h24);
      if (detaching)
        detach(t33);
      if (detaching)
        detach(h25);
      if (detaching)
        detach(t35);
      if (detaching)
        detach(h26);
    }
  };
}
class LandingPage extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$2, safe_not_equal, {});
  }
}
const DiagnosticItems_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let dd;
  let t_value = JSON.stringify(ctx[4]) + "";
  let t;
  return {
    c() {
      dd = element("dd");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      dd = claim_element(nodes, "DD", { class: true });
      var dd_nodes = children(dd);
      t = claim_text(dd_nodes, t_value);
      dd_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(dd, "class", "svelte-c6z2oj");
    },
    m(target, anchor) {
      insert_hydration(target, dd, anchor);
      append_hydration(dd, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = JSON.stringify(ctx2[4]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(dd);
    }
  };
}
function create_each_block(key_1, ctx) {
  let div;
  let dt;
  let t0_value = ctx[1][0] + "";
  let t0;
  let t1;
  let t2;
  let each_value_1 = ctx[1].slice(1);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      dt = element("dt");
      t0 = text(t0_value);
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      dt = claim_element(div_nodes, "DT", { class: true });
      var dt_nodes = children(dt);
      t0 = claim_text(dt_nodes, t0_value);
      dt_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(dt, "class", "svelte-c6z2oj");
      attr(div, "class", "svelte-c6z2oj");
      this.first = div;
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, dt);
      append_hydration(dt, t0);
      append_hydration(div, t1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      append_hydration(div, t2);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && t0_value !== (t0_value = ctx[1][0] + ""))
        set_data(t0, t0_value);
      if (dirty & 1) {
        each_value_1 = ctx[1].slice(1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, t2);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let each_value = ctx[0];
  const get_key = (ctx2) => ctx2[1][0];
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, destroy_block, create_each_block, each_1_anchor, get_each_context);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { items = [] } = $$props;
  $$self.$$set = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
  };
  return [items];
}
class DiagnosticItems extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { items: 0 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let section;
  let diagnosticitems0;
  let t0;
  let diagnosticitems1;
  let t1;
  let landingpage;
  let current;
  diagnosticitems0 = new DiagnosticItems({ props: { items: ctx[0] } });
  diagnosticitems1 = new DiagnosticItems({ props: { items: ctx[1] } });
  landingpage = new LandingPage({});
  return {
    c() {
      section = element("section");
      create_component(diagnosticitems0.$$.fragment);
      t0 = space();
      create_component(diagnosticitems1.$$.fragment);
      t1 = space();
      create_component(landingpage.$$.fragment);
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      claim_component(diagnosticitems0.$$.fragment, section_nodes);
      t0 = claim_space(section_nodes);
      claim_component(diagnosticitems1.$$.fragment, section_nodes);
      section_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(landingpage.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(section, "class", "dump svelte-19rqu5l");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      mount_component(diagnosticitems0, section, null);
      append_hydration(section, t0);
      mount_component(diagnosticitems1, section, null);
      insert_hydration(target, t1, anchor);
      mount_component(landingpage, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const diagnosticitems0_changes = {};
      if (dirty & 1)
        diagnosticitems0_changes.items = ctx2[0];
      diagnosticitems0.$set(diagnosticitems0_changes);
      const diagnosticitems1_changes = {};
      if (dirty & 2)
        diagnosticitems1_changes.items = ctx2[1];
      diagnosticitems1.$set(diagnosticitems1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(diagnosticitems0.$$.fragment, local);
      transition_in(diagnosticitems1.$$.fragment, local);
      transition_in(landingpage.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(diagnosticitems0.$$.fragment, local);
      transition_out(diagnosticitems1.$$.fragment, local);
      transition_out(landingpage.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_component(diagnosticitems0);
      destroy_component(diagnosticitems1);
      if (detaching)
        detach(t1);
      destroy_component(landingpage, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let servers;
  let $status;
  let $page;
  component_subscribe($$self, status, ($$value) => $$invalidate(2, $status = $$value));
  component_subscribe($$self, page, ($$value) => $$invalidate(3, $page = $$value));
  let browsers = [];
  onMount(function() {
    var _a, _b, _c, _d, _e;
    const route_id = (_a = $page == null ? void 0 : $page.route) == null ? void 0 : _a.id;
    const url = $page == null ? void 0 : $page.url;
    $$invalidate(0, browsers = [
      ["navigator.online", window.navigator.onLine],
      ["navigator.standalone", window.navigator.standalone],
      [
        "navigator.serviceWorker script & state at load",
        (_c = (_b = window.navigator.serviceWorker) == null ? void 0 : _b.controller) == null ? void 0 : _c.scriptURL,
        (_e = (_d = window.navigator.serviceWorker) == null ? void 0 : _d.controller) == null ? void 0 : _e.state
      ],
      ["navigator.maxTouchPoints", window.navigator.maxTouchPoints],
      ["page", route_id, url, $page == null ? void 0 : $page.params],
      ["searchParams", url.searchParams.toString()],
      ["navigator", window.navigator.appVersion]
    ]);
  });
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4) {
      $$invalidate(1, servers = function(swstatus) {
        return [
          ["$app/environment/version", version],
          ["Detached Build", false],
          ["Build Date", "2023-01-07T13:39:50.785Z"],
          ["Build Tag", "embark"],
          ["$app/environment/browser", browser],
          ["$app/environment/dev", dev],
          ["$app/paths/assets", assets],
          ["$app/paths/base", base],
          ["service worker $status", swstatus]
        ];
      }($status));
    }
  };
  return [browsers, servers, $status];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
