import httpInstaance from '@/utils/http';
export function getCategroy() {
    return httpInstaance({
        url:'home/category/head'
    })
}