import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore=defineStore("cart",()=>{
  // 定义state
  const cartList=ref([])

  // 操作方法
  const addCart=(goods)=>{
    // 已添加过 count++
    // 没有添加过直接push
    const item = cartList.value.find((item)=>goods.skuId===item.skuId)
    if(item){
      item.count=item.count+goods.count
    }else{    
      cartList.value.push(goods)
    }

  }
  return {
    cartList,
    addCart
  }
})