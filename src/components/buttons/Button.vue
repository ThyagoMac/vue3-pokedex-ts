<script setup lang="ts">
type Props = {
  variant?: 'primary' | 'secondary' | 'dark'
  size?: 'md' | 'sm' | 'lg'
  disabled?: boolean
}
const { variant, size, disabled } = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const classConfig = {
  //variant
  primary: 'bg-red-200 hover:bg-red-400',
  secondary: 'rounded-md bg-green-200 hover:bg-green-400 disabled:hover:bg-green-200',
  dark: 'rounded-md bg-zinc-700 text-zinc-400 border-4 border-zinc-900 hover:bg-zinc-900 disabled:hover:bg-zinc-700 hover:text-zinc-100 disabled:hover:text-zinc-400',

  //size
  md: 'py-2 px-3',
  sm: 'py-1 px-2 text-sm',
  lg: 'py-3 px-4 text-lg'
}
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'min-w-fit transition-all disabled:opacity-80 disabled:cursor-not-allowed',
      classConfig[variant],
      classConfig[size]
    ]"
  >
    <slot />
  </button>
</template>
