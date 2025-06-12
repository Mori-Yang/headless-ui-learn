import { j as o } from "../_virtual/jsx-runtime.js";
import { useState as n } from "react";
import { DropdownMenu as p } from "../DropdownMenu/index.js";
import { Trigger as a } from "../Trigger/index.js";
const j = ({ items: r }) => {
  const [t, s] = n(!1), [e, i] = n(null);
  function l() {
    s(!t);
  }
  function m(c) {
    i(c);
  }
  return /* @__PURE__ */ o.jsxs("div", { className: "dropdown", children: [
    /* @__PURE__ */ o.jsx(
      a,
      {
        label: (e == null ? void 0 : e.text) || "Please select ...",
        onClick: l
      }
    ),
    t && /* @__PURE__ */ o.jsx(p, { items: r, onItemClick: m })
  ] });
};
export {
  j as Dropdown
};
//# sourceMappingURL=index.js.map
