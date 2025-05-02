import request from '@/utils/request'
// 登录接口
export const userLoginService = ({
  username,
  password
}: {
  username: string
  password: string
}) => {
  return request.post('/api/v1/manager/login', { username, password })
}
