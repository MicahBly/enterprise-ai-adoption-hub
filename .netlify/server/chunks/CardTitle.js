import { c as create_ssr_component, e as escape } from "./ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<div class="${"rounded-lg border bg-white text-gray-900 shadow-sm " + escape(className, true)}">${slots.default ? slots.default({}) : ``}</div>`;
});
const CardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<div class="${"flex flex-col space-y-1.5 p-6 " + escape(className, true)}">${slots.default ? slots.default({}) : ``}</div>`;
});
const CardContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<div class="${"p-6 pt-0 " + escape(className, true)}">${slots.default ? slots.default({}) : ``}</div>`;
});
const CardTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<h3 class="${"text-2xl font-semibold leading-none tracking-tight text-gray-900 " + escape(className, true)}">${slots.default ? slots.default({}) : ``}</h3>`;
});
export {
  Card as C,
  CardHeader as a,
  CardTitle as b,
  CardContent as c
};
