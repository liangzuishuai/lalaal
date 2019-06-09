<template>
  <div class="nav1">

  	<div class="biao" @click="fen">
  		
  	</div>
      <div class="sou">
      	<span></span>
      	<input type="text" placeholder="奥术大师">
      	<span></span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'nav1',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    fen(){
      console.log("q2e");
      this.$router.push({
        path:"/fenlei"
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.nav1{
position: fixed;
top:0px;
width: 100vw;
height: 13vw;
z-index: 999;
background: #ff4665;
  .biao{
  	width: 4vw;
  	height: 4vw;
  	background: pink;
  	display: inline-block;
  	float: left;
  	margin: 3vw 5vw;
  	position: relative;
  	background: url("../../static/images/shang_03.png")center center;
  	-webkit-background-size: cover;
  	background-size: cover;
  }
  .biao:after{
  	content: "分类";
  	width:4vw;
  	min-width: 3vw;
  	height: 2vw;
  	font-size: 2vw;
  	color: #fff;
  	position: absolute;
  	bottom: -3vw;left: 0;
  	word-break:keep-all;           /* 不换行 */
white-space:nowrap;  

  };
input{
background:none;
outline:none;
border:0px;
color: #666;
font-size: 2vw;
}
overflow: hidden;
  .sou{
  	display: inline-block;
  	width: 78vw;
  	height: 4vw;
  	padding: 2vw;
  	background: #fff;
  	border-radius: 8vw;
  	overflow: hidden;
  	display: flex;
  	justify-content:space-between;
  	align-items:center;
  	overflow: hidden;
  	// float: left;
  	margin-top: 3vw;

  	 // margin-top: 3vw;
  	  span{
  	  	display: inline-block;
  	  	width: 4vw;
  	  	height: 4vw;
  	  	background: red;
  	  	border-radius: 50%;
  	  	overflow: hidden;
  	  }
  	  span:nth-child(1){
         	background: url("../../static/images/shang_06.png")center center no-repeat;
  	-webkit-background-size: 85%;
  	background-size: 85%;
  	  }
  	    span:nth-child(3){
         	background: url("../../static/images/shang_08.png")center center no-repeat;
  	-webkit-background-size: 85%;
  	background-size: 85%;
  	// display: none
  	  }

  	  input{
  	  	display: inline-block;
  	  	width:63vw;
  	  	height: 4vw;
  	  }
  }
  .tou{
  	width: 100%;
  	height: 34vw;
  	background: #fff;

  }
}
</style>
