import httpInstaance from '@/utils/http';
export function getCategoryAPI () {
    return httpInstaance({
        url:'/home/category/head'
    })
}