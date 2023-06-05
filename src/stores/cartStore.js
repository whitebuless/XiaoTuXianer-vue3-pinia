import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI,findNewCartListAPI } from '@/apis/cart'

export const useCartStore=defineStore("cart",()=>{
  const userStore=useUserStore()
  const isLogin=computed(()=>userStore.userInfo.token)
  // 定义state
  const cartList=ref([])

  // 操作方法
  const addCart=async(goods)=>{
    const { skuId,count }=goods
    if(isLogin.value){
      // 登录之后的加入购物车逻辑
      await insertCartAPI({skuId,count})
      const res=await findNewCartListAPI()
      cartList.value=res.result
    }else{
      // 已添加过 count++ 
      // 没有添加过直接push
      const item = cartList.value.find((item)=>goods.skuId===item.skuId)
      if(item){
        item.count=item.count+goods.count
      }else{    
        cartList.value.push(goods)
      }
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

  // 全选
  const allCheck=(selected)=>{
    // 把cartlist中的每一项的selected都设置为当前的全选状态
    cartList.value.forEach(item=>item.selected=selected)
  }

  //计算属性
  const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
  const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.price*c.count,0))

  // 已选择数量
  const selectedCount=computed(()=>cartList.value
    .filter((item)=>item.selected)
    .reduce((a,c)=>a+c.count,0))
  // 已选择商品合计
  const selectedPrice=computed(()=>cartList.value
  .filter((item)=>item.selected)
  .reduce((a,c)=>a+c.price*c.count,0))
  // 是否全选
  const isAll=computed(()=>cartList.value.every((item)=>item.selected))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice
  }
},{
  persist:true
})