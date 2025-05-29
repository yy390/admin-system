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
      meta:{
        showTabs:false
      },
      children: [
        {
          path: '/home',
          component: () => import('@/views/home/HomeContainer.vue'),
          meta: {
            title: '首页',
          }
        },
        {
          path: '/user',
          redirect: '/home',
          meta: { title: '用户' ,
            showTabs:true
          },
          children: [
            {
              path: 'add', // 完整路径：/user/add
              component: () => import('@/views/user/AddUser.vue'),
              meta: { title: '新增用户',
                 tabKey: '新增用户' }
            },
            {
              path: 'list', // 完整路径：/user/list
              component: () => import('@/views/user/UserList.vue'),
              meta: { title: '用户列表',
                 tabKey: '用户列表' }
            },
            {
              path: 'disablelist', // 完整路径：/user/disablelist
              component: () => import('@/views/user/DisableList.vue'),
              meta: { title: '封禁用户列表',
                 tabKey: '封禁用户列表' }
            }
          ]
        },
        {
          path: '/group',
          redirect: '/home',
          meta: { title: '群组', showTabs:true },
          children: [
            {
              path: 'grouplist',
              component: () => import('@/views/group/GroupList.vue'),
              meta: {
                title: '群列表',
                 tabKey: '群列表'
              }
            },
            {
              path: 'groupdisablelist',
              component: () => import('@/views/group/GroupDisableList.vue'),
              meta: {
                title: '封禁群列表',
                 tabKey: '封禁群列表'
              }
            }
          ]
        },

        {
          path: '/message',
          redirect: '/home',
          meta: { title: '消息' },
          children: [
            {
              path: 'sendmsglist',
              component: () => import('@/views/message/SendMsgList.vue'),
              meta: {
                title: '消息记录',
                 tabKey: '消息记录'
              }
            },
            {
              path: 'prohibitwords',
              component: () => import('@/views/message/ProhibitWords.vue'),
              meta: {
                title: '违禁词列表',
                 tabKey: '违禁词列表'
              }
            }
          ]
        },
        {
          path: '/report',
          redirect: '/home',
          meta: { title: '举报' },
          children: [
            {
              path: '/report/user',
              component: () => import('@/views/report/ReportUser.vue'),
              meta: {
                title: '举报用户',
                 tabKey: '举报用户'
              }
            },
            {
              path: '/report/group',
              component: () => import('@/views/report/ReportGroup.vue'),
              meta: {
                title: '举报群聊',
                 tabKey: '举报群聊'
              }
            }
          ]
        },
        {
          path: '/setting',
          redirect: '/home',
          meta: { title: '设置' },
          children: [
            {
              path: 'currencysetting',
              component: () => import('@/views/setting/CurrencySetting.vue'),
              meta: {
                title: '通用设置',
                 tabKey: '通用设置'
              }
            },
            {
              path: '/setting/updatepwd',
              component: () => import('@/views/setting/UpdatePwd.vue'),
              meta: {
                title: '修改登录密码',
                 tabKey: '修改登录密码'
              }
            }
          ]
        }
      ]
    }
  ]
})

export default router
