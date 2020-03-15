import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'

export function getToken(TokenKey) {
  return Cookies.get(TokenKey)
}

export function setToken(TokenKey,token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey)
}

//获取当前时间
export function getNowDate(type=1){
  // alert(11);
  let date = new Date();
  let str = '';
  if(type==1){//默认时间格式 y-mm-dd
    return `${date.getFullYear()}-${pT(date.getMonth()+1)}-${pT(date.getDate())}`;
  }
  else if(type==2){//默认时间格式 y-mm-dd hh:mm:ss
    return `${date.getFullYear()}-${pT(date.getMonth()+1)}-${pT(date.getDate())} ${pT(date.getHours())}:${pT(date.getMinutes())}:${pT(date.getSeconds())}`;
  }
}

//<10的数字转换为0X 的形式 
function pT(val){
  val = Number(val);
  return val>=10?val:'0'+val;
}
