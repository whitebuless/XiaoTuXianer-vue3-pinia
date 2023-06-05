import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

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


  //单选
  const singleCheck=(skuId,selected)=>{
    const item=cartList.value.find((item)=>item.skuId===skuId)
    item.selected=selected
  } 


  //计算属性
  const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
  const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.price*c.count,0))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck
  }
},{
  persist:true
})