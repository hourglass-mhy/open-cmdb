import request from '@/utils/apiInterceptor'

export function loginByUsername(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}
