<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemons'
import { onMounted, ref } from 'vue'
import PokemonCard from './PokemonCard.vue'
import type { PokemonType } from '@/types/PokemonType'

const pokemonStore = usePokemonStore()
const isLoading = ref(true)

onMounted(async () => {
  const { success, status } = await pokemonStore.dispatchGetPokemons({
    limit: 6,
    offset: 0
  })

  isLoading.value = false

  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
})

const handlePokemonCardClick = (pokemon: PokemonType) => {
  console.log('update-pokemon: ', pokemon)
  pokemonStore.updateCurrentPokemon(pokemon)
  console.log('pipi: ', pokemonStore.currentPokemon)
}
</script>
<template>
  <div class="bg-red-600 p-5 h-full">
    <div v-show="!isLoading" class="bg-zinc-300 py-4 px-2 rounded-md">
      <h3 class="font-bold text-xl mb-6">Pokemon List</h3>
      <div class="grid grid-cols-2 gap-0">
        <PokemonCard
          v-for="pokemon in pokemonStore.pokemons"
          :key="pokemon.name"
          :pokemon="pokemon"
          @click="() => handlePokemonCardClick(pokemon)"
        />
      </div>
    </div>
    <div v-show="isLoading">loading</div>
  </div>
</template>
