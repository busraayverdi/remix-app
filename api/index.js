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

// app/entry.server.tsx
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
          fileName: "app/entry.server.tsx",
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
          fileName: "app/entry.server.tsx",
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

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/layouts/footer.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Footer() {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-4 mt-5 text-sm text-center text-gray-200 bg-gray-800", children: [
    "\xA9 Akak\xE7e ",
    currentYear
  ] }, void 0, !0, {
    fileName: "app/layouts/footer.tsx",
    lineNumber: 5,
    columnNumber: 6
  }, this);
}

// app/layouts/navbar.tsx
var import_react2 = require("@remix-run/react"), import_bi = require("react-icons/bi"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex items-center justify-between px-8 pt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-mono text-3xl font-extrabold uppercase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "w-28", src: "/logo1.svg", alt: "akakce" }, void 0, !1, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 22,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-x-4", children: [
      {
        label: "\xDCr\xFCnler",
        url: "/products"
      },
      {
        label: "Hakk\u0131nda",
        url: "/about"
      }
    ].map((link, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { to: link.url, className: "navlink", children: link.label }, index, !1, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 29,
      columnNumber: 6
    }, this)) }, void 0, !1, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold text-gray-600 hover:text-emerald-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react2.NavLink,
      {
        to: "/checkout",
        className: "inline-flex items-center space-x-1 transition-colors duration-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bi.BiShoppingBag, { className: "text-xl" }, void 0, !1, {
            fileName: "app/layouts/navbar.tsx",
            lineNumber: 41,
            columnNumber: 6
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "0" }, void 0, !1, {
            fileName: "app/layouts/navbar.tsx",
            lineNumber: 41,
            columnNumber: 44
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/layouts/navbar.tsx",
        lineNumber: 37,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/layouts/navbar.tsx",
      lineNumber: 36,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layouts/navbar.tsx",
    lineNumber: 18,
    columnNumber: 3
  }, this);
}

