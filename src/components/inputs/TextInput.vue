<script setup lang="ts">
const { variant, size, type } = defineProps<{
  id: string
  variant?: string
  size?: string
  type?: string
  placeholder?: string
  labelText?: string
}>()

const model = defineModel()

const loadVariantClass = () => {
  if (variant && variant === 'secondary') {
    return 'rounded-md bg-green-200 hover:bg-green-400 disabled:hover:bg-green-200'
  }
  if (variant && variant === 'dark') {
    return 'rounded-md bg-zinc-700 text-zinc-400 border-4 border-zinc-900 hover:bg-zinc-900 disabled:hover:bg-zinc-700 hover:text-zinc-100 disabled:hover:text-zinc-400'
  }
  return 'bg-blue-100 hover:bg-cyan-100'
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
  <div class="flex flex-col gap-2">
    <label :hidden="labelText ? false : true" :for="id">{{ labelText || id }}</label>
    <input
      :id="id"
      :type="type ? type : 'text'"
      :class="['py-2 px-3 w-min outline-none', variantClass, sizeClass]"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
</template>
