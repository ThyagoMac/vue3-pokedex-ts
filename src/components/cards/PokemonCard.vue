<script setup lang="ts">
import type { PokemonType } from '@/types/PokemonType'
import { usePokemonStore } from '@/stores/pokemons'
import { computed, onMounted } from 'vue'
import { StarIcon } from '@heroicons/vue/24/solid'
import { getFavoritePokemonsList } from '@/services/PokemonService'
import { useFavoriteStore } from '@/stores/favorite-pokemons'

const emit = defineEmits(['cardClick', 'favoriteClick'])

const favoritePokemonsStore = useFavoriteStore()
const pokemonStore = usePokemonStore()
const { pokemon } = defineProps<{
  pokemon: PokemonType
}>()

const addZeros = (num: number | string) => {
  //add '0' maxLenght 3 characters
  return num.toString().padStart(3, '0')
}
const position = addZeros(pokemon.id)

onMounted(() => {
  //avoid init two times
  if (favoritePokemonsStore.favoriteNames.length < 1) {
    favoritePokemonsStore.initFavorites(getFavoritePokemonsList())
  }
})

const activeClasses = computed(() => {
  return pokemon.id == pokemonStore.currentPokemon?.id
    ? 'opacity-100'
    : 'opacity-80 hover:opacity-100'
})
const favoriteClasses = computed(() => {
  if (!pokemon.name) {
    return
  }
  const favNames = favoritePokemonsStore.favoriteNames
  return favNames.includes(pokemon.name) ? 'text-yellow-400' : 'text-zinc-400'
})

const handleClick = () => {
  emit('cardClick')
}
const handleFavoriteClick = (event: Event) => {
  event.stopPropagation()
  emit('favoriteClick')

  favoritePokemonsStore.dispatchUpdateFavorite(pokemon.name)
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
      :class="['block h-5 w-5 right-0 hover:text-yellow-200 absolute', favoriteClasses]"
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
