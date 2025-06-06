import request from '@/utils/request'
// 首页4个卡片接口
// interface
export const getCountnumService = (date: string) => {
  return request.get('/api/v1/statistics/countnum', {
    params: {
      date
    }
  })
}
// 注册用户统计
export const userRegisterService = ()=>
  request.get('/api/v1/statistics/registeruser/2025-03-24/2025-04-23')
