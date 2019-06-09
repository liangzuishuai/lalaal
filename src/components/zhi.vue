<template>
  <div class="zhi">
    <Nav1 class="nav1"></Nav1>
    <div id="box">
      <ul class="ul1">
        <li
          v-for="(item,index) in tabtit"
          v-bind:class="{active:index == num}"
          @click="tab(index)"
          :key="index"
        >{{item}}</li>
      </ul>
      <ul class="ul2">
        <li v-for="(mian,index) in tabmain" v-show="index == num" :key="index">
          <img :src="mian.image1" alt>
          <img :src="mian.image2" alt>
          <img :src="mian.image3" alt>
          <img :src="mian.image4" alt>
          <img :src="mian.image5" alt>
          <img :src="mian.image6" alt>
          <img :src="mian.image7" alt>
          <img :src="mian.image8" alt>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="http://cdn.bootcss.com/vue/2.2.2/vue.min.js"></script>
<script>
import Nav1 from "../cha/nav1";
export default {
  name: "zhi",
  data() {
    return {
      msg: "哈哈哈",
      tabtit: ["热门", "穿搭", "美妆"],
      tabmain: [
        {
          title: "热门",
          image1: "../../static/images2/zhibo1.png",
          image2: "../../static/images2/zhibo2.png",
          image3: "../../static/images2/zhibo3.png",
          image4: "../../static/images2/zhibo4.png",
          image5: "../../static/images2/zhibo5.png",
          image6: "../../static/images2/zhibo6.png",
          image7: "../../static/images2/zhibo7.png",
          image8: "../../static/images2/zhibo8.png"
        },
        {
          title: "穿搭",
          image1: "../../static/images2/zhibo6.png",
          image2: "../../static/images2/zhibo5.png",
          image3: "../../static/images2/zhibo4.png",
          image4: "../../static/images2/zhibo3.png",
          image5: "../../static/images2/zhibo2.png",
          image6: "../../static/images2/zhibo1.png",
          image7: "../../static/images2/zhibo7.png",
          image8: "../../static/images2/zhibo8.png"
        },
        {
          title: "美妆",
          image1: "../../static/images2/zhibo8.png",
          image2: "../../static/images2/zhibo7.png",
          image3: "../../static/images2/zhibo6.png",
          image4: "../../static/images2/zhibo5.png",
          image5: "../../static/images2/zhibo4.png",
          image6: "../../static/images2/zhibo3.png",
          image7: "../../static/images2/zhibo2.png",
          image8: "../../static/images2/zhibo1.png"
        }
      ],
      num: 0
    };
  },
  components: {
    Nav1
  },
  methods: {
    tab(index) {
      this.num = index;
    }
  }
};
</script>

<style scoped lang="less">
@qwe: 7.2vw;
* {
  margin: 0;
  padding: 0;
  li {
    -webkit-tap-highlight-color: whitesmoke;
  }
  .zhi {
    width: 100%;
    height: 200 / @qwe;
    background-color: white;
  }
  .nav1 {
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 13vw;
    background: #ff4665;
    .biao {
      width: 4vw;
      height: 4vw;
      background: pink;
      display: inline-block;
      float: left;
      margin: 3vw 5vw;
      position: relative;
      background: url("../../static/images/shang_03.png") center center;
      -webkit-background-size: cover;
      background-size: cover;
    }
    .biao:after {
      content: "分类";
      width: 4vw;
      min-width: 3vw;
      height: 2vw;
      font-size: 2vw;
      color: #fff;
      position: absolute;
      bottom: -3vw;
      left: 0;
      word-break: keep-all; /* 不换行 */
      white-space: nowrap;
    }
    input {
      background: none;
      outline: none;
      border: 0px;
      color: #666;
      font-size: 2vw;
    }
    overflow: hidden;
    .sou {
      display: inline-block;
      width: 78vw;
      height: 4vw;
      padding: 2vw;
      background: #fff;
      border-radius: 8vw;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      // float: left;
      margin-top: 3vw;

      // margin-top: 3vw;
      span {
        display: inline-block;
        width: 4vw;
        height: 4vw;
        background: red;
        border-radius: 50%;
        overflow: hidden;
      }
      span:nth-child(1) {
        background: url("../../static/images/shang_06.png") center center
          no-repeat;
        -webkit-background-size: 85%;
        background-size: 85%;
      }
      span:nth-child(3) {
        background: url("../../static/images/shang_08.png") center center
          no-repeat;
        -webkit-background-size: 85%;
        background-size: 85%;
        // display: none
      }

      input {
        display: inline-block;
        width: 63vw;
        height: 4vw;
      }
    }
    .tou {
      width: 100%;
      height: 34vw;
      background: #fff;
    }
  }
  #box {
    margin-top: 90 / @qwe;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    .active {
      color: palevioletred;
      background: rgba(red, green, blue, alpha);
    }
    .ul1 {
      // overflow: hidden;
      width: 100%;
      position: fixed;
      top: 74 / @qwe;
      font-size: 28/@qwe;
      left: 0;
      height: 80 / @qwe;
      line-height: 90 / @qwe;
      display: flex;
      margin-top: 20 / @qwe;
      justify-content: space-around;
      background-color: white;
      border-bottom: 1px solid rgb(235, 232, 232);
    }
    .ul1 li {
      margin: 0 20 / @qwe;
      cursor: pointer;
      // color: black;
      width: 30%;
      text-align: center;
    }
    .ul2 {
      width: 100%;
      height: 1200 / @qwe;
      margin-top: 100 / @qwe;
    }
    .ul2 li {
      width: 94%;
      height: 480 / @qwe;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
}
</style>
