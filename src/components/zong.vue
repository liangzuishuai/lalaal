<template>
  <div id="zong">
    <router-view/>
    <Di></Di>
  </div>
</template>

<script>
import di from "../cha/di.vue";

export default {
  name: "zong",
  components: { Di: di }
};
</script>

<style lang="less">
@zer: 7.2vw;
#zong {
  margin-top: 95 / @zer;
  background: #efefef;
}
</style>
