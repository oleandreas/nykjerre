<script setup lang="ts">
defineProps<{ value: number; max?: number }>()
</script>

<template>
  <span class="rating">
    <span class="stars">
      <span v-for="n in (max ?? 10)" :key="n" :class="n <= value ? 'star-on' : 'star-off'">★</span>
    </span>
    <span class="rating-num">{{ value }}/{{ max ?? 10 }}</span>
  </span>
</template>
