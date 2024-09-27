import { pokeApi } from '@/services/api'
import type { APIResponse } from '@/types/APIResponse'
import type { PokemonType } from '@/types/PokemonType'

export const getPokemons = async (filters = { limit: 151, offset: 0 }) => {
  return await pokeApi.get<APIResponse<PokemonType[]>>('pokemon', {
    params: filters
  })
}

export const getPokemon = async (id: string) => {
  return await pokeApi.get<APIResponse<PokemonType[]>>(`pokemon/${id}`)
}
