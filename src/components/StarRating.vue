<script setup lang="ts">
const props = defineProps<{ value: number; max?: number }>()
const max = props.max ?? 10
</script>

<template>
  <span class="rating">
    <span class="stars" :title="value + ' av ' + max'">
      <span v-for="n in max" :key="n" :class="n <= value ? 'star-on' : 'star-off'">★</span>
    </span>
    <span class="rating-num">{{ value }}/{{ max }}</span>
  </span>
</template>
