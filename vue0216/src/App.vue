<template>
  <div id="app" class="fillcontain">
    <router-view name="blank" />
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created () {
      //在页面加载时读取sessionStorage里的状态信息
      // if (sessionStorage.getItem("userInfo") ) {
      //     this.$store.replaceState(Object.assign({}, this.$store.state.user.userInfo,JSON.parse(sessionStorage.getItem("userInfo"))))
      // }
      // if (sessionStorage.getItem("menu") ) {
      //     this.$store.replaceState(Object.assign({}, this.$store.state.menu,JSON.parse(sessionStorage.getItem("menu"))))
      // }
     
      // //在页面刷新时将vuex里的信息保存到sessionStorage里
      // window.addEventListener("beforeunload",()=>{
      //     sessionStorage.setItem("userInfo",JSON.stringify(this.$store.state.user.userInfo))
      //     sessionStorage.setItem("menu",JSON.stringify(this.$store.state.menu))
      // })
   }
  }
</script>

<style lang="scss">
@import 'assets/css/common';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
