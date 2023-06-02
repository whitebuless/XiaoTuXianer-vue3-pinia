<script setup>
  import HomeCategory from './components/HomeCategory.vue'
  import HomeBanner from './components/HomeBanner.vue'
  import HomeNew from './components/HomeNew.vue'
  import HomeHot from './components/HomeHot.vue'
  import homeProduct from './components/HomeProduct.vue'
  import HomePenel from './components/HomePenel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试面板组件 -->
  <HomePenel title="新鲜好物" subTitle="新鲜好物，好多商品">
    <div>
      我是新鲜好物的插槽内容
    </div>
  </HomePenel>
  <HomePenel title="人气推荐" subTitle="人气推荐，好多商品">
    <div>
      我是人气推荐 的插槽内容
    </div>
  </HomePenel>
</template>