import { ref, } from 'vue'
import { getCategoryAPI } from "@/apis/layout";
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
    //导航列表逻辑
    const getCategoryList = ref([]);
    const getCategory = async () => {
        const res = await getCategoryAPI();
        getCategoryList.value = res.result;
        console.log(getCategoryList.value);
    };
    return {
        getCategory,getCategoryList
    }
})
