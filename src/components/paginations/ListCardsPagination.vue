<script setup lang="ts">
import Button from '@/components/buttons/Button.vue'

const { disableMoreBtn, nextPage } = defineProps<{
  nextPage: number
  disableMoreBtn?: boolean
}>()
</script>
<template>
  <div class="flex gap-2">
    <Button
      :disabled="disableMoreBtn"
      class="flex-1"
      variant="dark"
      @click="$emit('handleShowMoreTwenty')"
    >
      Show {{ nextPage }}
    </Button>
    <Button
      :disabled="disableMoreBtn"
      class="flex-1"
      variant="dark"
      @click="$emit('handleShowAll')"
    >
      Show All
    </Button>
  </div>
</template>
