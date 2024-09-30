import { pokeApi } from '@/services/api'
import type { APIResponse } from '@/types/APIResponse'
import type { PokemonSpeciesType, PokemonType } from '@/types/PokemonType'

export const getPokemons = async (filters = { limit: 151, offset: 0 }) => {
  return await pokeApi.get<APIResponse<PokemonType[]>>('pokemon', {
    params: filters
  })
}

export const getPokemonInformations = async (id: string | number) => {
  return await pokeApi.get<APIResponse<PokemonType>>(`pokemon/${id}`)
}

export const getPokemonEvolutions = async (pokemonId: string | number) => {
  const pokemonSpecies = await pokeApi.get<PokemonSpeciesType>(`pokemon-species/${pokemonId}`)
  //get id in "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
  const evolutionId = pokemonSpecies.data.evolution_chain.url.split('/')[6]
  const evolutionChain = await pokeApi.get(`evolution-chain/${evolutionId}`)

  return evolutionChain
}
