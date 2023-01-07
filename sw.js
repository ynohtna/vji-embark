/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-d2a14864'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "app_/immutable/assets/_page-a25a200f.css",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/_layout-9a8b0c19.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/0-9eeb7509.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/1-81822760.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/2-1cbcac3e.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/3-bb485333.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/4-2bae9b8e.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/5-e933d080.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/index-d2f4054a.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/index-e7831287.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/preload-helper-f8376bb0.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/singletons-a1b4880f.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/stores-33177de1.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/sw-73f34a9a.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/virtual_pwa-register-41891b6f.js",
    "revision": null
  }, {
    "url": "app_/immutable/chunks/workbox-window.prod.es5-6a9d82f3.js",
    "revision": null
  }, {
    "url": "app_/immutable/components/error.svelte-1fa8846c.js",
    "revision": null
  }, {
    "url": "app_/immutable/components/pages/_layout.svelte-6b25eb68.js",
    "revision": null
  }, {
    "url": "app_/immutable/components/pages/_page.svelte-5a724bf6.js",
    "revision": null
  }, {
    "url": "app_/immutable/components/pages/admin/_page.svelte-d14ce76f.js",
    "revision": null
  }, {
    "url": "app_/immutable/components/pages/phone/_page.svelte-e8c71a02.js",
    "revision": null
  }, {
    "url": "app_/immutable/components/pages/tablet/_page.svelte-e975b891.js",
    "revision": null
  }, {
    "url": "app_/immutable/modules/pages/_layout.js-fa3c4266.js",
    "revision": null
  }, {
    "url": "app_/immutable/start-03cf74d6.js",
    "revision": null
  }, {
    "url": "favicon.ico",
    "revision": "a4a642d9fd71aa7d32063de1fabbbe1a"
  }, {
    "url": "favicon.png",
    "revision": "fa133e21e04dac3472bb52e88a4e51e7"
  }, {
    "url": "logo-192.png",
    "revision": "3ed115480921e3b62a9ef5fd6e383888"
  }, {
    "url": "logo-512.png",
    "revision": "075a0f0ea6f56fbb450e16e51fc0db07"
  }, {
    "url": "maskable_icon.png",
    "revision": "60576af2938ca8448a338547f0572dd1"
  }, {
    "url": "./admin",
    "revision": "f1d80f2959c10e7680a2a819bbe9787c"
  }, {
    "url": "./",
    "revision": "2406b654b22222bdf7ea19cb8c4cfeb2"
  }, {
    "url": "./phone",
    "revision": "11f7585d39c72cb191843b221b3bca1f"
  }, {
    "url": "./tablet",
    "revision": "7e32b6ec5d792dd159768aafd109aea9"
  }, {
    "url": "manifest.webmanifest",
    "revision": "f7891dcc3588831cf22ee1095446719b"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("./"), {
    denylist: [/^\/api/]
  }));

}));
