<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'

// 定义props
interface ChartData {
  dates: string[]
  counts: number[]
}

const props = defineProps<{
  chartData: ChartData
}>()

// 图表配置
const option = ref({
  tooltip:{
    trigger:'axis'
  },
  xAxis: {
    type: 'category',
    data: [] as string[],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [] as number[],
      type: 'line',
    }
  ]
})

// 监听数据变化
watch(() => props.chartData, (newData) => {
  if (newData && newData.dates && newData.counts) {
    // 只显示最多30个日期标签，避免过于密集
    const maxLabels = 30
    let showDates = newData.dates
    let showCounts = newData.counts
    
    if (newData.dates.length > maxLabels) {
      // 间隔抽取数据点
      const step = Math.ceil(newData.dates.length / maxLabels)
      showDates = []
      showCounts = []
      
      for (let i = 0; i < newData.dates.length; i += step) {
        showDates.push(newData.dates[i])
        showCounts.push(newData.counts[i])
      }
    }
    
    option.value.xAxis.data = showDates
    option.value.series[0].data = showCounts
  }
}, { deep: true, immediate: true })
</script>

<template>
  <div class="main">
    <e-charts class="chart" :option="option"  />
    <div class="ranking">
      <h5 style="font-weight: 400;">注册量排名</h5>
      
    </div>
  </div>
</template>
<style scoped lang="scss">
.main {
  display: flex;
  background-color: white !important;
  .chart {
    flex: 1;
    height: 428px;
  }
  .ranking {
    width: 400px;
    height: 428px;
    background-color: pink;
  }
}
</style>