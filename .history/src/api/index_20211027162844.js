import axios from 'axios'
import iView from 'iview'
import QS from 'qs'

axios.defaults.timeout = 5000
// 配置默认 url
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bd05256e11dd958b534cf2a'
axios.defaults.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    config.paramsSerializer = (params) => {
      return QS.stringify(params, { indices: false })
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === '404') {
       // 跳转路由
    }
    return Promise.resolve(response)
  },
  error => {
   // 提示错误
    return Promise.reject(error)
  }
)

/***
 * 封装 HTTP 请求
 * @param url
 * @param data
 * @return {Promise}
 */

function apiAxios (method, url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      headers: method === 'POST' || method === 'PUT' ? { 'Content-Type': 'application/json;charset=UTF-8' } : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
    }).then(function (res) {
      resolve(res)
    }).then(function (err) {
      reject(err)
    })
  })
}

export default {
  get: function (url, params) {
    return apiAxios('GET', url, params)
  },
  post: function (url, params) {
    return apiAxios('POST', url, params)
  },
  put: function (url, params) {
    return apiAxios('PUT', url, params)
  },
  delete: function (url, params) {
    return apiAxios('DELETE', url, params)
  }
}