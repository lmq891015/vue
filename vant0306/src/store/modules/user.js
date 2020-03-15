
import { getToken, setToken, removeToken } from '@/common/tools'


const user  = {
  state : {
    openId:'',
  },
  getters : {
    openId: state => state.openId,
  },
  mutations: {
    SET_OPENID: (state, openId) => {
        state.openId = openId
    },
  },
  actions:{
    setOpenId (openId) {
      openId.commit('SET_OPENID')
    } 
  }
}

export default user;

/**
 * 1、用户退出,需要调取后台接口吗？后台具体的业务逻辑是什么？
 * 
 * 
 */