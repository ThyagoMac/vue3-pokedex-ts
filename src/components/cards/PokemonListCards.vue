<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemons'
import { computed, onMounted, ref } from 'vue'
import PokemonCard from '@/components/cards/PokemonCard.vue'
import type { PokemonGetTypesType, PokemonType } from '@/types/PokemonType'
import ListCardsPagination from '@/components/paginations/ListCardsPagination.vue'
import TextInput from '@/components/inputs/TextInput.vue'
import Button from '../buttons/Button.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { POKEMONSPECIES } from '@/utils/constants'
import { getPokemonsType } from '@/services/PokemonService'
import { buildPokemonList } from '@/utils/PokemonUtils'
import Screen from '../layout/Screen.vue'
import { useLoadingStore } from '@/stores/is-loading'

const pokemonStore = usePokemonStore()
const pokemonList = ref<PokemonType[] | null>([])
const limit = ref(20)
const counter = ref(0)
const disableMoreBtn = ref(false)
const searchInput = ref('')
const typesFilter = ref<string[]>([])

const nextPage = computed(() => {
  const nextLimit = limit.value * (counter.value + 1)
  if (nextLimit < 152) {
    return nextLimit
  }
  return 151
})

const isLoadingStore = useLoadingStore()

onMounted(async () => {
  isLoadingStore.setScreenLoading(true)
  const { success, status } = await pokemonStore.dispatchGetPokemonsList()

  pokemonList.value = [...pokemonStore.pokemons]

  //Fake loading
  setTimeout(() => {
    isLoadingStore.setScreenLoading(false)
  }, 200)

  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
})

const handleShowMoreTwenty = async () => {
  isLoadingStore.setScreenLoading(true)
  let finalLimit = nextPage

  if (finalLimit.value > 151) {
    disableMoreBtn.value = true
  }

  const { success, status } = await pokemonStore.dispatchGetPokemonsList({
    limit: finalLimit.value,
    offset: 0
  })

  pokemonList.value = [...pokemonStore.pokemons]

  counter.value++
  isLoadingStore.setScreenLoading(false)

  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
}

const getAllPokemons = async () => {
  isLoadingStore.setScreenLoading(true)
  const { success, status } = await pokemonStore.dispatchGetPokemonsList({
    limit: limit.value,
    offset: 0
  })
  pokemonList.value = [...pokemonStore.pokemons]
  isLoadingStore.setScreenLoading(false)

  if (!success) {
    alert('Something gone wrong!')
    console.log('Error STATUS: ', status)
  }
}

const handlePokemonCardClick = (pokemon: PokemonType) => {
  pokemonStore.dispatchSetCurrentPokemon(pokemon.id)
}

const fetchAllTypePokemons = async () => {
  const allTypePokemons = await Promise.all(typesFilter.value.map(getPokemonsType))

  // Combine all arrays
  //const amountPokemons = allTypePokemons.flat()

  // Filter by type
  const amountPokemons = allTypePokemons.reduce((acc, curr) => {
    if (acc.length === 0) return curr
    return acc.filter((pokemon: PokemonGetTypesType) =>
      curr.some((currPokemon: PokemonGetTypesType) => currPokemon.name === pokemon.name)
    )
  }, [])
  //build pokemonlist
  const buildedPokemonList = buildPokemonList(amountPokemons)

  return buildedPokemonList
}

const filterByTypeFilter = async () => {
  let allTypePokemons: PokemonType[] = await fetchAllTypePokemons()
  return allTypePokemons
}

const filterBySearchInput = (pokemons: PokemonType[]) => {
  const filteredPokemons = pokemons.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      pokemon.id.toString().toLowerCase().includes(searchInput.value.toLowerCase().trim())
    )
  })

  return filteredPokemons
}

const handleShowAll = async (isFilter: boolean = false) => {
  limit.value = 151
  disableMoreBtn.value = true

  if (!isFilter) {
    await getAllPokemons()
    return
  } else {
    let filteredPokemons = await filterByTypeFilter()
    filteredPokemons = filterBySearchInput(filteredPokemons)

    pokemonStore.initPokemons(filteredPokemons)
    pokemonList.value = [...filteredPokemons]
  }
}

const handleSearchPokemons = async (e: Event) => {
  e.preventDefault()

  //Avoit call API when have enough pokemons or without typeFilter selected.
  if (typesFilter.value.length > 0) {
    //handleShowAll(isFilter = true)
    await handleShowAll(true)
    return
  }

  await handleShowAll()

  let finalResult = filterBySearchInput(pokemonStore.pokemons)
  pokemonList.value = [...finalResult]
}

const handleToggleSpecieFilter = (specieName: string) => {
  const index = typesFilter.value.indexOf(specieName)

  if (index === -1) {
    // add speciename
    typesFilter.value.push(specieName)
    return
  }
  // remove speciename
  typesFilter.value.splice(index, 1)
}

const checkPokemonSpecieClass = (specieName: string) => {
  if (typesFilter.value.includes(specieName)) {
    return 'border-zinc-900 opacity-100'
  }
  return 'border-blue-200'
}
</script>
<template>
  <div class="bg-red-600 p-5 h-full flex flex-col gap-5 min-w-374">
    <Screen variant="zinc" classes="py-4 px-2 min-h-586">
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
    </Screen>

    <ListCardsPagination
      :nextPage="nextPage"
      :disableMoreBtn="disableMoreBtn"
      @handleShowMoreTwenty="handleShowMoreTwenty"
      @handleShowAll="handleShowAll"
    />

    <form @submit="handleSearchPokemons">
      <Screen variant="blue" classes="p-2 flex flex-col gap-3 min-h-451">
        <div class="flex">
          <TextInput
            id="search-pokemon-input"
            class="flex-1"
            placeholder="Search pokemons"
            v-model="searchInput"
          />
          <Button variant="dark" size="sm" type="submit">
            <MagnifyingGlassIcon class="block h-5 w-5" />
          </Button>
        </div>
        <div
          class="grid grid-cols-3 gap-1 items-center justify-center border-t border-zinc-200 pt-2"
        >
          <div
            v-for="pokemonSpecie in POKEMONSPECIES"
            :key="pokemonSpecie.name"
            :class="[
              'flex-1 border-4 cursor-pointer opacity-80 font-bold hover:border-zinc-500 hover:opacity-100 transition-all',
              checkPokemonSpecieClass(pokemonSpecie.name)
            ]"
          >
            <button
              type="button"
              :class="`${pokemonSpecie.color} capitalize text-center p-2 w-full`"
              @click="handleToggleSpecieFilter(pokemonSpecie.name)"
            >
              {{ pokemonSpecie.name }}
            </button>
          </div>
          <Button
            class="flex flex-row gap-1 items-center justify-center"
            variant="dark"
            type="submit"
          >
            Search <MagnifyingGlassIcon class="h-5 w-5" />
          </Button>
        </div>
      </Screen>
    </form>
  </div>
</template>

<style scoped>
.pokemon-list-screen {
  max-height: 34.5rem;
  overflow: auto;
}
</style>
