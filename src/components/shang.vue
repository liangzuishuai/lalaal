<template>
  <div class="shang">
    <Nav></Nav>
    <swiper style="opacity:1" :options="swiperOption" ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="(item,index) in list" :key="index">
        <div class="lun">
          <img :src="item.img" alt>
        </div>
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <!-- {{pagination}} -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="zhan">
      <div class="tu">
        <img src="../../static/images/shang_14.png" alt>
      </div>
      <div class="tu">
        <img src="../../static/images/shang_14.png" alt>
      </div>
      <div class="tu">
        <img src="../../static/images/shang_14.png" alt>
      </div>
      <div class="tu">
        <img src="../../static/images/shang_14.png" alt>
      </div>
    </div>
    <div class="zhan2">
      <a href v-for="(x,i) in list2" :key="i">
        <div class="bai">
          <img :src="x.src" alt>
          <div class="text">{{x.name}}</div>
        </div>
      </a>
      <div style="clear: both;"></div>
    </div>
    <div class="li-love">
      <img
        style="width:100%"
        src="https://s10.mogucdn.com/mlcdn/c45406/190426_4hlfgkc2ceaea67422ag73077lfce_1611x166.png_1200x9999.v1c7E.81.webp"
        alt
      >
    </div>
    <div class="foot" style="width:100%">
      <div style="width:94%;margin: 0 auto;" v-for="(item,index) in data" :key="index">
        <img style="width:100%" :src="item.imgs" alt>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "../cha/nav1";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "shang",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [
        {
          img:
            "https://s17.mogucdn.com/mlcdn/c45406/190606_4h424ag8b91cg09c47bljec8ljh93_750x300.jpg_999x999.v1c0.81.webp"
        },
        {
          img:
            "https://s18.mogucdn.com/mlcdn/c45406/190528_3b0d9l0dffc954f5bb64bkb35g7ba_750x300.jpg_999x999.v1c0.81.webp"
        },
        {
          img:
            "https://s11.mogucdn.com/mlcdn/c45406/190411_7i3ic1k8k7hl4hgak2982i3bl18kl_750x300.jpg_999x999.v1c0.81.webp"
        }
      ],
      list2: [
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/190508_1jfhlbfidklkajd5j642jl5f97hl6_76x76.jpg_640x640.v1cAC.40.webp",
          name: "女装"
        }
      ],
      data: [
        { imgs: "../../static/images2/shangcheng1.png" },
        { imgs: "../../static/images2/shangcheng2.png" },
        { imgs: "../../static/images2/shangcheng4.png" },
        { imgs: "../../static/images2/shangcheng3.png" },
        { imgs: "../../static/images2/shangcheng5.png" },
        { imgs: "../../static/images2/shangcheng6.png" }
      ],
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // pagination: ".swiper-pagination",
        slidesPerView: "auto",
        autoplay: true,
        centeredSlides: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      }
    };
  },
  components: { Nav, swiper, swiperSlide }
};
</script>
<style scoped lang="less">
@qwe: 7.2vw;

.shang {
  width: 100vw;
  background: #fff;
  margin-bottom: 97 / @qwe;
  .zhan2 {
    width: 100vw;
    a {
      display: block;
      text-align: center;
      width: 144 / @qwe;
      height: 137.27 / @qwe;
      float: left;
      .bai {
        display: inline-block;
        width: 96 / @qwe;
        height: 96 / @qwe;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .text {
          text-align: center;
          line-height: 34.56 / @qwe;
          font-size: 24 / @qwe;
          color: rgb(102, 102, 102);
        }
      }
    }
  }
  .lun {
    width: 100vw;
    height: 288 / @qwe;

    // background: red;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .zhan {
    width: 700 / @qwe;
    height: 175 / @qwe;
    padding: 10 / @qwe;

    .tu {
      width: 155 / @qwe;
      height: 155 / @qwe;
      border-radius: 6px;
      float: left;
      overflow: hidden;
      margin: 10 / @qwe;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
