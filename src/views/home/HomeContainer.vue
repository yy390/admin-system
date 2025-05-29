<script setup lang="ts">
import calendarCom from './component/calendarCom.vue'
// import{ statisticsCountnumService} from '@/api/statistics'
import { ref } from 'vue'
const data = ref({
  user_total_count: '',
  register_count: '',
  group_total_count: '',
  group_create_count: '',
  online_total_count: ''
})
</script>
<template>
  <div class="main">
    <div class="card" :model="data">
      <div class="cardItem">
        <div>当日注册人数</div>
        <span>{{data.register_count}}</span>
      </div>
      <div class="cardItem">
        <div>当日新建群</div>
        <span></span>
      </div>
      <div class="cardItem">
        <div>当前总用户</div>
        <span></span>
      </div>
      <div class="cardItem">
        <div>当前总群数</div>
        <span></span>
      </div>
    </div>
    <div class="registerStatistics">
      <div class="registerBar">
        <span>注册用户统计</span>
        <div class="calendar">
          <calendarCom></calendarCom>
        </div>
      </div>
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
        margin-top: 9px;
        float: right;
      }
    }
  }
}
</style>
