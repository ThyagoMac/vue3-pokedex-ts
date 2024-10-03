<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemons'
import type { PokemonType } from '@/types/PokemonType'
import PokemonCard from './cards/PokemonCard.vue'
import Screen from './layout/Screen.vue'

type Props = {
  pokemonEvolutions: PokemonType[] | null
}

const { pokemonEvolutions } = defineProps<Props>()
const pokemonStore = usePokemonStore()

const handlePokemonCardClick = async (pokemon: PokemonType) => {
  await pokemonStore.dispatchSetCurrentPokemon(pokemon.id)
}
</script>

<template>
  <Screen variant="green" classes="py-3 px-4 min-h-40">
    <div v-if="pokemonEvolutions && pokemonEvolutions?.length > 0">
      <div class="font-bold text-sm mb-2">Evolutions</div>

      <div class="flex w-full overflow-auto">
        <PokemonCard
          v-for="(pkmEvolution, index) in pokemonEvolutions"
          :key="index"
          class="flex-1"
          :pokemon="pkmEvolution"
          @click="() => handlePokemonCardClick(pkmEvolution)"
        />
      </div>
    </div>
    <div
      v-else
      class="p-3 bg-zinc-900 text-zinc-200 opacity-80 rounded-md m-auto w-full h-32"
    ></div>
  </Screen>
</template>
