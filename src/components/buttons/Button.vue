<script setup lang="ts">
const props = defineProps<{
  variant?: string
  size?: string
}>()

const variantClass =
  props.variant === 'secondary' ? 'bg-green-200 hover:bg-green-400' : 'bg-red-200 hover:bg-red-400'
</script>

<template>
  <button :class="['py-2 px-3 w-min rounded-md', variantClass]">
    <slot />
  </button>
</template>
