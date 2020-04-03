<template>
  <div id="app">
    <div>
      <router-link class=content to="/model">点击Vue模板语法</router-link>
      <!-- <router-view name="/model">11</router-view> -->
      <router-link class=content to="/life">点击Vue生命周期</router-link>
      <router-link class=content to="/parent">点击路由组件传参</router-link>
    </div>
    <div>
    <!-- <img src="./assets/logo.png"> -->
       <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
    padding-left: 10px;
}
.router-link-active{
  color: red
}
</style>
