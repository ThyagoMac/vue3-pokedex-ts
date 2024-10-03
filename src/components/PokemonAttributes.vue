<script setup lang="ts">
import type { CurrentPokemonType } from '@/types/PokemonType'
import Screen from './layout/Screen.vue'

type Props = {
  currentPokemon: CurrentPokemonType | null
}
const { currentPokemon } = defineProps<Props>()
</script>

<template>
  <Screen variant="green" classes=" min-h-40 py-3 px-4">
    <div v-if="currentPokemon" class="flex flex-col gap-2">
      <div class="flex gap-2 pb-2 border-green-100 border-b-2 items-center">
        <div class="font-bold text-sm">Types:</div>
        <div v-for="(pkmType, index) in currentPokemon?.types" :key="index">
          <span
            :class="`${pkmType.color} text-center py-1 px-2 uppercase text-xs font-bold rounded-md`"
            >{{ pkmType.name }}</span
          >
        </div>
      </div>
      <div class="font-bold text-sm">Stats</div>
      <div class="grid grid-cols-2">
        <div v-for="(stat, index) in currentPokemon?.stats" :key="index">
          <span class="font-bold">{{ stat.base_stat }}</span>
          :
          <span class="uppercase">
            {{ stat.stat.name }}
          </span>
        </div>
      </div>
    </div>
    <div
      v-else
      class="p-3 bg-zinc-900 text-zinc-200 opacity-80 rounded-md m-auto w-full h-32"
    ></div>
  </Screen>

  <!-- use icons? 💧 🪨 🌿 🔥 -->
</template>
