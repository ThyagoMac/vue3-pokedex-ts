<script setup lang="ts">
const { variant, size, disabled } = defineProps<{
  variant?: string
  size?: string
  disabled?: boolean
}>()

const loadVariantClass = () => {
  if (variant && variant === 'secondary') {
    return 'rounded-md bg-green-200 hover:bg-green-400 disabled:hover:bg-green-200'
  }
  if (variant && variant === 'dark-btn') {
    return 'rounded-md bg-zinc-700 text-zinc-400 border-4 border-zinc-900 hover:bg-zinc-900 disabled:hover:bg-zinc-700 hover:text-zinc-100 disabled:hover:text-zinc-400'
  }
  return 'bg-red-200 hover:bg-red-400'
}

const loadSizeClass = () => {
  if (size && size === 'sm') {
    return 'py-1 px-2 text-sm'
  }

  if (size && size === 'lg') {
    return 'py-3 px-4 text-lg'
  }

  return 'py-2 px-3 '
}

const variantClass = loadVariantClass()
const sizeClass = loadSizeClass()
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'min-w-fit transition-all disabled:opacity-80 disabled:cursor-not-allowed',
      variantClass,
      sizeClass
    ]"
  >
    <slot />
  </button>
</template>
