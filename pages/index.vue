<template>
  <main>
    <section id="topback">
      <div id="toplogo">
        <img class="logo_img" src="../static/Gypsyworks_logo_black.png"></img>
      </div>
      <div id="sns_container">
        <img class="snsimg" src="../static/Instagram_logo.png"></img>
        <img class="snsimg" src="../static/Twitter_blue.png"></img>
      </div>
    </section>
    <!-- <section>
      <div class="title_container">
        <h1 class="title_txt">カテゴリ</h1>
        <button v-on:click="authenticate">get USER</button>
        <li v-for="user in users" :key="user">{{ user.name }}</li>
      </div>
      <div class="section_container">

        <div class="centerize_container">
          <div class="storesjp-button" data-storesjp-item="5f617c82fbe5b5732acef0eb" data-storesjp-variation="5f617c82fbe5b5732acef0ed" data-storesjp-name="gypsyworks" data-storesjp-layout="layout_a" data-storesjp-lang="ja" ></div><script>(function(d,s,id){var st=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}var nst=d.createElement(s);nst.id=id;nst.src="//btn.stores.jp/button.js";nst.charset="UTF-8";st.parentNode.insertBefore(nst,st);})(document, "script", "storesjp-button");</script>
          <div class="storesjp-button" data-storesjp-item="5f617c82fbe5b5732acef0eb" data-storesjp-variation="5f617c82fbe5b5732acef0ed" data-storesjp-name="gypsyworks" data-storesjp-layout="layout_a" data-storesjp-lang="ja" ></div><script>(function(d,s,id){var st=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}var nst=d.createElement(s);nst.id=id;nst.src="//btn.stores.jp/button.js";nst.charset="UTF-8";st.parentNode.insertBefore(nst,st);})(document, "script", "storesjp-button");</script>
          <div class="storesjp-button" data-storesjp-item="5f617c82fbe5b5732acef0eb" data-storesjp-variation="5f617c82fbe5b5732acef0ed" data-storesjp-name="gypsyworks" data-storesjp-layout="layout_a" data-storesjp-lang="ja" ></div><script>(function(d,s,id){var st=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}var nst=d.createElement(s);nst.id=id;nst.src="//btn.stores.jp/button.js";nst.charset="UTF-8";st.parentNode.insertBefore(nst,st);})(document, "script", "storesjp-button");</script>
          <div class="photo_bg">
          </div>
        </div>
      </div>
    </section> -->
    <section>
      <div class="title_container">
        <h1 class="title_txt">カテゴリ</h1>
      </div>

      <div class="centerize_container">
        <div class="photo_bg">
          <div class="photo_item"></div>
          <div class="photo_caption"></div>
          <div class="storesjp-button" data-storesjp-item="5f617c82fbe5b5732acef0eb" data-storesjp-variation="5f617c82fbe5b5732acef0ed" data-storesjp-name="gypsyworks" data-storesjp-layout="layout_a" data-storesjp-lang="ja" ></div><script>(function(d,s,id){var st=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}var nst=d.createElement(s);nst.id=id;nst.src="//btn.stores.jp/button.js";nst.charset="UTF-8";st.parentNode.insertBefore(nst,st);})(document, "script", "storesjp-button");</script>
        </div>
        <div class="photo_bg"></div>
        <div class="photo_bg"></div>
      </div>

    </section>
    <section>
      <!-- <div id="app"> -->
        <div class="stage" @click="moveCat1">
          <div class="note">クリックしたあたりまでスライドします</div>
          <BoxCat1 ref="cat1" />
        </div>
      <!-- </div> -->
    </section>
    <!-- <h1>Hello world!</h1>
    <NuxtLink to="/fun">
        fun (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <NuxtLink to="/catalog">
        about (internal link that belongs to the Nuxt App)
    </NuxtLink> -->
    <section>
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
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import BoxCat1 from '../components/common/BoxCat1'
import '../assets/scss/style.scss'

export default {
  name: 'App',
  components: {
    BoxCat1
  },
  data () {
    return {
      loginForm: {
        email: '',
        password: '',
      },
      users: [],
      state: {
        accessToken: '',
        refreshToken: '',
        loggedInUser: {},
        isAuthenticated: false,
      }
    }
  },
  mutations: {
    setAccessToken (state, accessToken) {
        state.accessToken = accessToken;
    },
    // accessTokenをセットする
    setRefreshToken (state, refreshToken) {
        state.refreshToken = refreshToken;
    },
    // refreshTokenをセットする
  },
  mounted() {
    // axiosのこれが基本系
    axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {this.users = response.data; console.log("sucex:::", this.users); console.log("route:::", this.$route.query.code);})
            .catch(error => console.log(error))
    // フィルターをかける場合は以下
    // axios.get('https://jsonplaceholder.typicode.com/users', { params: {
    //     name: 'Leanne Graham' }})
    //         .then(response => {this.users = response.data; console.log("sucex:::", this.users)})
    //         .catch(error => console.log(error))

    // post
    // axios.post('https://api.shop-pro.jp',
    // {
    //     params: {
    //       client_id: 'a198b03530b63518a6432b91cae76f92d0f2541d70b6bc77b7cbe127034a9133',
    //       client_secret: 'e8f297e85799e9246e27219cb054b30a821f8a89b061aa6725ef9467c9419b3a',
    //       code: this.$route.query.code,
    //       grant_type: 'authorization_code',
    //       redirect_uri: 'https://dubryu.github.io/gypsyworks/'
    //     }
    // })
    //     .then(response => {
    //         console.log("response isssssssssssssssssssssssssss");
    //         console.log(response);
    //         this.store.commit('setAccessToken', response.data.access);
    //         this.store.commit('setRefreshToken', response.data.refresh);
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })

    // this.postData()
  },
  methods: {
    moveCat1 (ev) {
      // クリックされたX座標までスライドする
      this.$refs.cat1.moveTo(ev.offsetX, ev.offsetY)
    },
    authenticate() {
      console.log("authenticate");
      // this.$auth.loginWith('colorme');
      axios.post('https://api.shop-pro.jp',
      {
          params: {
            client_id: 'a90532a7972a0026708a2f93aeacf824566b66bf79faa257184ae8733853940d',
            client_secret: '964c63d6acbd314ad398c30b39f19f3b41524bf98e6976f49f2fb5cc1a547ae5',
            code: this.$route.query.code,
            grant_type: 'authorization_code',
            redirect_uri: 'https://dubryu.github.io/gypsyworks/'
          }
      })
          .then(response => {
              console.log("response isssssssssssssssssssssssssss");
              console.log(response);
              this.store.commit('setAccessToken', response.data.access);
              this.store.commit('setRefreshToken', response.data.refresh);
          })
          .catch(error => {
            console.log(error)
          })

    },
    async loginSubmit (session) {
      await this.$store.dispatch('auth/login', {
        email: this.loginForm.email,
        password: this.loginForm.password,
      })
      // $store.dispatch('auth/login', { this.loginForm.email, this.loginForm.password })
    },
    async postData() {
      const params = {
        client_id: '0001',
        client_secret: 'Taro',
        code: this.$route.query.code,
        grant_type: 'authorization_code',
        redirect_uri: 'https://dubryu.github.io/gypsyworks/'
      }
      const res = await this.$axios.post('https://api.shop-pro.jp', params).then(response => {
        console.log(response.data);
        console.log('res is:::::::::::::', res);
      }).catch(err => {
        return err.response
      })
    },
    // async postData() {
    //   const token = 'xxxxxxxxxxxxxx'
    //   const params = {
    //     client_id: 'cf1b5a845474eb77cef50e84089c962d7e7da35817d9add4c9e658966c7fad54',
    //     client_secret: 'fb2b45126fb414ad63f7eebc253a142a509a796cdf8adad056b08cd0cd43b7b5',
    //     code: this.$route.query.code,
    //     grant_type: 'authorization_code',
    //     redirect_uri: 'https://dubryu.github.io/gypsyworks/'
    //   }
    //   const res = await this.$axios.post('https://api.shop-pro.jp', params, {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //     console.log('res is:::::::::::::', res);
    //   })
    //   .catch(err => {
    //     console.log('error in axios is:::::::::::::');
    //     return err.response
    //   })
    //    .finally(_ => {
    //      console.log('FINAALYYYYYYYYYYYYYYYYYYYY');
    //    });
    // }
  }
}
</script>

