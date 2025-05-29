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
// 用户列表
export const userListService = ({
  keyword,
  page_size,
  page_index
}: {
  keyword: string
  page_size: string
  page_index: string
}) =>
  request.get('/api/v1/manager/user/list', {
    params: {
      keyword,
      page_size,
      page_index
    }
  })
  // 修改密码
  // api/user.ts
export const userUpdatePasswordService = (data: {
  password: string
  new_password: string
}) => {
  // 实际调用后端接口
  return request.post('/api/v1/manager/user/updatepassword', {
    password:data.password,
    new_password:data.new_password
  })
}
