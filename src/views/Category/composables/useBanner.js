import { ref,onMounted } from "vue"
import { getBannerAPI } from '@/apis/home'
// 封装了轮播图
export function useBanner(){
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: 2
    })
    bannerList.value = res.result
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}