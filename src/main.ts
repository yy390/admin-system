import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'
import '@/assets/styles/global.scss'

import Echarts from 'vue-echarts'
import * as echarts from 'echarts'

const app = createApp(App)

// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts

app.component('e-charts',Echarts)
app.use(pinia)
app.use(router)
app.mount('#app')
