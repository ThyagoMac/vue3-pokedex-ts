<script setup lang="ts">
import type { CurrentPokemonType } from '@/types/PokemonType'
import Screen from './layout/Screen.vue'
import { useLoadingStore } from '@/stores/is-loading'
import { computed } from 'vue'

type Props = {
  currentPokemon: CurrentPokemonType | null
}

const animateClass = computed(() => {
  return isLoadingStore.isCurrentPkmLoading ? 'animate__fadeOutDownBig' : 'animate__fadeInDownBig'
})
const { currentPokemon } = defineProps<Props>()
const isLoadingStore = useLoadingStore()
</script>
<template>
  <Screen variant="zinc" classes="p-9 min-h-72 relative">
    <div class="absolute top-3 left-1/2 flex gap-3">
      <div class="bg-red-500 h-3 w-3 rounded-full border-2 border-black"></div>
      <div class="left-1/2 bg-red-500 h-3 w-3 rounded-full border-2 border-black"></div>
    </div>
    <Screen
      v-if="currentPokemon"
      variant="blue"
      classes="p-2 rounded-md m-auto w-full overflow-hidden"
    >
      <img
        :class="`m-auto h-52 w-52 animate__animated
          ${animateClass}
          `"
        height="208"
        width="208"
        :src="`${currentPokemon.img}`"
        :alt="`${currentPokemon.name}-picture`"
      />
    </Screen>
    <div
      v-else
      class="p-3 bg-zinc-900 text-zinc-200 opacity-80 rounded-md m-auto w-full h-56"
    ></div>
  </Screen>
</template>
