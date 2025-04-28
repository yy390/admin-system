import { createRouter, createWebHistory } from 'vue-router'
//不带#
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/LoginPage.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/home',
      children: [
        {
          path:'/home',component:()=>import('@/views/home/HomeContainer.vue')
        },
        {
          path: '/user/add',
          component: () => import('@/views/user/AddUser.vue')
        },
        {
          path: '/user/list',
          component: () => import('@/views/user/UserList.vue')
        },
        {
          path: '/user/disablelist',
          component: () => import('@/views/user/DisableList.vue')
        },
        {
          path: '/group/grouplist',
          component: () => import('@/views/group/GroupList.vue')
        },
        {
          path: '/group/groupdisablelist',
          component: () => import('@/views/group/GroupDisableList.vue')
        },
        {
          path: '/message/sendmsglist',
          component: () => import('@/views/message/SendMsgList.vue')
        },
        {
          path: '/message/prohibitwords',
          component: () => import('@/views/message/ProhibitWords.vue')
        },
        {
          path: '/report/user',
          component: () => import('@/views/report/ReportUser.vue')
        },
        {
          path: '/report/group',
          component: () => import('@/views/report/ReportGroup.vue')
        },
        {
          path: '/setting/currencysetting',
          component: () => import('@/views/setting/CurrencySetting.vue')
        },
        {
          path: '/setting/updatepwd',
          component: () => import('@/views/setting/UpdatePwd.vue')
        }
      ]
    }
  ]
})

export default router
