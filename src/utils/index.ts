/**
 * 虚拟滚动工具函数
 */

import type { VisibleRange } from '../types/index.js'

/**
 * 计算可见范围
 */
export function calculateVisibleRange(
  scrollTop: number,
  containerHeight: number,
  itemHeight: number | ((index: number) => number),
  itemCount: number,
  overscan: number = 0
): VisibleRange {
  if (typeof itemHeight === 'number') {
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
    const visibleCount = Math.ceil(containerHeight / itemHeight)
    const end = Math.min(itemCount - 1, start + visibleCount + overscan * 2)

    return { start, end }
  }

  // 动态高度计算（简化版本）
  let accumulatedHeight = 0
  let start = 0
  let end = itemCount - 1

  // 找到起始索引
  for (let i = 0; i < itemCount; i++) {
    const height = itemHeight(i)
    if (accumulatedHeight + height > scrollTop) {
      start = Math.max(0, i - overscan)
      break
    }
    accumulatedHeight += height
  }

  // 找到结束索引
  accumulatedHeight = 0
  for (let i = start; i < itemCount; i++) {
    const height = itemHeight(i)
    accumulatedHeight += height
    if (accumulatedHeight > containerHeight) {
      end = Math.min(itemCount - 1, i + overscan)
      break
    }
  }

  return { start, end }
}

/**
 * 获取项目大小
 */
export function getItemSize(
  index: number,
  size: number | ((index: number) => number)
): number {
  return typeof size === 'function' ? size(index) : size
}

/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let lastTime = 0

  return (...args: Parameters<T>) => {
    const now = Date.now()

    if (now - lastTime >= wait) {
      lastTime = now
      func(...args)
    }
  }
} 
