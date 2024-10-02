<script setup lang="ts">
import { useLoadingStore } from '@/stores/is-loading'
import 'animate.css'

type Props = {
  variant?: 'blue' | 'green' | 'zinc'
  classes?: string
}
const { variant = 'zinc', classes } = defineProps<Props>()

const classConfig = {
  //variant
  blue: 'bg-blue-200',
  green: 'bg-green-200',
  zinc: 'bg-zinc-300'
}

const isLoadingStore = useLoadingStore()
</script>
<template>
  <div
    v-show="!isLoadingStore.isScreenLoading"
    :class="['rounded-md', classConfig[variant], classes]"
  >
    <slot />
  </div>
  <div
    v-show="isLoadingStore.isScreenLoading"
    :class="['rounded-md flex items-center justify-center', classConfig[variant], classes]"
  >
    <p class="animate__animated animate__flash animate__infinite text-xl font-bold">Loading...</p>
  </div>
  <!-- <button @click="isLoadingStore.setScreenLoading(!isLoadingStore.isScreenLoading)">
    {{ isLoadingStore.isScreenLoading }}
  </button> -->
</template>
