<template>
  <main>
    
    <div id='collection-component-1640798152613'></div>
    <script type="text/javascript">
    /*<![CDATA[*/
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'gypsyworks.myshopify.com',
          storefrontAccessToken: '6b99c2bda6bc5033ae84e90b037b45d6',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('collection', {
            id: '264384970795',
            node: document.getElementById('collection-component-1640798152613'),
            moneyFormat: '%C2%A5%7B%7Bamount_no_decimals%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px",
              "width": "calc(25% - 20px)"
            },
            "img": {
              "height": "calc(100% - 15px)",
              "position": "absolute",
              "left": "0",
              "right": "0",
              "top": "0"
            },
            "imgWrapper": {
              "padding-top": "calc(75% + 15px)",
              "position": "relative",
              "height": "0"
            }
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        }
      },
      "toggle": {}
    },
          });
        });
      }
    })();
    /*]]>*/
    </script>
  </main>
</template>
<!--
<script>

import axios from 'axios'
export default {
  methods: {
    authenticate() {
      console.log("authenticate");
      axios.post('https://api.shop-pro.jp',
      {
          params: {
            client_id: 'df217f34f6b744b413eab6e5e8749d5fb03d7eea16c417a31477f4a02d6e86fc',
            client_secret: 'edbc31535e275c074ddf4575e6b62d0200c6b1b2d5591441ef2f6b1efdd01a1e',
            code: this.$route.query.code,
            grant_type: 'authorization_code',
            redirect_uri: 'https://dubryu.github.io/gypsyworks/categorys'
          }
      })
          .then(response => {
              console.log("response isssssssssssssssssssssssssss");
              console.log(response);
              // this.store.commit('setAccessToken', response.data.access);
              // this.store.commit('setRefreshToken', response.data.refresh);
          })
          .catch(error => {
            console.log(error)
          })

    },
  }
}

</script> -->
