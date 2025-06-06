import request from '@/utils/request'
import dayjs from 'dayjs'
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
export const userRegisterService = (startDate: Date, endDate: Date) => {
  const start = dayjs(startDate).format('YYYY-MM-DD')
  const end = dayjs(endDate).format('YYYY-MM-DD')
  return request.get(`/api/v1/statistics/registeruser/${start}/${end}`)
}
// 新建群数量统计
export const groupCreateService = (startDate: Date, endDate: Date) => {
  const start = dayjs(startDate).format('YYYY-MM-DD')
  const end = dayjs(endDate).format('YYYY-MM-DD')

  return request.get( `/api/v1/statistics/createdgroup/${start}/${end}`)
}
