import { defineStore } from 'pinia'
import { getCountnumService } from '@/api/statistics'
import { ref } from 'vue'
import dayjs from 'dayjs'

export const useCountnumStore = defineStore('countNum', () => {
  const count = ref({})
  const getCount = async () => {
    try {
      const date = dayjs().format('YYYY-MM-DD')  // 生成当天日期字符串
      
      // 修正：传递正确的参数格式 { date }
      const res = await getCountnumService({ date }) 
      console.log(res.data);
      
      // 更新状态（根据实际响应结构调整）
      count.value = res.data || {} 
    } catch (error) {
      console.error('获取统计失败:', error)
      // 可选：重置状态或显示错误
      count.value = {}
    }
  }
  return { 
    count,
    getCount  // 暴露方法供组件调用
  }
})