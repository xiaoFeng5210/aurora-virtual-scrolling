// 虚拟滚动相关的基础类型定义

// 基础数据项类型
export interface VirtualScrollItem {
  id: string | number
  [key: string]: any
}

// 虚拟滚动配置选项
export interface VirtualScrollOptions {
  // 每项高度
  itemHeight: number
  // 容器高度
  containerHeight: number
  // 缓冲区大小（上下额外渲染的项目数）
  bufferSize: number
  // 是否启用动态高度
  dynamicHeight?: boolean
  // 滚动节流时间（毫秒）
  throttleTime?: number
}

// 虚拟滚动状态
export interface VirtualScrollState {
  // 当前滚动位置
  scrollTop: number
  // 可见区域开始索引
  startIndex: number
  // 可见区域结束索引
  endIndex: number
  // 总高度
  totalHeight: number
  // 可见项目数量
  visibleCount: number
}

// 虚拟滚动事件类型
export interface VirtualScrollEvents {
  // 滚动事件
  onScroll?: (state: VirtualScrollState) => void
  // 数据更新事件
  onUpdate?: (data: VirtualScrollItem[]) => void
  // 可见区域变化事件
  onVisibleRangeChange?: (startIndex: number, endIndex: number) => void
} 
