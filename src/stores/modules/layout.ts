import { defineStore } from 'pinia'
import { ref } from 'vue'

type LayoutType = 'classic' | 'vertical' | 'horizontal' | 'columns'

export const useLayoutStore = defineStore(
  'layoutConfig',
  () => {
    // 当前布局模式
    const layoutType = ref<LayoutType>('classic')
    // 主题色
    const primaryColor = ref('#FF7500')
    // 是否暗黑模式
    const isDarkMode = ref(false)
    // 切换布局方法
    const setLayout = (type: LayoutType) => {
      layoutType.value = type
    }
    // 更新主题色
    const updatePrimaryColor = (color: string) => {
      primaryColor.value = color
    }
    // 切换暗黑模式
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
    }
    return {
      layoutType,
      primaryColor,
      isDarkMode,
      setLayout,
      updatePrimaryColor,
      toggleDarkMode
    }
  },
  {
    persist: true
  }
)