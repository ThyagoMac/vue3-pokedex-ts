<script setup lang="ts">
import type { PokemonType } from '@/types/PokemonType'
import { usePokemonStore } from '@/stores/pokemons'
import { computed } from 'vue'

const pokemonStore = usePokemonStore()
const { pokemon } = defineProps<{
  pokemon: PokemonType
}>()

const addZeros = (num: number | string) => {
  //add '0' maxLenght 3 characters
  return num.toString().padStart(3, '0')
}
const position = addZeros(pokemon.id)

const activeClasses = computed(() => {
  return pokemon.id == pokemonStore.currentPokemon?.id
    ? 'opacity-100'
    : 'opacity-80 hover:opacity-100'
})
</script>

<template>
  <div
    :class="[
      'border-8 border-zinc-900 bg-zinc-900 transition-all text-zinc-200 text-center cursor-pointer',
      activeClasses
    ]"
  >
    <img
      class="h-28 w-28 m-auto"
      :src="`${pokemon.img}`"
      height="112"
      width="112"
      :alt="`${pokemon.name}-pic`"
    />
    <p class="text-xs mt-1">#{{ position }}</p>
    <p class="capitalize">{{ pokemon.name }}</p>
  </div>
  <!--  -->
</template>
