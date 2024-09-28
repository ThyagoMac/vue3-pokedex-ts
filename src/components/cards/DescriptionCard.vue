<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemons'

const pokeImgBaseUrl = import.meta.env.VITE_POKEMON_IMG_API_URL
const pokemonStore = usePokemonStore()
</script>
<template>
  <div class="m-5 flex flex-col gap-3">
    <div class="rounded-md p-9 bg-zinc-300 relative">
      <div class="absolute top-3 left-1/2 flex gap-3">
        <div class="bg-red-500 h-3 w-3 rounded-full border-2 border-black"></div>
        <div class="left-1/2 bg-red-500 h-3 w-3 rounded-full border-2 border-black"></div>
      </div>
      <div v-if="pokemonStore.currentPokemon" class="p-3 bg-blue-100 rounded-md">
        <img
          class="m-auto h-72 w-72"
          height="288"
          width="288"
          :src="`${pokeImgBaseUrl}${pokemonStore.currentPokemon?.id}.svg`"
          alt="current-pokemon-picture"
        />
      </div>
      <div v-else class="p-3 bg-blue-100 rounded-md">
        <img
          class="m-auto h-72 w-72"
          height="288"
          width="288"
          :src="`${pokeImgBaseUrl}1.svg`"
          alt="current-pokemon-picture"
        />
      </div>
    </div>
    <div class="p-3 bg-green-200 rounded-md">Statistics / type 💧 🪨 🌿 🔥</div>
    <div class="p-3 bg-green-200 rounded-md">Evolutions</div>
  </div>
</template>
