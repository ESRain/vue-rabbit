/* 全局配置： 可以在应用的不同部分使用拦截器，以确保一致的配置。
重用性： 可以在多个请求中重用相同的拦截器逻辑，避免重复代码。
可维护性： 将请求和响应的处理逻辑集中到拦截器中，使代码更易于维护。 */

//基础封装
import axios from 'axios';
const httpInstaance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',   //api里面的许多接口基地址是一样的。看apis里的url，
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