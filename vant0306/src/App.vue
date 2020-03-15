<template>
  <div id="app">
    <router-view/>
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created () {
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("openId") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state.user.openId,JSON.parse(sessionStorage.getItem("openId"))))
      }
     
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("openId",JSON.stringify(this.$store.state.user.openId))
      })
   }
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
