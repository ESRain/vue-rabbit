//基础封装
import axios from 'axios';
const httpInstaance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
// axios请求拦截器
httpInstaance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstaance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})


export default httpInstaance