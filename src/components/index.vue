<template>
  <div class="index">
    <Nav></Nav>
    <div class="tou">
      <ul>
        <li>
          <div class="gg">
            <img class="m1" src="../../static/images/首页_14.png" alt="">
            <img class="m2" src="../../static/images/首页_16.png" alt="">
            <img class="m3" src="../../static/images/首页_14.png" alt="">
          </div>
          <p>进入直播频道 ></p>
        </li>
        <li>
          <div class="tu">
            <img src="../../static/images/首页_14.png" alt="">
          </div>
          <p>美少女的店S</p>
        </li>
        <li>
          <div class="tu">
            <img src="../../static/images/首页_16.png" alt="">
          </div>
          <p>Dr 大怡</p>
        </li>
        <li>
          <div class="tu">
            <img src="../../static/images/首页_16.png" alt="">
          </div>
          <p>蘑菇小莹</p>
        </li>
      </ul>
    </div>
    <div class="list">
      <div class="zhe">
        更多商城分类
        <p><span></span></p>
      </div>
      <div class="box" v-for="(x,i) in list" :key="i">
        <div class="tu">
          <img :src="x.src" alt="">
        </div>
        <p>{{x.name}}</p>
      </div>
    </div>
    <div class="fen">
      <nav>
        <li>
          <span>发现</span>
          <i></i>
        </li>
           <li>
          <span>关注</span>
          <i></i>
        </li>
           <li>
          <span>流行</span>
          <i></i>
        </li>

      </nav>
      <header>
      	<div class="tu">
      		<img src="../../static/images/index_11.png" alt="">
      	</div>
      	      <div class="text">
      	<div class="tou1">
      		<div class="name">
      			小甜心_呢.
      		</div>
      		<div class="time">
      			17个小时前跟新
      		</div>
      	</div>
      	<div class="foot">
      		认证大人
      	</div>
      </div>
      <div class="guan">
      	关注
      </div>
      </header>
      <div class="bo">
      	<div class="bos">
      		<img src="../../static/images/index_18.png" alt="">
      	</div>
       	<div class="bos">
      		<img src="../../static/images2/首页_46.png" alt="">
      	</div>
       	<div class="bos">
      		<img src="../../static/images2/首页_44.png" alt="">
      	</div>

      </div>
    </div>
    <div  class="dian" style="display: block"></div>
    
  </div>
</template>
<script>
import nav from '../cha/nav1.vue'
export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        { src: "../../static/images/index_07.png", name: "女皇" },
        { src: "../../static/images2/首页_17.png", name: "上衣" },
        { src: "../../static/images2/首页_15.png", name: "裤子" },
        { src: "../../static/images/index_11.png", name: "裙子" },
        { src: "../../static/images/index_07.png", name: "套装" },
        { src: "../../static/images2/首页_24.png", name: "鞋子" },
        { src: "../../static/images/index_07.png", name: "宝宝" },
        { src: "../../static/images/index_11.png", name: "女皇" },
        { src: "../../static/images2/首页_25.png", name: "内衣" },
        { src: "../../static/images/index_11.png", name: "女皇" },
        { src: "../../static/images/index_07.png", name: "裙子" },
        { src: "../../static/images/index_11.png", name: "女皇" },
        { src: "../../static/images2/首页_17.png", name: "化妆" },
        { src: "../../static/images/index_11.png", name: "女皇" },
        { src: "../../static/images2/首页_26.png", name: "配饰" },
      ]
    }
  },
  components: { Nav: nav },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" slot-scope>
