<template>
  <div>
    <h2>~~ menu111 ~~</h2>
    <input type="text">
    <h3>route.params.id: {{$route.params.id}}</h3>
    <!-- <a :href='website.url' :title='website.title' target="_blank">
      <img src="../assets/flower.jpg">
    </a>
   <ul>
     <li v-for='(menu, index) in menus' :key='index'>
      <a :href="'localhost:8080/menu1/'+menu.id">{{mene.name}}</a>
     </li>
   </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Menu1',
  // props: ['menus', 'website'],
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
