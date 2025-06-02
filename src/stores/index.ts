import { createPinia } from 'pinia'
// 进行持久化
import persist from 'pinia-plugin-persistedstate'

const pinia =createPinia()
pinia.use(persist)
export default pinia
// 这种是一个一个导出
// import { useAdminAuthStore } from './modules/admin'
// export {
//     useAdminAuthStore
// }
// 下面可以统一导出
export * from './modules/user'
export * from './modules/statistics'
