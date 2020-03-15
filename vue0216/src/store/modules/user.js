import {setStore, getStore, removeStore} from '@/common/tools';

const types = {
  GET_USERINFO:'GET_USERINFO',//获取用户信息
  LOGOUT:'LOGOUT',//退出系统
}
const user = {
  state : {
    userInfo: {
      authorization: '',
      name: '',
      id: '',
      topOrgId: '',
      permission: '',
      menu: '',
      flag: '',
    },
  },
  getters: {
    userInfo:state => getStore('userInfo'),
  },
  mutations: {
    [types.GET_USERINFO] (state,userInfo) {
      console.log(userInfo);
      console.log(user.state.userInfo);
      user.state.userInfo=userInfo;
    },
    [types.LOGOUT] (state) {
      user.state.userInfo = {
        authorization: '',
        name: '',
        id: '',
        topOrgId: '',
        permission: '',
        menu: '',
        flag: '',
      };
    },
  },
  actions:{
    setUserInfo:({ commit },userInfo) => {
      setStore('userInfo', {
        authorization:userInfo.authorization,
        name:userInfo.name,
        id:userInfo.id,
        topOrgId:userInfo.topOrgId,
        permission:userInfo.permission,
        menu:userInfo.menu,
        flag:userInfo.flag,
      });
      commit(types.GET_USERINFO, getStore('userInfo'));
    },
    getUserInfo:({commit}) => {
      commit(types.GET_USERINFO, getStore('userInfo'));
    },
    logout:({ commit }) => {
      window.localStorage.clear();
      commit(types.LOGOUT);
    }
  }
}

export default user;