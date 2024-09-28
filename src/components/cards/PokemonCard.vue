<script setup lang="ts">
import type { PokemonType } from '@/types/PokemonType'
import { usePokemonStore } from '@/stores/pokemons'

const pokeImgBaseUrl = import.meta.env.VITE_POKEMON_IMG_API_URL
const pokemonStore = usePokemonStore()
const { pokemon } = defineProps<{
  pokemon: PokemonType
}>()

const addZeros = (num: number | string) => {
  //add '0' maxLenght 3 characters
  return num.toString().padStart(3, '0')
}
const position = addZeros(pokemon.id)
</script>

<template>
  <div
    :class="[
      'border-8 border-zinc-900 bg-zinc-900 opacity-80 transition-all text-center cursor-pointer ',
      pokemon.id === pokemonStore.currentPokemon?.id ? 'opacity-100' : 'hover:opacity-100'
    ]"
  >
    <img
      class="h-28 w-28 m-auto"
      :src="`${pokeImgBaseUrl}${pokemon.id}.svg`"
      height="112"
      width="112"
      :alt="`${pokemon.name}-pic`"
    />
    <p class="text-white">#{{ position }}</p>
    <p class="text-white">{{ pokemon.name }}</p>
  </div>
  <!--  -->
</template>
