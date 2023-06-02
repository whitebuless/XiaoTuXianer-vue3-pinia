import { useIntersectionObserver } from '@vueuse/core'
//define lazy-load plugin
export const lazyPlugin={
  install(app){
    //lazy-load logic
    app.directive('img-lazy',{
      mounted(el,binding) {
        // console.log(el,binding.value)
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if(isIntersecting){
              //enterView
              el.src=binding.value
              stop
            }
          },
        )
      },
    })
  }
}