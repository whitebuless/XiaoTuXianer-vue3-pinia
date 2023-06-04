// import './assets/main.css'
//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入懒加载
import { lazyPlugin } from '@/directives/index'
import { componentPlagin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


// // 测试接口函数
// import { getCategory }  from '@/apis/testAPI'

// getCategory().then(res=>{
//   console.log(res)
// }) 

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlagin)
app.mount('#app')
