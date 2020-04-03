<template>
  <div>
    <div>
      <h2>~~ menu333 , id: {{id}}~~</h2>
      <h2> {{menus}} </h2>
      <h2> {{website}}</h2>
    </div>
    <hr>
    <div>
      <a :href="website.url" :title="website.title" target="_blank">
         <!-- <img src="../assets/flower.jpg"> -->
         点击跳转百度
      </a>
      <ul>
        <li v-for="(m, index) in menus" :key="index">
          {{m.id}} -- {{m.name}}
        </li>
      </ul>
    </div>
      <!-- <a :href='website.url' :title='website.title' target="_blank">
        <img src="../assets/flower.jpg">
      </a> -->

  </div>
</template>

<script>
export default {
  name: 'Menu3',
  props: ['menus', 'website', 'id'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
