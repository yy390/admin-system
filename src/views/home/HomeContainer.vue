<script setup lang="ts">
import calendarCom from './component/calendarCom.vue'
import lineChart from './component/lineChart.vue'
import { onMounted, ref } from 'vue'
import { getCountnumService } from '@/api/statistics'
import dayjs from 'dayjs'
// 调用接口，渲染四个片
const date = dayjs().format('YYYY-MM-DD')
interface TestData {
  user_total_count: number
  register_count: number
  group_total_count: number
  group_create_count: number
}
const data = ref<TestData>({})
const getData = async () => {
  const res = await getCountnumService(date)
  console.log(res)
  data.value = res
  console.log(data.value)
}
onMounted(async () => {
  await getData()
})
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
          <calendarCom></calendarCom>
        </div>
      </div>
      <lineChart></lineChart>
    </div>
    <div class="volumeStatistics">
      <div class="registerBar">
        <span>新建群数量统计</span>
        <div class="calendar">
          <calendarCom></calendarCom>
        </div>
      </div>
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
