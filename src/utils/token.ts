import {createHashHistory} from 'history';

export function deleteToken(tokenIn?: string) {
  const tokenName = tokenIn ? tokenIn : 'token';
  sessionStorage.removeItem(`xgen:${tokenName}`);
  localStorage.removeItem(`xgen:${tokenName}`);
  deleteCookie(tokenName);
}
const history = createHashHistory({});

export function checkLogin() {
  const token = getToken();
  if (!token) {
    history.push('/login');
  }
}
export function logout() {
  deleteToken('token');
  deleteToken('studio');
  localStorage.removeItem(`store`);

  history.replace('/login');
  window.location.reload();
}

/**
 * 获取xgenToken的保存类型，与xgen保持一致
 * @returns
 */
function getTokenStorageType() {
  const storage = localStorage.getItem(`xgen:token_storage`);
  let stoarge_type = 'localStorage';
  if (storage != null) {
    try {
      const o = JSON.parse(storage);
      if (o.value === 'sessionStorage') {
        stoarge_type = 'sessionStorage';
      }
    } catch (error) {}
  }
  return stoarge_type;
}
export function setTokenStorageType(typeIn: string) {
  const type = typeIn === 'localStorage' ? 'localStorage' : 'sessionStorage';
  xgenSetStorage(`xgen:token_storage`, type, 'localStorage');
}

/**
 * 保存xgen的设置，与xgen保持一致
 * @param {string} key key
 * @param {object} obj object
 * @param {string} storageIn
 */
function xgenSetStorage(key: string, obj: any, storageIn: string) {
  // 默认使用localStorage
  let storage = storageIn === 'sessionStorage' ? sessionStorage : localStorage;
  let ty = 'String';
  let value = obj;
  switch (typeof obj) {
    case 'string':
      ty = 'String';
      value = encodeURIComponent(obj);
      break;
    case 'object':
      ty = 'Object';
      if (Array.isArray(obj)) {
        ty = 'Array';
      }
      break;
    case 'number':
      ty = 'Number';
      break;
    default:
      console.log('Error=========> Not Support Type:' + typeof obj);
      break;
  }

  storage.setItem(key, JSON.stringify({type: ty, value: value}));
}

function xgenGetStorage(
  key: string,
  storageIn?: string
): object | string | null {
  let storage = storageIn === 'sessionStorage' ? sessionStorage : localStorage;

  let s = storage.getItem(key);

  if (s != null && key.startsWith('xgen:')) {
    try {
      s = JSON.parse(s);
    } catch (error) {}
  }
  return s;
}

export function getToken(tokenIn?: string) {
  const tokenName = tokenIn ? tokenIn : 'token';
  const stoarage_type = getTokenStorageType();

  let tokenObj = xgenGetStorage(`xgen:${tokenName}`, stoarage_type) as any;

  let token = null;
  if (tokenObj) {
    if (tokenObj && tokenName == 'studio') {
      token = tokenObj.value?.token;
    } else {
      token = tokenObj.value;
    }
  }
  if (token) {
    setCookie(tokenName, token, 8);
  } else {
    // 需要确保当从xgen里退出后，本地的cookie也不能生效，两边的token进行同步
    deleteCookie(tokenName);
  }
  return token;
}
function setCookie(name: string, value: string, hours: number) {
  let expires = '';
  if (hours) {
    let date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
function deleteCookie(name: string) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function getCookie(name: string) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
