// import './assets/main.css'
//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'

// // 测试接口函数
// import { getCategory }  from '@/apis/testAPI'

// getCategory().then(res=>{
//   console.log(res)
// }) 

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
  mounted(el,binding){
    //el:指令绑定的元素
    //binding：binding.value  the value after command "="
    console.log(el,binding.value)
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if(isIntersecting){
          //enterView
          el.src=binding.value
        }
      },
    )
  }
})