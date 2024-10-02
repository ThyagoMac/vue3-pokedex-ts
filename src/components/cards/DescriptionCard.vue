<script setup lang="ts">
import type { CurrentPokemonType, PokemonType } from '@/types/PokemonType'
import { usePokemonStore } from '@/stores/pokemons'
import { computed } from 'vue'
import ScreenPokedex from '@/components/ScreenPokedex.vue'
import PokemonAttributes from '@/components/PokemonAttributes.vue'
import PokemonEvolutions from '@/components/PokemonEvolutions.vue'

type Props = {
  currentPokemon: CurrentPokemonType | null
}

const { currentPokemon } = defineProps<Props>()
const pokemonStore = usePokemonStore()

const pokemonEvolutions = computed(() => {
  const finalResult: PokemonType[] = []
  currentPokemon?.evolutions.forEach((evolution) => {
    pokemonStore.pokemons.find((pokemon) => {
      if (pokemon.name === evolution) {
        finalResult.push(pokemon)
      }
    })
  })

  return finalResult
})
</script>
<template>
  <div class="m-5 flex flex-col gap-3">
    <ScreenPokedex :currentPokemon="currentPokemon" />

    <PokemonAttributes :currentPokemon="currentPokemon" />

    <PokemonEvolutions :pokemonEvolutions="pokemonEvolutions" />
  </div>
</template>
