<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";
@Component
export default class ValueGroup extends Vue {
  mounted(){
    console.log("感谢支持\n算法来自https://www.bigfun.cn/post/47678\n数据来自https://www.bigfun.cn/post/34159     \n\t\t\t\t\t\t\t\tBy 黄鸡");
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  //text-align center
  color #2c3e50
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
body{
  padding: 0px;
  margin: 0px;
  background-color: #f3f3f3;
}
</style>
