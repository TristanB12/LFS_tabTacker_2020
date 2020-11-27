import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import DefaultView from '@/views/DefaultView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import SongsView from '@/views/SongsView.vue'
import CreateSongView from '@/views/CreateSongView.vue'
import SongDetailsView from '@/views/SongDetailsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: DefaultView
  },
  {
    path: '/login',
    name: 'login',
    component:  LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/songs',
    name: 'songs',
    component: SongsView,
    meta: {requiresAuth: true}
  },
  {
    path: '/create',
    name: 'create',
    component: CreateSongView,
    meta: {requiresAuth: true}
  },
  {
    path: '/song/:songId',
    name: 'song',
    component: SongDetailsView,
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  routes
})
export default router
