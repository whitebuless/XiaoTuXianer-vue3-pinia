// 管理用户数据相关
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'

export const useUserStore=defineStore('user',()=>{
  // 定义state
  const userInfo=ref({})
  // 定义获取接口数据的action函数
  const getUserInfo= async ({account,password})=>{
    const res=loginAPI({account,password})
    userInfo.value=res.result
  }
  // 以对象的形式return出去
  return {
    userInfo,
    getUserInfo
  }
})