import {toast} from 'amis-ui';
import axios from 'axios';
import copy from 'copy-to-clipboard';
import {getToken, deleteToken, checkLogin, logout} from './token';

export default {
  fetcher: ({url, method, data, config, headers, context}: any) => {
    config = config || {};
    config.headers = config.headers || headers || {};
    //使用token

    let token = getToken();
    config.withCredentials = true;
    try {
      const url2 = new URL(url);
      //跨域
      //后端可能会设置：Access-Control-Allow-Origin:'*'，与withCredentials会有冲突
      if (
        url2.port !== window.location.port ||
        url2.host !== window.location.host ||
        url2.protocol != window.location.protocol
        //使用studio
      ) {
        token = getToken('studio');
        config.withCredentials = false;
      }
    } catch (error) {}
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    const catcherr = (error: any) => {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          error.message = error.response.data.message;
        }

        if (
          error.response.data.code === 403 ||
          error.response.data.code === 402
        ) {
          logout();
        }
        if (error.response.data.message === 'Invalid token') {
          checkLogin();
        }
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }

      return new Promise(function (resolve, reject) {
        reject(error);
      });
    };
    const check = (response: any) => {
      if (
        typeof response.data === 'object' &&
        response.data !== null &&
        'data' in response.data &&
        'msg' in response.data &&
        'status' in response.data
      ) {
        return new Promise(function (resolve, reject) {
          resolve(response);
        });
      }
      if (!url.startsWith('/api')) {
        return new Promise(function (resolve, reject) {
          resolve(response);
        });
      }
      //组成新的payload,即是修改response的数据
      let payload = {
        status: !response.data.code ? 0 : response.data.code,
        msg: response.data.message ? response.data.message : '',
        data: response.data
      };
      response.data = payload;
      // 在这个回调函数中返回一个新的 Promise 对象
      return new Promise(function (resolve, reject) {
        // 这里应该返回一个新的response,可以在下一个adapter里使用
        // 执行异步操作
        // 在异步操作完成后调用 resolve 或 reject
        resolve(response);
      });
    };
    if (method !== 'post' && method !== 'put' && method !== 'patch') {
      if (data) {
        config.params = data;
      }

      return (axios as any)[method](url, config).then(check).catch(catcherr);
    } else if (data && data instanceof FormData) {
      // config.headers = config.headers || {};
      // config.headers['Content-Type'] = 'multipart/form-data';
    } else if (
      data &&
      typeof data !== 'string' &&
      !(data instanceof Blob) &&
      !(data instanceof ArrayBuffer)
    ) {
      // data = JSON.stringify(data);
      config.headers['Content-Type'] = 'application/json';
    }
    if (
      (config.headers['Content-Type'] as string)?.toLowerCase().includes('json')
    ) {
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (error) {}
      }
    }
    return (axios as any)
      [method](url, data, config)
      .then(check)
      .catch(catcherr);
  },
  isCancel: (e: any) => axios.isCancel(e),
  // 需要在页面上增加自定义的ToastComponent才可以使用
  // notify: (type: 'success' | 'error' | 'info', msg: string) => {
  //   toast[type]
  //     ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息')
  //     : console.warn('[Notify]', type, msg);
  //   console.log('[notify]', type, msg);
  // },
  alert,
  confirm,
  copy: (contents: string, options: any = {}) => {
    const ret = copy(contents, options);
    ret &&
      (!options || options.shutup !== true) &&
      toast.info('内容已拷贝到剪切板');
    return ret;
  }
};
