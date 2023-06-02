import { ref,onMounted } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute,onBeforeRouteUpdate } from 'vue-router'

//封装分类数据
export function useCategory(){
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id=route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())
//路由参数变化时，分类数据接口重新发送
  onBeforeRouteUpdate((to)=>{
    // console.log("change");
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}