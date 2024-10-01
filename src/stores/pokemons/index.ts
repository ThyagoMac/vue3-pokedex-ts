import {
  getPokemonEvolutions,
  getPokemonInformations,
  getPokemons
} from '@/services/PokemonService'
import type { APIResponse } from '@/types/APIResponse'
import type { CurrentPokemonType, PokemonFilterType, PokemonType } from '@/types/PokemonType'
import { extractEvolutions } from '@/utils/PokemonUtils'
import { extractInformations } from '@/utils/PokemonUtils'
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemonStore', () => {
  const pokemons = ref<PokemonType[]>([])
  const currentPokemon = ref<CurrentPokemonType | null>(null)
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

  function updateCurrentPokemon(pokemon: CurrentPokemonType) {
    if (pokemon.id !== currentPokemon?.value?.id) {
      currentPokemon.value = pokemon
    }
  }

  /* dispatch */
  async function dispatchGetPokemonsList(filters?: PokemonFilterType): Promise<APIResponse<null>> {
    try {
      if (filters) {
        if (filters.limit > 151) {
          filters.limit = 151
        }
        updatecurrentFilters(filters)
      }
      const { status, data } = await getPokemons(currentFilters.value)
      if (status === 200) {
        const pokeImgBaseUrl = import.meta.env.VITE_POKEMON_IMG_API_URL
        const finalPokemons: PokemonType[] = data.results.map((pokemon, index) => {
          //get id in "url": "https://pokeapi.co/api/v2/pokemon/1/"
          //method one:
          //const id = pokemon.url.split('/')[6] || index + 1
          //method two:
          //const pokeImgBaseUrl = import.meta.env.VITE_POKEMON_API_URL
          //const id = pokemon.url.replace(`${pokeImgBaseUrl}pokemon/`, '').replace('/', '')
          const id = pokemon.url.split('/')[6] || index + 1

          return {
            ...pokemon,
            id: id,
            img: `${pokeImgBaseUrl}${id}.svg`
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

  async function dispatchSetCurrentPokemon(
    id: string | number
  ): Promise<APIResponse<PokemonType | null>> {
    try {
      //get
      const pokemonInformations = await getPokemonInformations(id)
      const pokemonEvolutions = await getPokemonEvolutions(id)
      //extract
      const extractedEvol = extractEvolutions(pokemonEvolutions.data)
      const extractedInfo = extractInformations(pokemonInformations.data)
      //build
      const finalResult = {
        ...extractedInfo,
        evolutions: extractedEvol
      }
      updateCurrentPokemon(finalResult)

      return {
        success: false,
        results: null,
        status: 400
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status,
        results: null
      }
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
    dispatchGetPokemonsList,
    dispatchSetCurrentPokemon
  }
})