@qwe:7.20vw;
.index {
  width: 100%;
  
  .dian{
    height: 96/@qwe;
  }
  .fen {
    width: 100%;
    height: 640/@qwe;
    background: #fff;
    margin-top: 17/@qwe;
    .bo{
    	width: 100%;
    	height: 396/@qwe;
    	display: flex;
    	justify-content: space-around;
    	.bos{
    		width: 233/@qwe;
    		height: 100%;
    		img{
    			width: 100%;
    			height: 100%
    		}
    	}
    }
    header{
    	width: 100%;
    	height: 143/@qwe;
    	overflow: hidden;
    	.tu{
    		width: 82/@qwe;
    		height: 82/@qwe;
    		border-radius: 50%;
    		overflow: hidden;
    		margin-top: 36/@qwe;
    		margin-left: 20/@qwe;
    		img{
    			width: 100%;
    			height: 100%;

    		}
    		float: left;
    	}
    	.guan{
    		width: 114/@qwe;
    		height: 54/@qwe;
    		border-radius: 54/@qwe;
    		border: 1px solid #999;
        float: right;
    		line-height: 54/@qwe;
    		text-align: center;
    		font-size: 25/@qwe;
    		color: #999;
    		margin-top: 47/@qwe;
    		margin-right: 40/@qwe;
    	}
    	.text{
    		float: left;
    		margin-top: 49/@qwe;
    		margin-left: 16/@qwe;
    		.tou1{
    			display: inline-block;
    			.name{
    				font-size: 33/@qwe;
    				font-weight: 700;
    				color: #000;
    				float: left;

    			}
    			.time{
    				font-size: 20/@qwe;
    				color:#9b9b9b;
    				float: left;

    			}
    		}
    		.foot{
    			font-size: 23/@qwe;
    			color:#ded060;
    		}
    	}
    }
    nav {
      width: 100%;
      height: 94/@qwe;
      border-bottom: 1px solid #a7a2a2;
      // display: flex;
      overflow: hidden;
      // justify-content: space-between;

      li {
        // width: 100%/3;
        height: 94/@qwe;
        text-align: center;
        line-height: 94/@qwe;
        float: left;
        font-size: 63/2/@qwe;
        font-weight: 500;
        color: #000;
          margin-left:88/@qwe;
          margin-right:88/@qwe;

        i{
        	display: block;
        	width: 90%;
        	height: 3px;
        	border-radius: 3px;
        	background: red;margin-top: -23/@qwe
        }
      }
    }
  }

  .list {
    width: 100%-23/@qwe*2;
    padding: 0 23/@qwe;
    height: 54vw;
    background: #fff;
    // display: flex;
    // justify-content:space-between;
    overflow: hidden;
    position: relative;

    .zhe {
      width: 100%;
      height: 10vw;

      background: linear-gradient(to bottom, #ffffff78, #fff);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 120;
      box-shadow: 0 -2px 30px 1px #efefef;
      text-align: center;
      color: #828181;
      font-size: 20/@qwe;

      span {
        width: 0;
        height: 0;
        border-top: 2vw solid #000;
        border-left: 2vw solid #fff0;
        border-right: 2vw solid #fff0;

      }


    }

    .box {
      width: 12vw;
      height: 123/@qwe;
      margin: 22/@qwe;
      float: left;
      text-align: center;
      line-height: 40/@qwe;
      font-size: 21/@qwe;
      color: #8c8c8c;

      img {
        width: 12vw;
        height: 12vw
      }
    }
  }

  .tou {
    width: 100%;
    height: 34vw;
    background: #fff;
    overflow: hidden;
    margin-bottom: 3vw;
    margin-top: 13vw;
    ul {
      display: inline-block;
      margin-top: 5vw;
      margin-left: 3vw;
      word-break: keep-all;
      /* 不换行 */
      white-space: nowrap;
      width: 200vw;

      li {
        float: left;
        margin-left: 2vw;
        display: block;
        width: auto;
        height: 26vw;
        border-radius: 50%;
        text-align: center;

        .gg {
          height: 20vw;
          width: auto;

          .m1 {
            width: 20vw;
            height: 20vw;
            border-radius: 50%;
          }

          .m2 {
            width: 20vw;
            height: 20vw;
            margin-left: -12vw;
            border-radius: 50%;
          }

          .m3 {
            width: 20vw;
            height: 20vw;
            margin-left: -12vw;
            border-radius: 50%;
          }

        }

        .tu {
          display: block;
          width: 20vw;
          height: 20vw;
          background: #fff;
          border-radius: 50%;

          img {
            width: 100%;
            height: 100%;

          }
        }

        p {
          display: block;
          width: 100%;
          font-size: 3vw;
          line-height: 6vw;
          height: 6vw;
          color: #757575;
          word-break: keep-all;
          /* 不换行 */
          white-space: nowrap;
        }

      }
    }
  }
}

</style>
