<template>
  <div class="di">
    <router-link to="/zong/index">
      <span>首页</span>
    </router-link>
    <router-link to="/zong/zhi">
      <span>直播</span>
    </router-link>
    <router-link to="/zong/add">
      <span class="jia">+</span>
    </router-link>
    <router-link to="/zong/shang">
      <span>商城</span>
    </router-link>
    <router-link to="/zong/mine">
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "di",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
@qwe: 7.2vw;
.di {
  width: 100%;
  height: 96 / @qwe;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100000;
  border-top: 1px solid #efefef;
  a {
    display: block;
    width: 20%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 96 / @qwe;
    color: #000;
    font-size: 31 / @qwe;
    font-weight: 700;
    .jia {
      display: inline-block;
      width: 92 / @qwe;
      height: 75 / @qwe;
      background: #ff4665;
      color: #fff;
      font-size: 40 / @qwe;
      border-radius: 12 / @qwe;
      line-height: 75 / @qwe;
    }
  }
  .router-link-active {
    color: red;
  }
}
</style>
