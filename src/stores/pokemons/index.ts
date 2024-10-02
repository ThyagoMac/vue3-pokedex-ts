import {
  getPokemonEvolutions,
  getPokemonInformations,
  getPokemons
} from '@/services/PokemonService'
import type { APIResponse } from '@/types/APIResponse'
import type {
  CurrentPokemonType,
  PokemnonSpecieType,
  PokemonFilterType,
  PokemonType,
  TypeType
} from '@/types/PokemonType'
import { buildPokemonList, extractEvolutions } from '@/utils/PokemonUtils'
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
        const buildedPokemonList = buildPokemonList(data.results)

        initPokemons(buildedPokemonList)
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

  function isTypeType(obj: any): obj is TypeType {
    return (
      obj &&
      typeof obj === 'object' &&
      'slot' in obj &&
      'type' in obj &&
      typeof obj.type === 'object' &&
      'name' in obj.type &&
      'url' in obj.type
    )
  }

  // Conversion function from PokemnonSpecieType to TypeType
  function convertToTypeType(obj: PokemnonSpecieType): TypeType {
    return {
      slot: 1, // Default value, adjust as needed
      type: {
        name: obj.name,
        url: '' // You might need to provide a default URL or extract it from somewhere
      },
      name: obj.name,
      color: obj.color
    }
  }

  async function dispatchSetCurrentPokemon(
    id: string | number
  ): Promise<APIResponse<CurrentPokemonType | null>> {
    try {
      // Get Pokémon data
      const pokemonEvolutions = await getPokemonEvolutions(id)
      const pokemonInformations = await getPokemonInformations(id)

      // Extract evolutions and information
      const extractedEvol = extractEvolutions(pokemonEvolutions.data)
      const extractedInfo = extractInformations(pokemonInformations.data)

      // Ensure that all required fields for CurrentPokemonType are not undefined
      const finalResult: CurrentPokemonType = {
        abilities: extractedInfo?.abilities ?? [],
        id: extractedInfo?.id ?? id,
        name: extractedInfo?.name ?? '',
        stats: extractedInfo?.stats ?? [],
        types:
          extractedInfo?.types
            ?.map((type) => {
              if (isTypeType(type)) {
                return type
              } else if (type) {
                return convertToTypeType(type)
              }
              return undefined
            })
            .filter((type): type is TypeType => type !== undefined) ?? undefined,
        evolutions: extractedEvol ?? [],
        img: extractedInfo?.img ?? ''
      }

      // Update current Pokémon with the extracted information
      updateCurrentPokemon(finalResult)

      // Return success response with the final result
      return {
        success: true,
        results: finalResult,
        status: 200
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        status: _error.response?.status || 500,
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
