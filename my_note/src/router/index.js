import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Note from '@/components/Note'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: '我的首页',
      components:{
      	index:Index
      } 
    },
    {
      path: '/Note',
      name: '我的笔记',
      components: {
      	note:Note
      }
    }
  ]
})