<style scoped lang="scss">

  #topback{
    width: 100%;
    height: 80vh;
    background-color: rgb(100, 102, 200);
    // display: flex; //flexは親に設定する
    // align-items: center;
    // justify-content: center;
    //css3の中央揃え
    position: relative;
    #toplogo{
      position: absolute;
      width: 30vh;
      height: 30vh;
      // background-color: rgb(100, 250, 200);
      //css3の中央揃え
      top: 50%;
      left: 50%;
      // margin-right: -50%;
      transform: translate(-50%, -50%);
      .logo_img{
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    #sns_container{
      position:absolute;
      display: flex;
      width: 30vh;
      height: 10vh;
      left: 5%;
      bottom:10%;
      //background-color: rgb(0, 0, 200);
      .snsimg{
        margin: 0px 10px;
        //background-color: rgb(200, 0, 200);
        width: 8vh;
        height: 8vh;
      }
    }
  }
  .title_txt{
    font-family: 'TF-HOTSU_L';
    font-size: 40px;
    color: rgb(100, 150, 100);
  }

  .centerize_container{
    display: flex;
    background-color: rgb(50, 100, 150);

    .photo_bg{
      width: 18vw;
      height: 45vh;
      margin: 10px;
      background-color: rgb(100, 44,44);
      display: block;
      // justify-content: center;
      .photo_item{
        width: 16vw;
        height: 16vw;
        background-color: rgb(0, 44,44);
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
      }
      .photo_caption{
        width: 100%;
        height: 2vw;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        background-color: rgb(0, 100,44);
      }
      .storesjp-button{

      }
    }
  }

  .stage {
  position: relative;
  width: 100%;
  height: 350px;
  border: 1px solid #aaa;
  background-color: rgb(248, 248, 247);
  overflow: hidden;
  }
  .note {
  color: #888;
  text-align: center;
  position: absolute;
  width: 100%;
  user-select: none;
  }
  @font-face {
  	font-family: 'hotu';
  	src: url('../assets/fonts/TF-HOTSU_L.TTF');
    // src: local('TCM Hotsuma Character Large');
  }
</style>
