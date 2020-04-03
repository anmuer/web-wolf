import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Life from '@/components/Life'
import Model from '@/components/Model'
import Parent from '@/components/Parent'
import Menu1 from '@/components/Menu1'
import Menu2 from '@/components/Menu2'
import Menu3 from '@/components/Menu3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/model',
      name: 'Model',
      component: Model
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent,
      children: [
        {
          path: '/parent/menu1/:id',
          component: Menu1
        },
        {
          path: '/parent/menu2',
          component: Menu2
        },
        {
          path: '/parent/menu3',
          component: Menu3
        }
      ]
    }
  ],
  mode: 'history'
})
