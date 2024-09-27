<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemons'
import { onMounted, ref } from 'vue'
import PokemonCard from './PokemonCard.vue'

const pokemonStore = usePokemonStore()
const isLoading = ref(true)

onMounted(async () => {
  const { success, status } = await pokemonStore.dispatchGetPokemons({
    limit: 5,
    offset: 0
  })

  isLoading.value = false

  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
})

const handlePokemonCardClick = () => {
  console.log('update-pokemon: ')
}
</script>
<template>
  <div class="border border-zinc-200 rounded-md bg-blue-50 p-5">
    <div v-show="!isLoading">
      <h3>Pokemon List</h3>
      <div class="grid grid-cols-2">
        <PokemonCard
          v-for="pokemon in pokemonStore.pokemons"
          :key="pokemon.name"
          :pokemon="pokemon"
          class="cursor-pointer"
          @click="handlePokemonCardClick"
        />
      </div>
    </div>
    <div v-show="isLoading">loading</div>
  </div>
</template>
