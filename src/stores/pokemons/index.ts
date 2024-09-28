import { getPokemons } from '@/services/PokemonService'
import type { APIResponse } from '@/types/APIResponse'
import type { PokemonFilterType, PokemonType } from '@/types/PokemonType'
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemonStore', () => {
  const pokemons = ref<PokemonType[]>([])
  const currentPokemon = ref<PokemonType | null>(null)
  const currentFilters = ref<PokemonFilterType>({
    limit: 6,
    offset: 0
  })

  function initPokemons(data: PokemonType[]) {
    pokemons.value = data
  }

  function removePokemon(id: string) {
    pokemons.value = pokemons.value.filter((pokemon) => pokemon.id !== id)
  }

  function updatecurrentFilters(filter: PokemonFilterType) {
    currentFilters.value = filter
  }

  function updateCurrentPokemon(pokemon: PokemonType) {
    currentPokemon.value = pokemon
  }

  /* dispatch */
  async function dispatchGetPokemons(filters?: PokemonFilterType): Promise<APIResponse<null>> {
    try {
      if (filters) {
        if (filters.limit > 151) {
          filters.limit = 151
        }
        updatecurrentFilters(filters)
      }
      const { status, data } = await getPokemons(currentFilters.value)
      if (status === 200) {
        const finalPokemons: PokemonType[] = data.results.map((pokemon, index) => {
          const id = pokemon.url.split('/')[6] || index + 1

          return {
            ...pokemon,
            id: id
          }
        })
        initPokemons(finalPokemons)
        return {
          success: true,
          results: null
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        results: null
      }
    }
    return {
      success: false,
      results: null,
      status: 400
    }
  }

  /* end dispatch */

  return {
    currentFilters,
    pokemons,
    currentPokemon,
    initPokemons,
    removePokemon,
    updateCurrentPokemon,
    dispatchGetPokemons
  }
})
