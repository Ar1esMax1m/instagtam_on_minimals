import Vue from 'vue'
import VueRouter from 'vue-router'
import ListPost from '@/views/ListPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:  ListPost
  },
  {
    path: '/add-post',
    component: () => import('@/views/AddPost')
  },
  {
    path: '/post/:id',
    component: () => import('@/views/Post')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
