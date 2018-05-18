import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    user_name: 'admin',
    user_id: 'admin',
    role: 'admin',
    token: 'admin',
    introduction: '管理员'
  },
  editor: {
    user_name: 'user',
    user_id: 'user',
    role: 'user',
    token: 'user',
    introduction: '普通用户'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
