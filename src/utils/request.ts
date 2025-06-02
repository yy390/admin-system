import axios from 'axios'
import { useAdminAuthStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = 'http://192.168.10.5:83'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const adminStore = useAdminAuthStore()
    if (adminStore.token) {
      config.headers.token = adminStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    const adminStore = useAdminAuthStore()
    if (adminStore.token != '') {
      return res.data
    }
    return res
  },
  (err) => {
    // TODO 5. 处理401错误
    if (err.response?.status === 401) {
      router.push('/login')
    }
    ElMessage({
      message: err.response.data.message || '服务异常',
      type: 'error'
    })
    console.log(err)

    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
