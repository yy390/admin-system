//HomeView.vue
<script setup lang="ts">
import { userRegisterService } from '@/api/statistics'
import { ref, onMounted } from 'vue'
interface DataItem {
  date: string
  num: number
}
const registerData = ref<DataItem[]>([])
const getUserRegister = async () => {
  const res = await userRegisterService()
  console.log(res)
  registerData.value = res.data
  option.value.xAxis.data = registerData.value.map((item) => item.date)
  option.value.series[0].data = registerData.value.map((item) => item.num)
}
onMounted(async () => {
  await getUserRegister()
})
//模拟数据value的字段对应Y轴，name字段对应X轴
const option = ref({
   xAxis: {
    type: 'category',
    data: registerData.value.map(item => item.date)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: registerData.value.map(item => item.num),
      type: 'line'
    }
  ]
})
</script>
<template>
  <div class="main">
    <e-charts class="chart" :option="option" />
    <div class="ranking"></div>
  </div>
</template>
<style scoped lang="scss">
.main {
  display: flex;
  background-color: white;
  .chart {
    flex: 1;
    height: 428px;
  }
  .ranking {
    width: 400px;
    height: 428px;
  }
}
</style>
