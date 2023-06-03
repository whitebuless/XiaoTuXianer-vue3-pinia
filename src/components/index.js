//把components中的所有组件进行全局注册
import ImageView from "./ImageView/index.vue"
import Sku from "./XtxSku/index.vue"

export const componentPlagin={
  install(app){
    //app.component('组建的名字','配置对象')
    app.component('XtxImageView',ImageView)
    app.component('XtxSku',Sku)
  }
}