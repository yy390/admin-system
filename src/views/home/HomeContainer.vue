<script setup lang="ts">
import calendarCom from './component/calendarCom.vue'
import lineChart from './component/lineChart.vue'
import barChart from './component/barChart.vue'
import { onMounted, ref } from 'vue'
import {
  getCountnumService,
  userRegisterService,
  groupCreateService
} from '@/api/statistics'
import dayjs from 'dayjs'
// 定义日期范围类型
interface DateRange {
  startDate: Date
  endDate: Date
}
// 创建ref用于存储日期范围
const registerDateRange = ref<DateRange>({
  startDate: new Date(),
  endDate: new Date()
})
const groupDateRange = ref<DateRange>({
  startDate: new Date(),
  endDate: new Date()
})
// 注册图表数据
const registerChartData = ref<{
  dates: string[]
  counts: number[]
}>({ dates: [], counts: [] })

// 群组图表数据
const groupChartData = ref<{
  dates: string[]
  counts: number[]
}>({ dates: [], counts: [] })

// 调用接口，渲染四个卡片 - 添加默认值防止undefined错误
const data = ref({
  user_total_count: 0,
  register_count: 0,
  group_total_count: 0,
  group_create_count: 0
})

// 获取卡片统计数据 - 修复响应结构问题
const getCardData = async () => {
  try {
    const today = new Date()
    const dateStr = dayjs(today).format('YYYY-MM-DD')
    const res = await getCountnumService(dateStr)

    // 直接使用API返回数据，不访问res.data（根据接口响应结构调整）
    // API示例响应：{ "user_total_count": 100, ... }
    data.value = {
      user_total_count: res.user_total_count || 0,
      register_count: res.register_count || 0,
      group_total_count: res.group_total_count || 0,
      group_create_count: res.group_create_count || 0
    }
  } catch (error) {
    console.error('获取卡片统计数据失败:', error)
  }
}

// 处理注册日历变化事件
const handleRegisterDateChange = async (range: DateRange) => {
  registerDateRange.value = range
  await getRegisterChartData(range)
}
// 处理群聊日历变化事件
const handleGroupDateChange = async (range: DateRange) => {
  groupDateRange.value = range
  await getGroupChartData(range)
}
// 获取注册图表数据 - 修复API响应结构处理
const getRegisterChartData = async (range: DateRange) => {
  try {
    const res = await userRegisterService(range.startDate, range.endDate)
    // 根据API文档示例：API直接返回{ "2025-04-01": 5 }, 不是res.data
    const responseData = res || {}
    // 确保处理的是对象
    if (typeof responseData !== 'object' || responseData === null) {
      console.warn('无效的API响应格式')
      return
    }
    const dates: string[] = []
    const counts: number[] = []
    // 将返回的数据按照日期排序
    Object.keys(responseData)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .forEach((date) => {
        dates.push(date)
        counts.push(responseData[date])
      })
    registerChartData.value = {
      dates,
      counts
    }
  } catch (error) {
    console.error('获取注册图表数据失败:', error)
  }
}
// 获取群组图表数据 - 同样修复API响应处理
const getGroupChartData = async (range: DateRange) => {
  try {
    const res = await groupCreateService(range.startDate, range.endDate)
    const responseData = res || {}
    // 确保处理的是对象
    if (typeof responseData !== 'object' || responseData === null) {
      console.warn('无效的API响应格式')
      return
    }
    const dates: string[] = []
    const counts: number[] = []
    Object.keys(responseData)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .forEach((date) => {
        dates.push(date)
        counts.push(responseData[date])
      })
    groupChartData.value = {
      dates,
      counts
    }
  } catch (error) {
    console.error('获取群组图表数据失败:', error)
  }
}
// 初始化 - 添加错误处理
const initialize = async () => {
  try {
    await getCardData()
    // 初始化注册图表数据（使用过去30天）
    const endDate = new Date()
    const startDate = new Date(endDate)
    startDate.setDate(startDate.getDate() - 30)
    await getRegisterChartData({
      startDate,
      endDate
    })
    // 初始化群聊图表数据（使用过去30天）
    await getGroupChartData({
      startDate,
      endDate
    })
  } catch (error) {
    console.error('初始化失败:', error)
  }
}
onMounted(initialize)
</script>
<template>
  <div class="main">
    <div class="card">
      <div class="cardItem">
        <div>当日注册人数</div>
        <span>{{ data.register_count }}</span>
      </div>
      <div class="cardItem">
        <div>当日新建群</div>
        <span>{{ data.group_create_count }}</span>
      </div>
      <div class="cardItem">
        <div>当前总用户</div>
        <span>{{ data.user_total_count }}</span>
      </div>
      <div class="cardItem">
        <div>当前总群数</div>
        <span>{{ data.group_total_count }}</span>
      </div>
    </div>
    <div class="registerStatistics">
      <div class="registerBar">
        <span>注册用户统计</span>
        <div class="calendar">
          <calendarCom
            @date-range-change="handleRegisterDateChange"
          ></calendarCom>
        </div>
      </div>
      <lineChart :chartData="registerChartData"></lineChart>
    </div>
    <div class="volumeStatistics">
      <div class="registerBar">
        <span>新建群数量统计</span>
        <div class="calendar">
          <calendarCom @date-range-change="handleGroupDateChange"></calendarCom>
        </div>
      </div>
      <barChart :chartData="groupChartData"></barChart>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  background: #f2f3f5;
  overflow-y: auto; /* 垂直滚动条 */
  padding: 12px;
  padding-bottom: 0px;
  box-sizing: border-box;
  .card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 20px;
    height: 156px;
    .cardItem {
      background: white;
      border-radius: 4px;
      padding: 20px;
      position: relative;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
      div {
        font-size: 14px;
        margin-bottom: 8px;
      }
    }
  }
  .registerStatistics,
  .volumeStatistics {
    box-sizing: border-box;
    background: white;
    border-radius: 2px;
    height: 492px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    .registerBar {
      height: 50px;
      line-height: 50px;
      padding-left: 12px;
      padding-right: 12px;
      border: 1px solid #e4e7ed;
      .calendar {
        float: right;
      }
    }
  }
}
</style>
