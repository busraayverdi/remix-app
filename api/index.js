var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/layouts/footer.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Footer() {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-4 text-sm text-center text-gray-200 bg-gray-800", children: [
    "\xA9 Copyright ",
    currentYear,
    " [Brand name]. All Rights Reserved"
  ] }, void 0, !0, {
    fileName: "app/layouts/footer.jsx",
    lineNumber: 5,
    columnNumber: 6
  }, this);
}

// app/layouts/navbar.jsx
var import_react2 = require("@remix-run/react"), import_bi = require("react-icons/bi"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex items-center justify-between px-8 pt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-mono text-3xl font-extrabold uppercase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "w-28", src: "/logo.svg", alt: "Medusa" }, void 0, !1, {
      fileName: "app/layouts/navbar.jsx",
      lineNumber: 25,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/layouts/navbar.jsx",
      lineNumber: 24,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/layouts/navbar.jsx",
      lineNumber: 23,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-x-4", children: [
      {
        label: "Home",
        url: "/"
      },
      {
        label: "Products",
        url: "/products"
      },
      {
        label: "About",
        url: "/about"
      }
    ].map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { to: link.url, className: "navlink", children: link.label }, index, !1, {
      fileName: "app/layouts/navbar.jsx",
      lineNumber: 32,
      columnNumber: 6
    }, this)) }, void 0, !1, {
      fileName: "app/layouts/navbar.jsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold text-gray-600 hover:text-emerald-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react2.NavLink,
      {
        to: "/checkout",
        className: "inline-flex items-center space-x-1 transition-colors duration-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bi.BiShoppingBag, { className: "text-xl" }, void 0, !1, {
            fileName: "app/layouts/navbar.jsx",
            lineNumber: 44,
            columnNumber: 6
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "0" }, void 0, !1, {
            fileName: "app/layouts/navbar.jsx",
            lineNumber: 44,
            columnNumber: 44
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/layouts/navbar.jsx",
        lineNumber: 40,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/layouts/navbar.jsx",
      lineNumber: 39,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layouts/navbar.jsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
}

// app/layouts/index.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/layouts/index.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/layouts/index.jsx",
      lineNumber: 7,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "container flex-grow mx-auto", children }, void 0, !1, {
      fileName: "app/layouts/index.jsx",
      lineNumber: 11,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/layouts/index.jsx",
      lineNumber: 14,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layouts/index.jsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-ZJM3KCUZ.css";

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function meta() {
  return {
    charset: "utf-8",
    title: "Medusa Remix StoreFront",
    viewport: "width=device-width,initial-scale=1"
  };
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 31,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  debugger;
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-red-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: error == null ? void 0 : error.message }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 55,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/products/$productId.jsx
var productId_exports = {};
__export(productId_exports, {
  default: () => ProductRoute,
  loader: () => loader
});
var import_react5 = require("react"), import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_axios = __toESM(require("axios"));

// app/components/product-cards.jsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ProductCard({ product }) {
  let variant = product.price;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "overflow-hidden bg-white rounded-lg shadow:md hover:shadow-lg w-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Link, { to: `/products/${product.code}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "w-80", src: product.imageUrl, alt: product.name }, void 0, !1, {
      fileName: "app/components/product-cards.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold text-gray-700 hover:underline", children: product.name }, void 0, !1, {
        fileName: "app/components/product-cards.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-semibold text-teal-600", children: variant }, void 0, !1, {
        fileName: "app/components/product-cards.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-cards.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/product-cards.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/product-cards.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/products/$productId.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  debugger;
  let { code } = params, products = [], nextUrl = `https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${code}`, response = await import_axios.default.get(nextUrl);
  console.log(response);
  let data = response.data.result;
  return (0, import_node2.json)({ data });
};
function ProductRoute() {
  let { data } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ProductCard, { product: data }, data.code, !1, {
    fileName: "app/routes/products/$productId.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/products/$productId.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/products/index.jsx
var products_exports = {};
__export(products_exports, {
  default: () => ProductsIndexRoute,
  loader: () => loader2
});
var import_react7 = require("react"), import_node3 = require("@remix-run/node"), import_axios2 = __toESM(require("axios")), import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader2 = async () => {
  let horizontalProducts = [], products = [], nextUrl = "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05", data = (await import_axios2.default.get(nextUrl)).data.result;
  return horizontalProducts = [...horizontalProducts, ...data == null ? void 0 : data.horizontalProducts], products = [...products, ...data.products], (0, import_node3.json)({ horizontalProducts, products });
};
function ProductsIndexRoute() {
  let { horizontalProducts, products } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "default-carousel", className: "relative w-full", "data-carousel": "slide", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative h-56 overflow-hidden rounded-lg md:h-96", children: [
        horizontalProducts.map((horizontalProduct, item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hidden duration-700 ease-in-out", "data-carousel-item": !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ProductCard, { product: horizontalProduct }, horizontalProduct.code, !1, {
            fileName: "app/routes/products/index.jsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "w-80", src: horizontalProduct.imageUrl, alt: horizontalProduct.name }, void 0, !1, {
            fileName: "app/routes/products/index.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, item, !0, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hidden duration-700 ease-in-out", "data-carousel-item": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2", alt: "..." }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 34,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2", style: { backgroundColor: "red" }, children: [
        horizontalProducts.map((horizontalProduct, item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "button", className: "w-3 h-3 rounded-full", "aria-current": "true", "aria-label": "Slide 1", "data-carousel-slide-to": "0" }, item, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 51,
          columnNumber: 14
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "button", className: "w-3 h-3 rounded-full", "aria-current": "true", "aria-label": "Slide 1", "data-carousel-slide-to": "0" }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "button", className: "absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-non", "data-carousel-prev": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { className: "w-4 h-4 text-white dark:text-gray-800", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 1 1 5l4 4" }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 59,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Previous" }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "button", className: "absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none", "data-carousel-next": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { className: "w-4 h-4 text-white dark:text-gray-800", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 9 4-4-4-4" }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 67,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Next" }, void 0, !1, {
          fileName: "app/routes/products/index.jsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products/index.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid grid-cols-2 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2", children: products.map((product) => (
      // <ProductCard key={product.code}>
      //   <h3>{product.name}</h3>
      //   <p>Price: ${product.price}</p>
      //   <img src={product.imageUrl} alt={product.name} />
      // </ProductCard>
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ProductCard, { product }, product.code, !1, {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    )) }, void 0, !1, {
      fileName: "app/routes/products/index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products/index.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/checkout.jsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => CheckoutRoute
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function CheckoutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Checkout Page" }, void 0, !1, {
    fileName: "app/routes/checkout.jsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/checkout.jsx",
    lineNumber: 3,
    columnNumber: 6
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute
});
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "px-12 py-32 text-center text-gray-200 bg-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-5xl text-gray-100", children: "New arrivals are here" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "px-8 mt-2 font-semibold text-gray-300", children: "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock." }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_react9.Link,
      {
        to: "/products",
        className: "inline-block px-6 py-2 mt-8 text-sm font-semibold text-gray-700 transition duration-300 bg-gray-100 rounded-md hover:bg-white hover:text-gray-900 hover:scale-110 color",
        children: "Shop New Arrivals"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 14,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 7,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutRoute
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function AboutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "About" }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "mt-4 text-justify", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam maxime assumenda dolore excepturi ipsam accusantium repudiandae ducimus eum, voluptatibus, adipisci nam temporibus vel ex! Non iure dolore at mollitia." }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.jsx",
    lineNumber: 3,
    columnNumber: 6
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MDAZCIRF.js", imports: ["/build/_shared/chunk-C36A6NZL.js", "/build/_shared/chunk-4QJKEWZT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5BTBI5OP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/_index-EA54ARCI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-ONTGH2JG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-S66SK2C5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/$productId": { id: "routes/products/$productId", parentId: "root", path: "products/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/products/$productId-3STC6WR5.js", imports: ["/build/_shared/chunk-RWACRB75.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/index": { id: "routes/products/index", parentId: "root", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/products/index-UEB5KL45.js", imports: ["/build/_shared/chunk-RWACRB75.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "600463c8", hmr: void 0, url: "/build/manifest-600463C8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !1, v2_normalizeFormMethod: !0, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/products/$productId": {
    id: "routes/products/$productId",
    parentId: "root",
    path: "products/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports
  },
  "routes/products/index": {
    id: "routes/products/index",
    parentId: "root",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
