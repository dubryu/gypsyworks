(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{347:function(n,t,o){"use strict";o.r(t);o(1);var e=o(321),c=o(329),r={data:function(){return{products:[]}},mounted:function(){var n=this;console.log("get inside catalog mounted");var t=Object(e.a)({storageBucket:"gs://gypsyworks-5cf3e.appspot.com"}),o=Object(c.b)(t),r=Object(c.c)(o,"my-file");Object(c.a)(r).then((function(t){console.log(t),fetch(t).then((function(n){return n.json()})).then((function(output){for(var i in output)n.products.push([i,output[i]]);console.log("products: ",products)})).catch((function(n){return console.error(n)}))})).catch((function(n){console.log(n)}))}},l=o(47),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("main",[o("script",{attrs:{type:"text/javascript"}},[n._v('\n  /*<![CDATA[*/\n    // (function () {\n    //   var scriptURL = \'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js\';\n    //   if (window.ShopifyBuy) {\n    //     if (window.ShopifyBuy.UI) {\n    //       ShopifyBuyInit();\n    //     } else {\n    //       loadScript();\n    //     }\n    //   } else {\n    //     loadScript();\n    //   }\n    //   function loadScript() {\n    //     var script = document.createElement(\'script\');\n    //     script.async = true;\n    //     script.src = scriptURL;\n    //     (document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(script);\n    //     script.onload = ShopifyBuyInit;\n    //   }\n    //   function ShopifyBuyInit() {\n    //     var client = ShopifyBuy.buildClient({\n    //       domain: \'gypsyworks.myshopify.com\',\n    //       storefrontAccessToken: \'6b99c2bda6bc5033ae84e90b037b45d6\',\n    //     });\n    //     ShopifyBuy.UI.onReady(client).then(function (ui) {\n    //       ui.createComponent(\'collection\', {\n    //         id: \'264384970795\',\n    //         node: document.getElementById(\'collection-component-1640798152613\'),\n    //         moneyFormat: \'%C2%A5%7B%7Bamount_no_decimals%7D%7D\',\n    //         options: {\n    //           "product": {\n    //             "styles": {\n    //               "product": {\n    //                 "@media (min-width: 601px)": {\n    //                   "max-width": "calc(25% - 20px)",\n    //                   "margin-left": "20px",\n    //                   "margin-bottom": "50px",\n    //                   "width": "calc(25% - 20px)"\n    //                 },\n    //                 "img": {\n    //                   "height": "calc(100% - 15px)",\n    //                   "position": "absolute",\n    //                   "left": "0",\n    //                   "right": "0",\n    //                   "top": "0"\n    //                 },\n    //                 "imgWrapper": {\n    //                   "padding-top": "calc(75% + 15px)",\n    //                   "position": "relative",\n    //                   "height": "0"\n    //                 }\n    //               }\n    //             },\n    //             "text": {\n    //               "button": "Add to cart"\n    //             }\n    //           },\n    //           "productSet": {\n    //             "styles": {\n    //               "products": {\n    //                 "@media (min-width: 601px)": {\n    //                   "margin-left": "-20px"\n    //                 }\n    //               }\n    //             }\n    //           },\n    //           "modalProduct": {\n    //             "contents": {\n    //               "img": false,\n    //               "imgWithCarousel": true,\n    //               "button": false,\n    //               "buttonWithQuantity": true\n    //             },\n    //             "styles": {\n    //               "product": {\n    //                 "@media (min-width: 601px)": {\n    //                   "max-width": "100%",\n    //                   "margin-left": "0px",\n    //                   "margin-bottom": "0px"\n    //                 }\n    //               }\n    //             },\n    //             "text": {\n    //               "button": "Add to cart"\n    //             }\n    //           },\n    //           "option": {},\n    //           "cart": {\n    //             "text": {\n    //               "total": "Subtotal",\n    //               "button": "Checkout"\n    //             }\n    //           },\n    //           "toggle": {}\n    //         },\n    //       });\n    //     });\n    //   }\n    // })();\n  /*]]>*/\n  ')])])}],!1,null,null,null);t.default=component.exports}}]);