<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { PropType } from 'vue'

// 定义数据类型
type ChartData = {
  dates: string[]
  counts: number[]
}

const props = defineProps({
  chartData: {
    type: Object as PropType<ChartData>,
    required: true
  }
})

// 创建排名数据 - 从图表数据生成
const rankingData = computed(() => {
  const data = props.chartData
  if (!data || !data.dates || !data.counts) return []

  // 将日期和数值组合成对象数组
  const combined = data.dates.map((date, index) => ({
    date,
    count: data.counts[index] || 0
  }))

  // 排序逻辑：数量从大到小，相同数量日期早的在前
  return combined
    .sort((a, b) => {
      // 首先按数量排序
      if (b.count !== a.count) {
        return b.count - a.count
      }
      // 相同数量按日期排序（早的在前）
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    .slice(0, 8) // 只取前8条
})

// 图表配置
const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: [] as string[]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '群数',
      data: [] as number[],
      type: 'bar'
    }
  ]
})

// 监听数据变化并更新图表
watch(
  () => props.chartData,
  (newData) => {
    if (newData && newData.dates && newData.counts) {
      // 优化显示 - 只显示最多30个点
      const maxPoints = 30
      let datesToShow: string[] = []
      let countsToShow: number[] = []

      if (newData.dates.length > maxPoints) {
        const step = Math.ceil(newData.dates.length / maxPoints)
        for (let i = 0; i < newData.dates.length; i += step) {
          datesToShow.push(newData.dates[i])
          countsToShow.push(newData.counts[i])
        }
      } else {
        datesToShow = [...newData.dates]
        countsToShow = [...newData.counts]
      }

      option.value.xAxis.data = datesToShow
      option.value.series[0].data = countsToShow
    }
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <div class="data-container">
    <div class="chart-section">
      <e-charts class="chart" :option="option" autoresize />
    </div>
    <div class="ranking-section">
      <h3 class="ranking-title">
        <span>注册量排名</span>
      </h3>

      <div class="ranking-list">
        <div
          v-for="(item, index) in rankingData"
          :key="item.date"
          class="ranking-item"
        >
          <div class="rank-number">
            {{ index + 1 }}
          </div>
          <div class="date">{{ item.date }}</div>
          <div class="count">{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.data-container {
  box-sizing: border-box;
  display: flex;
  background-color: white;
  height: 410px;
  .chart-section {
    flex: 1;
    height: 100%;
    padding: 20px;
  }

  .ranking-section {
    width: 350px;
    padding: 25px 20px;
    background-color: #fff;

    .ranking-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 22px;
      padding-left: 15px;
      position: relative;
    }

    .ranking-item {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      border-radius: 6px;
      transition: background-color 0.2s;

      .rank-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        background-color: #0050b3;
        color: white;
        border-radius: 50%;
        font-weight: 600;
        font-size: 16px;
        margin-right: 18px;
        flex-shrink: 0;
      }

      .date {
        flex: 1;
        font-size: 16px;
        color: #333;
        font-weight: 400;
      }

      .count {
        width: 20px;
        text-align: right;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
</style>

