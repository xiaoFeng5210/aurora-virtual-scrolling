<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

// 定义组件 props 类型
export interface VirtualScrollingProps {
  containerHeight?: number
  data?: any[]
}

// 定义组件 emits
export interface VirtualScrollingEmits {
  // 滚动事件
  scroll: [event: Event]
  // 数据更新事件
  update: [data: any[]]
}


const { data = [], containerHeight = 200 } = defineProps<VirtualScrollingProps>();
const virtualScrollValue = ref(0)
const computedTransformY = computed(() => {
  return `translateY(-${virtualScrollValue.value}px)`
})

const containerHeightStyle = computed(() => {
  return containerHeight + 'px'
})

const listenWheel = (e: WheelEvent) => {
  e.preventDefault()
  const deltaY = e.deltaY
  if (Math.abs(deltaY) !== 0) {
    virtualScrollValue.value += deltaY
  }
  console.log(virtualScrollValue.value)
}

onMounted(() => {
  const rendersWrapper = document.getElementById('renders_wrapper')
  rendersWrapper?.addEventListener('wheel', listenWheel, { passive: false })
})
</script>

<template>
  <div class="virtual-scrolling-window" :style="{ height: containerHeightStyle, overflow: 'hidden' }">   <!-- 虚拟滚动容器 -->
    <div class="renders_wrapper" id="renders_wrapper" :style="{ transform: computedTransformY }">
      <!-- 这里将来放置虚拟滚动的实现 -->
      <template v-for="(item, index) in data" :key="index">
        <slot name="item" :detail="item" :index="index"></slot>
      </template>
    </div>
  </div>
</template>

<style scoped>
.virtual-scrolling-window {
}

.renders_wrapper {

}
</style> 
