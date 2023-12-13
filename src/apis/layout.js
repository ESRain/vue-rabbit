import httpInstaance from '@/utils/http';
export function getCategoryAPI () {
    return httpInstaance({
        url:'/home/category/head'               //因为httpInstaance里的实例已经配置好了基地址了。所以这里省了许多
    })
}