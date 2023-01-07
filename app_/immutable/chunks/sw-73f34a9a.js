import { w as writable } from "./index-d2f4054a.js";
const _loadtime = +new Date();
const status = writable();
function setStatus(state) {
  status.set({
    ...state,
    dt: +new Date() - _loadtime
  });
}
export {
  status as a,
  setStatus as s
};
