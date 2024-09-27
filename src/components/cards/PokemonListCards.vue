<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemons'
import { onMounted } from 'vue'

const pokemonStore = usePokemonStore()

onMounted(async () => {
  const { success, status } = await pokemonStore.dispatchGetPokemons({
    limit: 5,
    offset: 0
  })

  console.log('content: ', pokemonStore.pokemons)
  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
})
</script>
<template>
  <div class="border border-zinc-200 rounded-md bg-blue-50 p-5">
    lista: {{ pokemonStore.pokemons }}
  </div>
</template>
