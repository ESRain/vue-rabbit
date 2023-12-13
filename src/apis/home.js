import httpInstaance from '@/utils/http';
export function getBannerAPI () {
    return httpInstaance({
        url:'/home/banner'              //因为httpInstaance里的实例已经配置好了基地址了。所以这里省了许多
    })
}
//获取banner
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstaance({
      url:'/home/new'
    })
  }