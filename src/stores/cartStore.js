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

  const delCart=(skuId)=>{
    // 数组中删除
    const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
    cartList.value.splice(idx,1)
  }
  return {
    cartList,
    addCart,
    delCart
  }
})