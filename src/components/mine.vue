<template>
  <div class="mine">
    <div class="li-header">
      <div class="small-left"></div>
      <div class="small-right"></div>
      <div class="li-nav">
        <div class="image">
          <img
            src="https://hbimg.huabanimg.com/208da5fad33ee4d84ff31d6e3ff2d8832e1bbe02228f6-slMHa8_sq320"
            alt
          >
        </div>
        <div class="li-name">
          <h4>李昂2019</h4>
        </div>
        <div class="li-small">
          <div class="li-small-nav">
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_07.png" alt>
            <span>个人信息</span>
          </div>
          <div class="li-small-nav">
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_09.png" alt>
            <span>个人主页</span>
          </div>
        </div>
      </div>
    </div>
    <div class="li-content">
      <ul class="li-ul">
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_14.png" alt>
            <span>消息</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
          <div class="em">
            <img class="em" src="../../static/image3/蘑菇街-我的/images/我的页面_17.png" alt>
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_21.png" alt>
            <span>收藏</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_27.png" alt>
            <span ref="span">关注</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_29.png" alt>
            <span>购物车</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_31.png" alt>
            <span>我的订单</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_33.png" alt>
            <span>卡券红包</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_37.png" alt>
            <span>立减金</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_40.png" alt>
            <span>足迹</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/image3/蘑菇街-我的/images/我的页面_42.png" alt>
            <span>美丽金融</span>
          </div>
          <div class="li-tou">
            <span>1</span>
            <img src="
                    ../../static/image3/蘑菇街-我的/images/我的页面_23.png" alt>
          </div>
        </li>
        <!-- <div class="li-bottom">
          <div>
            <h3>首页</h3>
          </div>
          <div>
            <h4>直播</h4>
          </div>
          <div>
            <img class="lis-img" src="../../static/image3/蘑菇街-我的/images/我的页面_45.png" alt>
          </div>
          <div>
            <h4>商城</h4>
          </div>
          <div>
            <h4 style="color:red">我</h4>
          </div>
        </div>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      msg: "Welcome mine"
    };
  },
  mounted() {
    let span = this.$refs.span;
    console.log(span);
    span.onclick = function() {
      console.log("我被点了onclick");
    };
    span.addEventListener(
      "touchstart",
      function() {
        console.log("我被点了touchstart");
      },
      false
    );
  }
  //   mounted() {
  //     var fun = function(doc, win) {
  //       var docEl = doc.documentElement,
  //         resizeEvt =
  //           "orientationchange" in window ? "orientationchange" : "resize",
  //         recalc = function() {
  //           var clientWidth = docEl.clientWidth;
  //           if (!clientWidth) return;
  //           //这里是假设在640px宽度设计稿的情况下，1rem = 20px；
  //           //可以根据实际需要修改
  //           docEl.style.fontSize = 20 * (clientWidth / 640) + "px";
  //         };
  //       if (!doc.addEventListener) return;
  //       win.addEventListener(resizeEvt, recalc, false);
  //       doc.addEventListener("DOMContentLoaded", recalc, false);
  //     };
  //     fun(document, window);
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@qwe: 7.2vw;
/* *{
    vertical-align: middle;
  } */
/* html {
  font-size: 16px;
} */
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  .mine {
    .li-header {
      max-width: 720/7.2vw;
      min-width: 350/7.2vw;
      width: 100%;
      height: 180/7.2vw;
      position: relative;
      margin: 0 auto;
      background-color: #fe5474;
      display: flex;
      align-items: flex-end;
      .small-left {
        width: 17/7.2vw;
        height: 20/7.2vw;
        position: absolute;
        background: linear-gradient(to left bottom, #fe5474 50%, white 50%);
      }
      .small-right {
        width: 17/7.2vw;
        position: absolute;
        height: 20/7.2vw;
        right: 0px;
        background: linear-gradient(to right bottom, #fe5474 50%, white 50%);
      }
      .li-nav {
        max-width: 685/7.2vw;
        width: 90%;
        margin: 10/7.2vw auto;
        height: 80/7.2vw;
        display: flex;
        align-content: flex-end;
        flex-wrap: wrap;
        max-height: 215/7.2vw;
        background-color: white;
        border: 1px solid whitesmoke;
        border-radius: 6/7.2vw;
        border-bottom: 1px solid #ccc;
        .li-small {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 5/7.2vw;
          justify-content: space-around;
          .li-small-nav {
            display: flex;
            align-items: center;
            width: 25%;
            height: 30/7.2vw;
            justify-content: space-around;
            font-size: 13px;
          }
          .li-small-nav > img {
            width: 25/7.2vw;
            height: 20/7.2vw;
          }
        }
        .li-name {
          text-align: center;
          width: 100%;
          height: 20/7.2vw;
        }
        .image {
          width: 50/7.2vw;
          height: 50/7.2vw;
          margin: 4px auto;
          display: flex;
          align-content: center;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .image > img {
          width: 50/7.2vw;
          height: 50/7.2vw;
          border-radius: 50%;
        }
      }
    }
    .li-content {
      max-width: 720/7.2vw;
      min-width: 350/7.2vw;
      width: 100%;
      height: 960/7.2vw;
      margin: 10px auto;
      background-color: white;
      display: flex;
      align-items: flex-end;
      .li-ul {
        width: 96%;
        height: 995/7.2vw;
        font-size: 3vw;
        margin: 0 auto;
        max-width: 740/7.2vw;
        .li-ul span {
          margin-left: 20/7.2vw;
        }
      }
      .li-ul > li {
        width: 100%;
        height: 105/7.2vw;
        margin-top: 4/7.2vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
      }
      .li-ul > li > div:nth-child(1) {
        width: 100%;
        height: 100%;
        font-size: 13;
        margin-left: 5/7.2vw;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
      }
      .em {
        width: 25/7.2vw;
        height: 25/7.2vw;
        position: absolute;
        right: 5/7.2vw;
        top: 150/7.2vw;
      }
      .li-ul > li > div > img {
        width: 45/7.2vw;
        height: 40/7.2vw;
      }
    }
  }
}

.li-tou {
  text-align: right;
  display: flex;
  margin-left: 20/7.2vw;
  justify-content: space-between;
}

.li-bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 50/7.2vw;
}

.lis-img {
  width: 90/7.2vw;
  height: 45/7.2vw;
}
</style>
