/**
 * 虚拟滚动相关类型定义
 */

// 滚动方向
export type ScrollDirection = 'vertical' | 'horizontal'

// 可见范围
export interface VisibleRange {
  start: number
  end: number
}

// 项目渲染器
export type ItemRenderer<T = any> = (
  item: T,
  index: number,
  style: Record<string, any>
) => any

// 虚拟列表属性
export interface VirtualListProps<T = any> {
  items: T[]
  itemHeight: number | ((index: number) => number)
  height: number
  width?: number
  overscan?: number
  renderItem: ItemRenderer<T>
  onScroll?: (scrollTop: number) => void
  className?: string
  style?: Record<string, any>
}

// 虚拟网格属性
export interface VirtualGridProps<T = any> {
  items: T[]
  itemWidth: number | ((columnIndex: number) => number)
  itemHeight: number | ((rowIndex: number) => number)
  columnCount: number
  rowCount: number
  height: number
  width: number
  overscan?: number
  renderItem: (
    item: T,
    rowIndex: number,
    columnIndex: number,
    style: Record<string, any>
  ) => any
  onScroll?: (scrollTop: number, scrollLeft: number) => void
  className?: string
  style?: Record<string, any>
}

// 虚拟滚动选项
export interface VirtualScrollOptions {
  direction?: ScrollDirection
  overscan?: number
  debounceTime?: number
  throttleTime?: number
} 
