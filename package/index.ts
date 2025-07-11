// 主入口文件 - 导出共享类型和工具函数

// 导出共享类型
export type {
  VirtualScrollItem,
  VirtualScrollOptions,
  VirtualScrollState,
  VirtualScrollEvents
} from './shared/types'

// 导出版本信息
export const version = '0.0.1'

// 导出包信息
export const packageInfo = {
  name: 'aurora-virtual-scrolling',
  version: '0.0.1',
  description: '高性能虚拟滚动库 - 支持大数据量列表渲染优化'
} 
