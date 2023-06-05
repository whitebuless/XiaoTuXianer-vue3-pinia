// 管理用户数据相关
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import  { useCartStore } from './cartStore'
import  { mergeCartAPI } from '@/apis/cart'

export const useUserStore=defineStore('user',()=>{
  const cartStore=useCartStore()
  // 定义state
  const userInfo=ref({})
  // 定义获取接口数据的action函数
  const getUserInfo= async ({account,password})=>{
    const res= await loginAPI({account,password})
    userInfo.value=res.result
    // 合并购物车的操作
    await mergeCartAPI(cartStore.cartList.map(item=>{
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    }))
    cartStore.updateNewList()
  }

  // 退出时清除用户信息
  const clearUSerInfo=()=>{
    userInfo.value={}
    // 执行清楚购物车的action函数
    cartStore.clearCart()
  }
  // 以对象的形式return出去
  return { 
    userInfo,
    getUserInfo,
    clearUSerInfo
  }
}, {
  persist: true,
})