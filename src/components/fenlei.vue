<template>
  <div class="fenlei">
    <div class="tou">
    	<span class="text">
    		全部类目
    		<div class="fan" @click="$router.back(-1)"></div>
    	</span>
    </div>
    <div class="sou">
    	 <span></span>
    	 <input type="text">
    </div>
    <div class="zong">
       <div v-for="(x,i) in list" :class="i==dang?'ing':'log'" @click="dian(i)" :key="i">
       	{{i}}
       </div>
       <div class="zhan">
       	  <div v-for="(x,i) in list[dang]" class="pin" :key="i">
       	  	<div class="tu">
       	  		<img :src="x.src" alt="">
       	  	</div>
       	  	<span>{{x.name}}</span>
       	  </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fenlei',
  data () {
    return {
    	dang:"正在流行",
    	list:{
    		"正在流行":[
    		{
    			name:"春上一",
    			src:"../../static/images/class_11.png"
    		},
    		{
    			name:"时尚套装",
    			src:"../../static/images/class_13.png"
    		},
    		{
    			name:"反击套组",
    			src:"../../static/images/class_15.png"
    		},
    		{
    			name:"春上一",
    			src:"../../static/images/class_11.png"
    		},
    		{
    			name:"时尚套装",
    			src:"../../static/images/class_13.png"
    		},
    		{
    			name:"反击套组",
    			src:"../../static/images/class_15.png"
    		},
    		{
    			name:"春上一",
    			src:"../../static/images/class_11.png"
    		},
    		{
    			name:"时尚套装",
    			src:"../../static/images/class_13.png"
    		},
    		{
    			name:"反击套组",
    			src:"../../static/images/class_15.png"
    		},

    		],
    		"上衣":[
    		{
    			name:"裤子套装",
    			src:"../../static/images/class_20.png"
    		},
    		{
    			name:"三八大盖",
    			src:"../../static/images/class_21.png"
    		},
    		{
    			name:"破哒哒枪",
    			src:"../../static/images/class_22.png"
    		},
    		{
    			name:"裤子套装",
    			src:"../../static/images/class_20.png"
    		},
    		{
    			name:"三八大盖",
    			src:"../../static/images/class_21.png"
    		},
    		{
    			name:"破哒哒枪",
    			src:"../../static/images/class_22.png"
    		},
    		{
    			name:"裤子套装",
    			src:"../../static/images/class_20.png"
    		},
    		{
    			name:"三八大盖",
    			src:"../../static/images/class_21.png"
    		},
    		{
    			name:"破哒哒枪",
    			src:"../../static/images/class_22.png"
    		},
    		{
    			name:"裤子套装",
    			src:"../../static/images/class_20.png"
    		},
    		{
    			name:"三八大盖",
    			src:"../../static/images/class_21.png"
    		},
    		{
    			name:"破哒哒枪",
    			src:"../../static/images/class_22.png"
    		}

    		]
    	}
    }
  },
 methods:{
   dian(x){
		this.dang=""+x
		console.log(x)
   }
 }
}
</script>

<style scoped lang="less">
@qwe:7.2vw;
 .fenlei{
  width: 100%;
  .zong{
  	width: 100%;
  	position: relative;
  	background: #fff;
  	.zhan{
  		width:538/@qwe;
  		position: absolute;
  		top: 0;
  		left:182/@qwe;
  		background: #fff;
        .pin{
        	width: 88/@qwe;
        	height: 195/@qwe;
        	margin-top: 32/@qwe;
        	margin-left: 45/@qwe;
        	margin-right: 45/@qwe;
            float: left;
            text-align: center;
            .tu{
            	width: 88/@qwe;
            	height: 120/@qwe;
            	img{
            		width: 100%;
            		height: 100%;
            	}
            }
            span{
            	font-size: 25/@qwe;
            	color: #999;
							word-break:keep-all;           
							/* 不换行 */
							white-space:nowrap;  
							line-height: 83/@qwe;
            }
        }
  	}
  	.ing{
  		width: 182/@qwe;
    	height: 91/@qwe;
    	background: #fff;
    	float: top;
    	  	border-top: 1px solid #fff;
    	border-bottom: 1px solid #fff;

    	color:#f75b79;
    	 font-size: 28/@qwe;
    	line-height: 91/@qwe;
    	text-align: center;

  	}
    .log{
    	width: 182/@qwe;
    	height: 91/@qwe;
    	background: #f6f6f6;
    	float: top;
    	border-top: 1px solid #f6f6f6;
    	border-bottom: 1px solid #f6f6f6;
    	font-size: 28/@qwe;
    	text-align: center;
    	line-height: 91/@qwe
    }
  }
input{

background:none;

outline:none;

border:0px;

color: #666;

font-size: 2vw;
}
  .sou{
  	width: 659/@qwe;
  	height: 25/@qwe;
    margin-top: 17/@qwe;
    margin-bottom: 17/@qwe;
    margin-left: 30/@qwe;
    margin-right: 30/@qwe;
    background: #fff;
    border-radius: 5px;
    padding-top: 17/@qwe;
    padding-bottom: 17/@qwe;
    line-height: 25/@qwe;

    span{
    	// float: left;
    	display: inline-block;
    	width: 25/@qwe;
    	height: 25/@qwe;
    	background:red;
    	margin-left: 10/@qwe;
    	background:url(../../static/images/class_07.png)center center;
    	-webkit-background-size: cover;
    	background-size: cover;
    }
    input{
    	float: left;
    	display: inline-block;
    	width: 70%;
    	height: 100%;
    	margin-left: 10/@qwe;


    }
  }
   .tou{
   	width: 100%;
   	height: 90/@qwe;
   	background: #fafafa;
   	border-bottom: 1px solid #f6f6f6;
   	text-align: center;
   	line-height: 90/@qwe;
   	font-size: 33/@qwe;
   	font-weight: 500;
   }
   .text{
   	position: relative;
   }
   .fan{
   	// content: "";
   	position: absolute;
   	background: red;
   	width: 24/@qwe;
   	height: 42/@qwe;
   	top: 0;
   	left: -265/@qwe;
    background: url(../../static/images/class_03.png)center center;
    -webkit-background-size: cover;
    background-size: cover;
   };
 }
</style>
