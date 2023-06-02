import httpInstance from '@/utils/http'

//huoqvbanner
export function getBannerAPI(){
  return httpInstance({
    url:'/home/banner'
  })
}