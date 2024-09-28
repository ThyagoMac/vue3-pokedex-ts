<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemons'
import { computed, onMounted, ref } from 'vue'
import PokemonCard from '@/components/cards/PokemonCard.vue'
import type { PokemonType } from '@/types/PokemonType'
import ListCardsPagination from '@/components/paginations/ListCardsPagination.vue'
import TextInput from '@/components/inputs/TextInput.vue'
import Button from '../buttons/Button.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { POKEMONSPECIES } from '@/mock/PokemonSpecies'

const pokemonStore = usePokemonStore()
const pokemonList = ref<PokemonType[] | null>([])
const isLoading = ref(true)
const limit = ref(20)
const counter = ref(0)
const disableMoreBtn = ref(false)
const searchInput = ref('')

const nextPage = computed(() => {
  const nextLimit = limit.value * (counter.value + 1)
  if (nextLimit < 152) {
    return nextLimit
  }
  return 151
})

onMounted(async () => {
  const { success, status } = await pokemonStore.dispatchGetPokemons()

  pokemonList.value = [...pokemonStore.pokemons]

  isLoading.value = false

  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
})

const handleShowMoreTwenty = async () => {
  let finalLimit = nextPage

  if (finalLimit.value > 151) {
    disableMoreBtn.value = true
  }

  const { success, status } = await pokemonStore.dispatchGetPokemons({
    limit: finalLimit.value,
    offset: 0
  })

  pokemonList.value = [...pokemonStore.pokemons]

  counter.value++
  isLoading.value = false

  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
}

const handleShowAll = async () => {
  limit.value = 151
  disableMoreBtn.value = true

  const { success, status } = await pokemonStore.dispatchGetPokemons({
    limit: limit.value,
    offset: 0
  })

  pokemonList.value = [...pokemonStore.pokemons]
  isLoading.value = false

  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
}

const handlePokemonCardClick = (pokemon: PokemonType) => {
  pokemonStore.updateCurrentPokemon(pokemon)
}

const handleSearchPokemons = async (e: Event) => {
  e.preventDefault()

  if (nextPage.value !== 151) {
    await handleShowAll()
  }

  let finalResult = pokemonStore.pokemons.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      pokemon.id.toString().toLowerCase().includes(searchInput.value.toLowerCase().trim())
    )
  })

  pokemonList.value = [...finalResult]
}
</script>
<template>
  <div class="bg-red-600 p-5 h-full flex flex-col gap-5">
    <div v-show="!isLoading" class="bg-zinc-300 py-4 px-2 rounded-md">
      <h2 class="font-bold text-xl mb-3">Pokemon List ({{ pokemonList?.length || 0 }})</h2>
      <div class="pokemon-list-screen">
        <div class="grid grid-cols-2 gap-0 bar">
          <PokemonCard
            v-for="pokemon in pokemonList"
            :key="pokemon.name"
            :pokemon="pokemon"
            @click="() => handlePokemonCardClick(pokemon)"
          />
        </div>
      </div>
    </div>
    <div v-show="isLoading">loading...</div>

    <form @submit="handleSearchPokemons">
      <div class="flex">
        <TextInput
          id="search-pokemon-input"
          class="flex-1"
          placeholder="Search a pokemon"
          v-model="searchInput"
        />
        <Button variant="dark-btn" size="sm" type="submit">
          <MagnifyingGlassIcon class="block h-5 w-5" />
        </Button>
      </div>
    </form>
    <ListCardsPagination
      :nextPage="nextPage"
      :disableMoreBtn="disableMoreBtn"
      @handleShowMoreTwenty="handleShowMoreTwenty"
      @handleShowAll="handleShowAll"
    />
    <section class="flex flex-wrap items-center justify-center max-w-80">
      <div
        v-for="pokemonSpecie in POKEMONSPECIES"
        :key="pokemonSpecie.name"
        class="flex-1 border-4 cursor-pointer opacity-90 font-bold hover:opacity-100 hover:border-zinc-900 hover:border-solid transition-all"
      >
        <p :class="`${pokemonSpecie.color} capitalize text-center p-2`">
          {{ pokemonSpecie.name }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pokemon-list-screen {
  max-height: 34.5rem;
  overflow: auto;
}
</style>
