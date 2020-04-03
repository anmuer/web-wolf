<template>
  <div id="app">
   <h1>hi hi hi</h1>
  <p>{{message}}</p>
  <button @click="update">update</button>
  <button @click="destory">destory</button>

  </div>
</template>

<script>
export default {
  name: 'Life',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    update () {
      this.message = '修改后的数据'
    },
    destory () {
      this.$destroy()
    }
  },
  mounted () { // 只执行一次
    console.log('mounted()-初始化完成')
    this.message = '初始化数据咯'
  },
  beforeUpdate () { // 执行多次
    console.log('beforeUpdate()-数据属性更新之前')
  },
  updated () { // 执行多次
    console.log('updated()-数据属性更新之后')
  },
  beforeDestroy () { // 执行一次
    console.log('beforeDestory() vm销毁之前')
  },
  destroyed () { // 执行一次
    console.log('destoryed() vm销毁之后')
  }
}
</script>

<style>

</style>
