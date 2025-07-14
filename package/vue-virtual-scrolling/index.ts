// import { App } from 'vue'
import VirtualScrolling from './components/VirtualScrolling.vue'

// 定义组件 props 类型
export interface VirtualScrollingProps {
  // 数据源
  data?: any[]
  // 每项高度
  itemHeight?: number
  // 容器高度
  containerHeight?: number
  // 缓冲区大小
  bufferSize?: number
}

// 插件安装函数
const install = (app: any): void => {
  app.component('AuroraVirtualScrolling', VirtualScrolling)
}

// 单独导出组件
export { VirtualScrolling as AuroraVirtualScrolling }

// 插件对象类型
interface VirtualScrollingPlugin {
  install: (app: any) => void
  VirtualScrolling: typeof VirtualScrolling
}

// 创建插件对象
const VirtualScrollingPlugin: VirtualScrollingPlugin = {
  install: install,
  VirtualScrolling: VirtualScrolling
}

// 支持 app.use() 的默认导出
// export default VirtualScrollingPlugin

// 声明全局 Vue 类型
declare global {
  interface Window {
    Vue?: any
  }
}

// 支持 CDN 引入的全局安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VirtualScrollingPlugin)
} 
