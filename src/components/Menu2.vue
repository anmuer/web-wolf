<template>
  <div>
    <h2>~~ menu2222 ~~</h2>
    <input type="text">
    <h3>route.query.id: {{$route.query.id}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Menu2',
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
