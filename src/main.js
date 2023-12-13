import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

//引入懒加载指令插件并注册
import {lazyPlugin} from '@/directives/index';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)         //lazyPlugin是个自制的插件，和默认插件一个用法
app.mount('#app')

