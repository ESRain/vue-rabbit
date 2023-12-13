import httpInstaance from '@/utils/http';
export function getBannerAPI() {
  return httpInstaance({
    url: '/home/banner'              //因为httpInstaance里的实例已经配置好了基地址了。所以这里省了许多
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
    url: '/home/new'
  })
}



/**
* @description: 获取人气推荐
* @param {*}
* @return {*}
*/
export const getHotAPI = () => {
  return httpInstaance({
    url: '/home/hot'
  })
}


/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstaance({
    url: '/home/goods'
  })
}