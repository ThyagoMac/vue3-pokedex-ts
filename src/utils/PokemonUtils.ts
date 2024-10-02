import type {
  CurrentPokemonType,
  EvolutionChainType,
  PokemnonSpecieType,
  PokemonType,
  TypeType
} from '@/types/PokemonType'
import { POKEMONSPECIES } from './constants'

export const extractEvolutions = (evolutionChain: EvolutionChainType): string[] => {
  const evolutionNames: string[] = []

  function extractNames(chain: EvolutionChainType['chain']) {
    evolutionNames.push(chain.species.name)

    if (chain.evolves_to && chain.evolves_to.length > 0) {
      chain.evolves_to.forEach((evolution) => {
        extractNames(evolution)
      })
    }
  }

  extractNames(evolutionChain.chain)

  return evolutionNames
}

export const extractInformations = (pokemon: CurrentPokemonType | null) => {
  if (!pokemon) {
    return
  }
  const pokeImgBaseUrl = import.meta.env.VITE_POKEMON_IMG_API_URL

  // Get colors and types
  const pokemonTypesWithColors = pokemon.types?.map((pokemonType: TypeType) => {
    const speciesType = POKEMONSPECIES.find(
      (specie: PokemnonSpecieType) => specie.name === pokemonType.type.name
    )
    return speciesType
  })

  const img = `${pokeImgBaseUrl}${pokemon.id}.svg`

  const finalResult = { ...pokemon, img, types: pokemonTypesWithColors }
  const { abilities, id, name, stats, types } = finalResult

  return { abilities, id, name, stats, types, img }
}

export const buildPokemonList = (pokemonList: PokemonType[]) => {
  const pokeImgBaseUrl = import.meta.env.VITE_POKEMON_IMG_API_URL
  const finalPokemons: PokemonType[] = pokemonList
    .map((pokemon, index) => {
      //get id in "url": "https://pokeapi.co/api/v2/pokemon/1/"
      //method one:
      //const id = pokemon.url.split('/')[6] || index + 1
      //method two:
      //const pokeAPIBaseUrl = import.meta.env.VITE_POKEMON_API_URL
      //const id = pokemon.url.replace(`${pokeAPIBaseUrl}pokemon/`, '').replace('/', '')
      const id = pokemon.url.split('/')[6] || index + 1

      return {
        ...pokemon,
        id: id,
        img: `${pokeImgBaseUrl}${id}.svg`
      }
    })
    .filter((pokemon) => +pokemon.id <= 151)

  return finalPokemons
}
