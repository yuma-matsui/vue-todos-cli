import { createRouter, createWebHistory } from 'vue-router'
import TodoApp from '@/components/TodoApp'
import Home from '@/views/Home'
import TodoItem from '@/views/TodoItem'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: TodoApp
  },
  {
    path: '/todos/:index',
    component: TodoItem,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
