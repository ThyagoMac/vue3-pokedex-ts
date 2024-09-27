import { getPokemons } from '@/services/PokemonService'
import type { APIResponse } from '@/types/APIResponse'
import type { PokemonType } from '@/types/PokemonType'
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemonStore', () => {
  const pokemons = ref<PokemonType[]>([])

  function initPokemons(data: PokemonType[]) {
    pokemons.value = data
  }

  function removePokemon(id: string) {
    pokemons.value = pokemons.value.filter((pokemon) => pokemon.id !== id)
  }

  /* dispatch */
  async function dispatchGetPokemons(filters?: {
    limit: number
    offset: number
  }): Promise<APIResponse<null>> {
    try {
      const { status, data } = await getPokemons(filters)
      if (status === 200) {
        initPokemons(data.results)
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
    pokemons,
    initPokemons,
    removePokemon,
    dispatchGetPokemons
  }
})
