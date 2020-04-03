<template>
  <div>
    <div>
      <h1>~~ parent ~~</h1>
      <ul>
      <li v-for="(menu, index) in menus" :key="index">
           <router-link :to="'/parent/menu1/'+menu.id" >param 菜单{{menu.id}}: {{menu.name}}</router-link>
           <br/>
           <router-link :to="'/parent/menu2?id='+menu.id">query 菜单{{menu.id}}: {{menu.name}}</router-link>
           <br/>
      </li>
    </ul>
    <br>
    <br>
    <br>
    <router-link to="/parent/menu3">用 router-view 传参数给子菜单</router-link>

    </div>
    <div>
      <!-- 路由缓存数据 -->
      <!-- <keep-alive> -->
      <router-view :menus="menus" :website="website" :id="3"></router-view>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Parent',
  data () {
    return {
      menus: [
        {
          id: 1,
          name: '政治'
        },
        {
          id: 2,
          name: '经济'
        },
        {
          id: 3,
          name: '文化'
        }
      ],
      website: {
        url: 'http://www.baidu.com',
        title: '点击访问百度咯'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.router-link-active{
  color: red
}
</style>
