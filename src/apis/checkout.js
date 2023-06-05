import request from '@/utils/http'

export const getCheckInfoAPI=()=>{
  return request({
    url:'/member/order/pre'
  })
}