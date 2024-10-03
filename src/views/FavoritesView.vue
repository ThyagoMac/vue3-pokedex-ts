<script setup lang="ts">
import PokemonCard from '@/components/cards/PokemonCard.vue'
import BaseTemplate from '@/components/layout/BaseTemplate.vue'
import { getFavoritePokemonsList } from '@/services/PokemonService'
import { useFavoriteStore } from '@/stores/favorite-pokemons'
import { usePokemonStore } from '@/stores/pokemons'
import type { PokemonType } from '@/types/PokemonType'
import { onMounted, ref } from 'vue'

const favoritePokemonsStore = useFavoriteStore()
const pokemonStore = usePokemonStore()
const pokemonList = ref<PokemonType[] | null>([])
const favPokemons = ref<PokemonType[] | null>([])

onMounted(async () => {
  //avoid init two times
  if (favoritePokemonsStore.favoriteNames.length < 1) {
    favoritePokemonsStore.initFavorites(getFavoritePokemonsList())
  }

  //get all pokemons
  await pokemonStore.dispatchGetPokemonsList({
    limit: 151,
    offset: 0
  })

  pokemonList.value = [...pokemonStore.pokemons]
  const favNames = favoritePokemonsStore.favoriteNames

  favPokemons.value = pokemonList.value.filter((pokemon) => favNames.includes(pokemon.name))
})
</script>

<template>
  <BaseTemplate>
    <h1 class="text-lg font-bold mb-8">Check Your Favourite Pokenons!</h1>
    <div v-if="favPokemons && favPokemons.length" class="grid grid-cols-2 md:grid-cols-4">
      <div v-for="pokemon in favPokemons" :key="pokemon.id">
        <PokemonCard :pokemon="pokemon" />
      </div>
    </div>
    <div v-else>
      <p class="text-zinc-800">
        You don't have favorite pokemons! 🥲 what about fix it clicking
        <span class="underline cursor-pointer hover:text-zinc-500 transition-all">
          <RouterLink to="/" class="">here</RouterLink>
        </span>
        🥰
      </p>
    </div>
  </BaseTemplate>
</template>

<style scoped></style>
