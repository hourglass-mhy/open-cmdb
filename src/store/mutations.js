import * as types from './mutation-types'

const mutations = {
  [types.SET_COLLAPSE](state, flag) {
    state.isCollapse = flag;
  },

  [types.SET_MENU_LIST](state, menuList) {
    state.menuList = menuList;
  },

}
export default mutations