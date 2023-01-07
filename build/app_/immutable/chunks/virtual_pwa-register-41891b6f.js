import { _ as __vitePreload } from "./preload-helper-f8376bb0.js";
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  let sendSkipWaitingMessage;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
    {
      await (sendSkipWaitingMessage == null ? void 0 : sendSkipWaitingMessage());
    }
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox } = await __vitePreload(() => import("./workbox-window.prod.es5-6a9d82f3.js"), true ? [] : void 0, import.meta.url);
      wb = new Workbox("/vji-embark/sw.js", { scope: "/vji-embark/", type: "classic" });
      sendSkipWaitingMessage = async () => {
        await (wb == null ? void 0 : wb.messageSkipWaiting());
      };
      {
        {
          let onNeedRefreshCalled = false;
          const showSkipWaitingPrompt = () => {
            onNeedRefreshCalled = true;
            wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
              if (event.isUpdate)
                window.location.reload();
            });
            onNeedRefresh == null ? void 0 : onNeedRefresh();
          };
          wb.addEventListener("installed", (event) => {
            if (typeof event.isUpdate === "undefined") {
              if (typeof event.isExternal !== "undefined") {
                if (event.isExternal)
                  showSkipWaitingPrompt();
                else
                  !onNeedRefreshCalled && (onOfflineReady == null ? void 0 : onOfflineReady());
              } else {
                if (event.isExternal)
                  window.location.reload();
                else
                  !onNeedRefreshCalled && (onOfflineReady == null ? void 0 : onOfflineReady());
              }
            } else if (!event.isUpdate) {
              onOfflineReady == null ? void 0 : onOfflineReady();
            }
          });
          wb.addEventListener("waiting", showSkipWaitingPrompt);
          wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("/vji-embark/sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
export {
  registerSW
};
