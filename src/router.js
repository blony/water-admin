import Vue from 'vue'
import Router from 'vue-router'

// Layout
import Layout from '@/views/layout/Layout'
Vue.use(Router)

export const constantRouterGroup = [
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  {
    path: '/map',
    component: Layout,
    redirect: '/map/ArcGIS/index',
    name: 'ArcGIS',
    children: [
      {
        path: 'ArcGIS',
        component: () => import('@/views/map/ArcGIS/index'),
        name: 'ArcGIS'
      },
      {
        path: 'amap',
        component: () => import('@/views/map/amap/index'),
        name: 'amap'
      },
      {
        path: 'baidumap',
        component: () => import('@/views/map/baidumap/index'),
        name: 'baidumap'
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterGroup
})
