<template>
  <main>
    <section>
      <div class="title_container">
        <h1 class="title_txt">CATALOG</h1>
      </div>
      <div class="top_container">
        <div class="main_bg">
          <h2 class="main_title">てぬぐい</h2>
          <img class="main_img"></img>
        </div>
        <div class="detail_container">
          <div id="img_container">
            <img class="detail_img"></img>
            <img class="detail_img"></img>
            <img class="detail_img"></img>
            <img class="detail_img"></img>
            <img class="detail_img"></img>
            <img class="detail_img"></img>
            <img class="detail_img"></img>
            <img class="detail_img"></img>
          </div>
          <div id="word_container"><p class="paragraph">hooooooooooooooooooooooooooooooooo</p></div>
        </div>
      </div>
      <div class="centerize_container">
        <div class="photo_bg">
          <img class="photo_item"></img>
          <img class="photo_item"></img>
          <img class="photo_item"></img>
          <img class="photo_item"></img>
        </div>
      </div>
    </section>
    <section>
      <div class="title_container">
        <h1 class="title_txt">How to order</h1>
      </div>
      <div class="page_container">
        <instagram-embed
          :url="'https://www.instagram.com/p/Bs_yHwHBjKo/'"
        />
      </div>
    </section>
  </main>

</template>
<style scoped lang="scss">
  .top_container{
    height: 60vh;
    width: 100vw;
    background-color: rgb(0, 200, 0);
    display: flex;
    //position: relative;
    .main_bg{
      width: 40vw;
      height: auto;
      background-color: rgb(100, 0, 100);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .main_title{
        // top: 10px;
        // left: 10px;
        // width: 30vw;
        // height: 30vw;
      }
      .main_img{
        width: 25vw;
        height: 25vw;
        background-color: #444;
        // top: 10px;
        // left: 10px;
      }
    }
    .detail_container{
      width: 60vw;
      height: auto;
      background-color: rgb(100, 150, 200);
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // flex-direction: column;
      #img_container{
        background-color: rgb(100, 150, 0);
        height: 30vh;
        width: 60vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .detail_img{
          margin: 10px;
          height: 10vh;
          width: 13vw;
        }
      }
      #word_container{
        height: 30vh;
        width: 60vw;
        background-color: rgb(200, 150, 0);
        .paragraph{
          background-color: #111;
          //margin: 10px;
        }
      }
    }
  }
  .centerize_container{
    .photo_bg{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100vw;
      background-color: rgb(0, 255, 0);
      .photo_item{
        width: 20vw;
        height: 20vw;
        margin: 10px;
        background-color: rgb(0, 0, 0);
      }
    }
  }
</style>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  }
}
</script>
