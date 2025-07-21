<script setup lang="ts">
import { AuroraVirtualScrolling } from '../../../dist/vue'
const list = Array.from({length: 100}, (_, index) => ({
  name: `item-${index}`
}))
</script>

<template>
  <div>
    <AuroraVirtualScrolling :data="list" :containerHeight="200">
      <template #item="{ detail }">
        <div class="content">{{ detail?.name }}</div>
      </template>
    </AuroraVirtualScrolling>
  </div>
</template>

<style scoped>
.content {
  background-color: #f00;
  color: #fff;
}
</style>
