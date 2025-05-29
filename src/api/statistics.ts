import request from '@/utils/request'
// 登录接口
export const statisticsCountnumService = ({
  user_total_count,
  register_count,
  group_total_count,
  group_create_count,
  online_total_count
}: {
  user_total_count: string
  register_count: string
  group_total_count: string
  group_create_count: string
  online_total_count: string
}) => {
  return request.get('/api/v1/statistics/countnum', {
    params: {
      user_total_count,
      register_count,
      group_total_count,
      group_create_count,
      online_total_count
    }
  })
}
