import { ref, } from 'vue'
import { getCategoryAPI } from "@/apis/layout";
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const getCategoryList = ref([]);
    // action 获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI();
        getCategoryList.value = res.result;
    };

    return {
        getCategory, getCategoryList
    }
})
