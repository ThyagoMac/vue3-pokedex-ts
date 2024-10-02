<script setup lang="ts">
import type { CurrentPokemonType } from '@/types/PokemonType'
import Screen from './layout/Screen.vue'

type Props = {
  currentPokemon: CurrentPokemonType | null
}
const { currentPokemon } = defineProps<Props>()
</script>

<template>
  <Screen variant="green" classes="grid grid-cols-2 min-h-52 py-3 px-4">
    <div>
      <div class="font-bold text-sm mb-2">Stats</div>
      <div v-for="(stat, index) in currentPokemon?.stats" :key="index">
        <span class="text-bold uppercase">
          {{ stat.stat.name }}
        </span>
        : {{ stat.base_stat }}
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <div class="font-bold text-sm mb-1">Types</div>
      <div v-for="(pkmType, index) in currentPokemon?.types" :key="index">
        <span
          :class="`${pkmType.color} text-center py-1 px-2 uppercase text-xs font-bold rounded-md`"
          >{{ pkmType.name }}</span
        >
      </div>
    </div>
  </Screen>
  <!-- use icons? 💧 🪨 🌿 🔥 -->
</template>
