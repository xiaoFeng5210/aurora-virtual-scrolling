<script setup lang="ts">
import { AuroraVirtualScrolling } from '../../../dist/vue'
const list = Array.from({length: 5}, (_, index) => ({
  name: `item-${index}`
}))
</script>

<template>
  <div>
    <AuroraVirtualScrolling :data="list">
      <template #item="{ item, index }">
        <div class="content">{{ item.name }}</div>
      </template>
    </AuroraVirtualScrolling>
  </div>
</template>

<style scoped>
.content {
  background-color: #f00;
}
</style>
