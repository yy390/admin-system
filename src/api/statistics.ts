import request from '@/utils/request'
// 接口
// interface
export const getCountnumService = (date: string) => {
  return request.get('/api/v1/statistics/countnum', {
    params: {
      date
    }
  })
}
