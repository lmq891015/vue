/**
 * 储存sessionStorage
 */
export const setStore = (name, content) => {
  if(!name) return;
  content = JSON.stringify(content);
  window.sessionStorage.setItem(name, content);
};
/**
 * 获取sessionStorage
 */
export const getStore = (name) => {
  if(!name) return;
  return JSON.parse(window.sessionStorage.getItem(name));
};
/**
 * 移除sessionStorage
 */
export const removeStore = (name) => {
  if(!name) return;
  window.sessionStorage.removeItem(name);
};
