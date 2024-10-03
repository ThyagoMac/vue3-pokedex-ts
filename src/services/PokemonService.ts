import { pokeApi } from '@/services/api'
import type { APIResponse } from '@/types/APIResponse'
import type {
  CurrentPokemonType,
  PokemonGetTypesType,
  PokemonSpeciesType,
  PokemonType
} from '@/types/PokemonType'

export const getPokemons = async (filters = { limit: 151, offset: 0 }) => {
  return await pokeApi.get<APIResponse<PokemonType[]>>('pokemon', {
    params: filters
  })
}

export const getPokemonInformations = async (id: string | number) => {
  return await pokeApi.get<CurrentPokemonType>(`pokemon/${id}`)
}

export const getPokemonEvolutions = async (pokemonId: string | number) => {
  const pokemonSpecies = await pokeApi.get<PokemonSpeciesType>(`pokemon-species/${pokemonId}`)
  //get id in "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
  const evolutionId = pokemonSpecies.data.evolution_chain.url.split('/')[6]
  const evolutionChain = await pokeApi.get(`evolution-chain/${evolutionId}`)

  return evolutionChain
}

export const getPokemonsType = async (typeName: string | number) => {
  const res = await pokeApi.get(`type/${typeName}`)
  const finalResult = res.data.pokemon.map((item: { pokemon: PokemonGetTypesType }) => item.pokemon)

  return finalResult
}

// favorites
const STORAGE_KEY = 'favoritePokemonNames'

export const getFavoritePokemonsList = (): string[] => {
  const favorites = localStorage.getItem(STORAGE_KEY)
  return favorites ? JSON.parse(favorites) : []
}

export const getFavoritePokemon = (name: string): string | null => {
  const favorites = getFavoritePokemonsList()
  return favorites.includes(name) ? name : null
}

export const updateFavoritePokemon = (pokemonName: string): void => {
  const updatedFavorites = getFavoritePokemonsList()

  if (!updatedFavorites.includes(pokemonName)) {
    updatedFavorites.push(pokemonName)
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites))
}

export const setFavoritePokemons = (favoriteNames: string[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteNames))
}

export const deleteFavoritePokemon = (pokemonName: string): void => {
  const favorites = getFavoritePokemonsList()
  const updatedFavorites = favorites.filter((favName) => favName !== pokemonName)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites))
}
