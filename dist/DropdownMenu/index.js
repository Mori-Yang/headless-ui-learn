import { j as s } from "../_virtual/jsx-runtime.js";
const c = ({ items: n, onItemClick: r }) => /* @__PURE__ */ s.jsx("div", { className: "dropdown-menu", children: n.map((e, i) => /* @__PURE__ */ s.jsx("div", { className: "item-container", onClick: () => {
  r(e);
}, children: /* @__PURE__ */ s.jsxs("div", { className: "details", children: [
  /* @__PURE__ */ s.jsx("div", { children: e.text }),
  /* @__PURE__ */ s.jsx("small", { children: e.description })
] }) }, i)) });
export {
  c as DropdownMenu
};
//# sourceMappingURL=index.js.map
