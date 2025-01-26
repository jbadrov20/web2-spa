import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../views/TaskList.vue'
import TaskDetails from '../views/TaskDetails.vue'
import AddTask from '../views/AddTask.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/tasks' },
  { path: '/tasks', component: TaskList },
  { path: '/tasks/:taskId', component: TaskDetails, name: 'taskDetails' },
  { path: '/add-task', component: AddTask },
  { path: '/:catchAll(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
