import { defineStore } from 'pinia'
import { ref } from 'vue'
// 管理员模块  token setToken removeToken
// 做区分的唯一标识
// token
export const useAdminAuthStore = defineStore(
  'administrators',
  () => {
    const token = ref('')
    const setToken = (newToken: string) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    //   定义完之后，需要暴露出去，否则别的模块不能使用
    return {
      token,
      setToken,
      removeToken
    }
  },
  // 进行持久化
  {
    persist: true
  }
)
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    user: {}
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUser(user: object) {
      this.user = user
    }
  }
})


