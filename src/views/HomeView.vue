<script setup lang="ts">
import BaseTemplate from '@/components/layout/BaseTemplate.vue'
import DescriptionCard from '@/components/cards/DescriptionCard.vue'
import PokemonListCards from '@/components/cards/PokemonListCards.vue'
import LedBtn from '@/components/buttons/LedBtn.vue'
import { usePokemonStore } from '@/stores/pokemons'

const pokemonStore = usePokemonStore()
</script>

<template>
  <BaseTemplate>
    <div class="flex flex-col gap-5 md:flex-row bg-red-700 py-5 px-3 rounded-lg">
      <section class="bg-red-600 flex-1">
        <LedBtn class="ml-9 mt-4" size="md" color="cyan" :flicker="true" />
        <DescriptionCard :currentPokemon="pokemonStore.currentPokemon" />
      </section>
      <section class="bg-green-100">
        <PokemonListCards />
      </section>
    </div>
  </BaseTemplate>
</template>
