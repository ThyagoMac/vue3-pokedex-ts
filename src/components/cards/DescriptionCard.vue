<script setup lang="ts">
import type { CurrentPokemonType } from '@/types/PokemonType'

const pokeImgBaseUrl = import.meta.env.VITE_POKEMON_IMG_API_URL
const { currentPokemon } = defineProps<{
  currentPokemon: CurrentPokemonType | null
}>()
</script>
<template>
  <div class="m-5 flex flex-col gap-3">
    <div class="rounded-md p-9 bg-zinc-300 relative">
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
      <div v-else class="p-3 bg-blue-100 rounded-md m-auto w-full">
        <img
          class="m-auto h-72 w-72"
          height="288"
          width="288"
          :src="`${pokeImgBaseUrl}1.svg`"
          alt="current-pokemon-picture"
        />
      </div>
    </div>
    <div class="p-3 bg-green-200 rounded-md">
      <div class="grid grid-cols-2">
        <div>
          <div class="font-bold text-sm mb-2">Stats</div>
          <div v-for="(stat, index) in currentPokemon?.stats" :key="index">
            <span class="text-bold uppercase">
              {{ stat.stat.name }}
            </span>
            : {{ stat.base_stat }}
          </div>
        </div>
        <div>
          <div class="font-bold text-sm mb-2">Types</div>
          <div v-for="(pkmType, index) in currentPokemon?.types" :key="index">
            <span
              :class="`${pkmType.color} text-center py-1 px-2 uppercase text-xs font-bold rounded-md`"
              >{{ pkmType.name }}</span
            >
          </div>
        </div>
      </div>
      Statistics / type 💧 🪨 🌿 🔥
    </div>
    <div class="p-3 bg-green-200 rounded-md">Evolutions</div>
  </div>
</template>
