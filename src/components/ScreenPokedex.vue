<script setup lang="ts">
import type { CurrentPokemonType } from '@/types/PokemonType'
import Screen from './layout/Screen.vue'

type Props = {
  currentPokemon: CurrentPokemonType | null
}
const { currentPokemon } = defineProps<Props>()
</script>

<template>
  <Screen variant="zinc" classes="p-9 min-h-96 relative">
    <div class="absolute top-3 left-1/2 flex gap-3">
      <div class="bg-red-500 h-3 w-3 rounded-full border-2 border-black"></div>
      <div class="left-1/2 bg-red-500 h-3 w-3 rounded-full border-2 border-black"></div>
    </div>
    <div v-if="currentPokemon" class="p-3 bg-blue-100 rounded-md m-auto w-full">
      <img
        class="m-auto h-72 w-72"
        height="288"
        width="288"
        :src="`${currentPokemon.img}`"
        :alt="`${currentPokemon.name}-picture`"
      />
    </div>
    <div v-else class="p-3 bg-blue-100 rounded-md m-auto w-full">nenhum carregado</div>
  </Screen>
</template>
