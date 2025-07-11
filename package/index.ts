/**
 * Aurora Virtual Scrolling - 高性能虚拟滚动库
 * 
 * 支持大数据量列表渲染优化，提供流畅的滚动体验
 */

// 核心虚拟滚动组件

// 工具函数
export {
  calculateVisibleRange,
  getItemSize,
  debounce,
  throttle
} from './utils/index.js'

// 类型定义
export type {
  VirtualListProps,
  VirtualGridProps,
  VirtualScrollOptions,
  ItemRenderer,
  ScrollDirection,
  VisibleRange
} from './types/index.js'

// 常量
export {
  DEFAULT_ITEM_HEIGHT,
  DEFAULT_OVERSCAN,
  SCROLL_DEBOUNCE_TIME
} from './constants/index.js'

// 版本信息
export const VERSION = '0.0.1' 
