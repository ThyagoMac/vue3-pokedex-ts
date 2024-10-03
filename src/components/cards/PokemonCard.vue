<script setup lang="ts">
import type { PokemonType } from '@/types/PokemonType'
import { usePokemonStore } from '@/stores/pokemons'
import { computed } from 'vue'
import { StarIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['cardClick', 'favoriteClick'])

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
const handleClick = () => {
  console.log('cardclick: ')
  emit('cardClick')
}
const handleFavoriteClick = (event: Event) => {
  console.log('favoriteClick: ')
  event.stopPropagation()
  emit('favoriteClick')
}
</script>

<template>
  <div
    :class="[
      'relative border-8 border-zinc-900 bg-zinc-900 transition-all text-zinc-200 text-center cursor-pointer',
      activeClasses
    ]"
    @click="handleClick"
  >
    <StarIcon
      @click="handleFavoriteClick"
      class="block h-5 w-5 text-zinc-400 absolute hover:text-yellow-300"
    />
    <img
      class="h-14 w-14 m-auto"
      :src="`${pokemon.img}`"
      height="56"
      width="56"
      :alt="`${pokemon.name}-pic`"
    />
    <p class="text-xs mt-1">#{{ position }}</p>
    <p class="capitalize">{{ pokemon.name }}</p>
  </div>
</template>
