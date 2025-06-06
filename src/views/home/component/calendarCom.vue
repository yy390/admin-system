<template>
  <el-date-picker
    v-model="dateRange"
    type="daterange"
    range-separator="-"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :default-value="defaultDateRange"
    @calendar-change="handleCalendarChange"
  />
</template>
<script setup lang="ts">
import { ref} from 'vue'
// 声明类型安全的引用变量
const dateRange = ref() // 日期范围值
const defaultDateRange = ref() // 日历面板显示控制值
// 初始化逻辑
const initDateRange = () => {
  const endDate = new Date() // 结束日期 = 当前时间
  const startDate = new Date(endDate)
  startDate.setDate(startDate.getDate() - 30) // 开始日期 = 结束日期 - 31天 
  dateRange.value = [startDate, endDate]
  defaultDateRange.value = [endDate, endDate] // 控制日历面板显示
}
// 处理日历面板变化 (添加参数类型声明)
const handleCalendarChange = (dates: (Date | null)[] | undefined) => {
  // 强制保持右侧面板始终显示结束日期
  if (dates?.[1]) {
    defaultDateRange.value = [dates[1], dates[1]]
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
