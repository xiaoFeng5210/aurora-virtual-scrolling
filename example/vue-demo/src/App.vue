<script setup lang="ts">
import { AuroraVirtualScrolling } from '../../../dist/vue'
</script>

<template>
  <div>
    <AuroraVirtualScrolling>
      <div class="content">123</div>
    </AuroraVirtualScrolling>
  </div>
</template>

<style scoped>
.content {
  background-color: #f00;
}
</style>
