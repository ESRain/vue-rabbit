<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
//触发获取导航列表action
import {useCategoryStore} from '@/stores/category';
import { onMounted } from 'vue';
// layout通过store发起请求，子组件通过store拿到请求后的数据
const CategoryStore = useCategoryStore()
onMounted( ()=> CategoryStore.getCategory())
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
  <LayoutFixed />
    <!-- <router-view></router-view>   ？？？-->
</template>