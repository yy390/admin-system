<template>
  <el-date-picker
    v-model="dateRange"
    type="daterange"
    range-separator="-"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :default-value="defaultDateRange"
    @calendar-change="handleCalendarChange"
    @change="handleDateRangeChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义emits类型
const emit = defineEmits<{
  (e: 'date-range-change', range: { startDate: Date; endDate: Date }): void
}>()

// 日期范围值
const dateRange = ref<[Date, Date] | null>()
// 日历面板显示控制值
const defaultDateRange = ref<[Date, Date] | null>()

// 初始化逻辑
const initDateRange = () => {
  const endDate = new Date() // 结束日期 = 当前时间
  const startDate = new Date(endDate)
  startDate.setDate(startDate.getDate() - 30) // 开始日期 = 结束日期 - 30天 
  
  // 设置默认范围值
  dateRange.value = [startDate, endDate]
  
  // 初始化时触发事件，传递给父组件
  emit('date-range-change', {
    startDate,
    endDate
  })
}

// 处理日历面板变化 (添加参数类型声明)
const handleCalendarChange = (dates: (Date | null)[] | undefined) => {
  // 强制保持右侧面板始终显示结束日期
  if (dates?.[1]) {
    defaultDateRange.value = [dates[1], dates[1]]
  }
}

// 处理日期范围变化
const handleDateRangeChange = (value: [Date, Date] | null) => {
  if (value && value[0] && value[1]) {
    emit('date-range-change', {
      startDate: value[0],
      endDate: value[1]
    })
  }
}

// 初始化
initDateRange()
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>