// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

//插件的固定写法：
/* export const lazyPlugin = {
  install (app) {
    //指令逻辑
  }
} */

export const lazyPlugin = {
  install (app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted (el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value  指令等于号后面绑定的表达式的值:图片url
        // console.log(el,'让我看清楚点', binding.value)
        //useIntersectionObserver:检测某个元素是否进入视口区域
        const { stop } = useIntersectionObserver(
          el,           //你要监听谁，就写谁，这里是el，即绑定的那个元素
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {       //如果出现在视口区域，则返回true
              // 进入视口区域
              el.src = binding.value    //如果出现在视口区域，给元素的src绑上""中绑定的表达式的值:图片url
              stop()                    //当进入视口区域，渲染完毕后，停止监视，
            }
          },
        )
      }
    })
  }
}