// app/layouts/index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/layouts/index.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/layouts/index.tsx",
      lineNumber: 7,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "container flex-grow mx-auto", children }, void 0, !1, {
      fileName: "app/layouts/index.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/layouts/index.tsx",
      lineNumber: 14,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layouts/index.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-6XPZ5KJQ.css";

// app/root.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function meta() {
  return {
    charset: "utf-8",
    title: "Remix StoreFront",
    viewport: "width=device-width,initial-scale=1"
  };
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  debugger;
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-red-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: error == null ? void 0 : error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 55,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/products/$productId.tsx
var productId_exports = {};
__export(productId_exports, {
  default: () => ProductRoute,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_axios = __toESM(require("axios"));

// app/components/product-detail-cards.tsx
var import_ai = require("react-icons/ai"), import_react4 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), ProductDetailCard = ({ product }) => {
  let [productGb, setProductGb] = (0, import_react4.useState)(product.storageOptions[0]), activeStars = parseInt(product.rating), formattedNumber = product.price.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), handleVariantChange = (index) => {
    setProductGb(product.storageOptions[index]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "my-8 mx-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h6", { className: "text-s font-bold text-gray-400 my-5 ", children: product.mkName }, void 0, !1, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex float-right", children: Array(5).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_ai.AiFillStar,
        {
          className: "star",
          color: i < activeStars ? "#ffc107" : "#e4e5e9",
          size: 25
        },
        product.code,
        !1,
        {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 39,
          columnNumber: 21
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-bold text-gray-700 hover:underline my-5", children: product.productName }, void 0, !1, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20", children: product.badge }, void 0, !1, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "rounded mx-auto d-block w-60 my-5", src: product.imageUrl, alt: product.name }, void 0, !1, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col px-4  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: " flex text-center font-bold text-gray-500", children: "Kapasite Se\xE7enekleri" }, void 0, !1, {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 mt-2 xl:grid-cols-3", children: product.storageOptions.map((storageOption, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            className: `w-20 px-2 py-2 text-md hover:brightness-90 ${storageOption.id === productGb ? "bg-gray-700 text-gray-100" : "bg-gray-300 text-gray-700"}`,
            onClick: () => handleVariantChange(index),
            children: storageOption
          },
          storageOption.id,
          !1,
          {
            fileName: "app/components/product-detail-cards.tsx",
            lineNumber: 64,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-bold flex text-center mt-2", children: ` ${product.countOfPrices} sat\u0131c\u0131 i\xE7inde kargo dahil en ucuz fiyat se\xE7ene\u011Fi` }, void 0, !1, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center mt-2 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-bold text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-lg", children: formattedNumber.split(",")[0] }, void 0, !1, {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-sm", children: formattedNumber.split(",")[1] }, void 0, !1, {
          fileName: "app/components/product-detail-cards.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-bold text-teal-600", children: product.freeShipping ? "\xDCcretsiz Kargo" : "" }, void 0, !1, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-bold  text-gray-400", children: ` Son g\xFCncelleme: ${product.lastUpdate}` }, void 0, !1, {
        fileName: "app/components/product-detail-cards.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-detail-cards.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/product-detail-cards.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/product-detail-cards.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}, product_detail_cards_default = ProductDetailCard;

// app/routes/products/$productId.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  let { productId } = params, nextUrl = `https://mock.akakce.dev/product${productId}.json`;
  try {
    let data = (await import_axios.default.get(nextUrl)).data;
    return (0, import_node2.json)({ data });
  } catch {
    return (0, import_node2.json)({ error: "\xDCr\xFCn bilgisi y\xFCklenemedi. L\xFCtfen tekrar deneyin." });
  }
};
function ProductRoute() {
  let { data, error } = (0, import_react5.useLoaderData)();
  return error ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: error }, void 0, !1, {
    fileName: "app/routes/products/$productId.tsx",
    lineNumber: 26,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(product_detail_cards_default, { product: data }, data.code, !1, {
    fileName: "app/routes/products/$productId.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/products/$productId.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/products/index.tsx
var products_exports = {};
__export(products_exports, {
  default: () => ProductsIndexRoute,
  loader: () => loader2
});
var import_react8 = require("react"), import_node3 = require("@remix-run/node"), import_axios2 = __toESM(require("axios")), import_react9 = require("@remix-run/react");

// app/components/product-cards.tsx
var import_react6 = require("@remix-run/react"), import_ai2 = require("react-icons/ai"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ProductCard({ product }) {
  let formattedNumber = product.price.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { to: `/products/${product.code}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "my-8 mx-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "button", className: "relative inline-flex items-center p-3 text-sm font-large text-center text-white rounded-xl ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white \r
            bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900`, children: `% ${product.dropRatio}` }, void 0, !1, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "rounded mx-auto d-block w-60 my-5", src: product.imageUrl, alt: product.name }, void 0, !1, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col mt-2 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-s font-bold text-gray-500 my-5", children: product.name }, void 0, !1, {
        fileName: "app/components/product-cards.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "font-bold text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-lg", children: formattedNumber.split(",")[0] }, void 0, !1, {
          fileName: "app/components/product-cards.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-sm", children: [
          formattedNumber.split(",")[1],
          " TL"
        ] }, void 0, !0, {
          fileName: "app/components/product-cards.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "font-bold text-gray-400", children: `${product.countOfPrices} sat\u0131c\u0131` }, void 0, !1, {
            fileName: "app/components/product-cards.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_ai2.AiOutlineDoubleRight, { className: "ml-2" }, void 0, !1, {
            fileName: "app/components/product-cards.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/product-cards.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/product-cards.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "font-bold text-gray-400 mt-5", children: product.followCount !== void 0 ? `${product.followCount}+ takip` : "" }, void 0, !1, {
        fileName: "app/components/product-cards.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-cards.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/product-cards.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/product-cards.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/product-cards.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/product-cards.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/products/index.tsx
var import_react10 = require("@material-tailwind/react");

// app/components/product-carosel.tsx
var import_react7 = require("@remix-run/react"), import_ai3 = require("react-icons/ai"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ProductCarosel({ product }) {
  let formattedNumber = product.price.toLocaleString("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { to: `/products/${product.code}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-shrink-0 relative w-60 h-60", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "div",
        {
          className: `absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white \r
              bg-red-500 border-2 border-white rounded-full -top-2 -right-2`,
          children: `% ${product.dropRatio}`
        },
        void 0,
        !1,
        {
          fileName: "app/components/product-carosel.tsx",
          lineNumber: 18,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "img",
        {
          className: "rounded object-cover w-full h-full",
          src: product.imageUrl,
          alt: product.name
        },
        void 0,
        !1,
        {
          fileName: "app/components/product-carosel.tsx",
          lineNumber: 24,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/product-carosel.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex-grow space-y-4 ml-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "text-lg font-bold text-gray-700", children: product.name }, void 0, !1, {
        fileName: "app/components/product-carosel.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "font-bold text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-2xl", children: formattedNumber.split(",")[0] }, void 0, !1, {
          fileName: "app/components/product-carosel.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-lg", children: [
          formattedNumber.split(",")[1],
          " TL"
        ] }, void 0, !0, {
          fileName: "app/components/product-carosel.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/product-carosel.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-gray-500 font-medium", children: `${product.countOfPrices} sat\u0131c\u0131` }, void 0, !1, {
          fileName: "app/components/product-carosel.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_ai3.AiOutlineDoubleRight, { className: "text-gray-500" }, void 0, !1, {
          fileName: "app/components/product-carosel.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/product-carosel.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      product.followCount !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-gray-500 font-medium", children: `${product.followCount}+ takip` }, void 0, !1, {
        fileName: "app/components/product-carosel.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product-carosel.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/product-carosel.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/product-carosel.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/product-carosel.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/products/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader2 = async () => {
  let horizontalProducts = [], products = [], nextUrl = "https://mock.akakce.dev/page.json";
  try {
    let data = (await import_axios2.default.get(nextUrl)).data;
    horizontalProducts = [...horizontalProducts, ...data.horizontalProductList], products = [...products, ...data.productList], nextUrl = data.nextUrl;
  } catch (error) {
    throw console.error("API Call Error:", error.response ? error.response.data : error.message), new Error("Failed to fetch products from API.");
  }
  return (0, import_node3.json)({ horizontalProducts, products });
};
function ProductsIndexRoute() {
  let { horizontalProducts, products } = (0, import_react9.useLoaderData)(), [activeIndex, setActiveIndex] = (0, import_react8.useState)(0), handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? horizontalProducts.length - 1 : prevIndex - 1);
  }, handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex === horizontalProducts.length - 1 ? 0 : prevIndex + 1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex overflow-hidden", children: horizontalProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "div",
        {
          className: `transition-all duration-500 ease-in-out transform ${index === activeIndex ? "block" : "hidden"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ProductCarosel, { product }, void 0, !1, {
            fileName: "app/routes/products/index.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this)
        },
        product.code,
        !1,
        {
          fileName: "app/routes/products/index.tsx",
          lineNumber: 48,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/products/index.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react10.IconButton,
        {
          variant: "text",
          size: "lg",
          onClick: handlePrev,
          className: "!absolute top-2/4 left-4 -translate-y-2/4 p-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              className: "h-6 w-6",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/products/index.tsx",
                  lineNumber: 73,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products/index.tsx",
              lineNumber: 65,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/products/index.tsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react10.IconButton,
        {
          variant: "text",
          size: "lg",
          onClick: handleNext,
          className: "!absolute top-2/4 right-4 -translate-y-2/4 p-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              className: "h-6 w-6",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/products/index.tsx",
                  lineNumber: 95,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products/index.tsx",
              lineNumber: 87,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/products/index.tsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/products/index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-2 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ProductCard, { product }, product.code, !1, {
      fileName: "app/routes/products/index.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/products/index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products/index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => CheckoutRoute
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function CheckoutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Checkout Page" }, void 0, !1, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 3,
    columnNumber: 6
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute
});
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "px-12 py-32 text-center text-gray-200 bg-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-5xl text-gray-100", children: "New arrivals are here" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "px-8 mt-2 font-semibold text-gray-300", children: "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock." }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_react11.Link,
      {
        to: "/products",
        className: "inline-block px-6 py-2 mt-8 text-sm font-semibold text-gray-700 transition duration-300 bg-gray-100 rounded-md hover:bg-white hover:text-gray-900 hover:scale-110 color",
        children: "Shop New Arrivals"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 14,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 7,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutRoute
});
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AboutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-full mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Hakk\u0131nda" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-4 text-justify", children: "Akak\xE7e, t\xFCketiciyi do\u011Fru \xFCr\xFCn, do\u011Fru sat\u0131c\u0131 ve do\u011Fru fiyatla bulu\u015Fturan bir al\u0131\u015Fveri\u015F platformudur. ODT\xDC Teknokent'te kuruldu\u011Fu 2000 y\u0131l\u0131ndan bu yana al\u0131\u015Fveri\u015F\xE7ilere en ucuz fiyatlar\u0131 sunan Akak\xE7e, T\xFCrkiye'de h\u0131zla b\xFCy\xFCyen e-ticaret sekt\xF6r\xFCn\xFCn referans merkezi olarak \xE7al\u0131\u015F\u0131yor. Ayl\u0131k 40 milyonun \xFCzerinde al\u0131\u015Fveri\u015F\xE7iyle T\xFCrkiye e-ticaret pazar\u0131n\u0131n %95'ine tek platform \xFCzerinden, h\u0131zl\u0131 ve kolay eri\u015Fim sa\u011Flayan Akak\xE7e, h\u0131zla b\xFCy\xFCyen uzman ekibinin yan\u0131 s\u0131ra geni\u015F sat\u0131c\u0131 a\u011F\u0131 sayesinde al\u0131\u015Fveri\u015F\xE7ilerin arad\u0131klar\u0131 her t\xFCrl\xFC \xFCr\xFCn i\xE7in birinci adres haline geldi. Akak\xE7e, Japon Beenos grubu ortakl\u0131\u011F\u0131nda, g\xFC\xE7l\xFC altyap\u0131s\u0131 ve uzman kadrosuyla beraber teknoloji \xFCretiminde ger\xE7ekle\u015Ftirdi\u011Fi ilklerle sekt\xF6r\xFCne y\xF6n vermektedir." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EDT7Y3F2.js", imports: ["/build/_shared/chunk-QWFHPD2T.js", "/build/_shared/chunk-YNKH67UB.js", "/build/_shared/chunk-7HYSD3WE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2RDJMZ7C.js", imports: ["/build/_shared/chunk-KM7WCLVG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/_index-2G6HUQU6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-QQCII5GQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-37Y7T5TL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/$productId": { id: "routes/products/$productId", parentId: "root", path: "products/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/products/$productId-D73U3E5M.js", imports: ["/build/_shared/chunk-PB2TCWQP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/index": { id: "routes/products/index", parentId: "root", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/products/index-Q6XPIWYL.js", imports: ["/build/_shared/chunk-PB2TCWQP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "fa28e816", hmr: void 0, url: "/build/manifest-FA28E816.js" };

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
