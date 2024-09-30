import { POKEMONSPECIES } from './constants'

export const extractEvolutions = (evolutionChain: any): string[] => {
  const evolutionNames: string[] = []

  // go through
  function extractNames(chain: any) {
    // Add first evolution
    evolutionNames.push(chain.species.name)

    // Check for more evolution
    if (chain.evolves_to && chain.evolves_to.length > 0) {
      chain.evolves_to.forEach((evolution: any) => {
        extractNames(evolution)
      })
    }
  }

  extractNames(evolutionChain.chain)

  return evolutionNames
}

export const extractInformations = (pokemon: any) => {
  //get Colors and types
  const pokemonTypesWithColors = pokemon.types.map((pokemonType: any) => {
    const speciesType = POKEMONSPECIES.find((specie) => specie.name === pokemonType.type.name)
    return speciesType
  })

  const finalResult = { ...pokemon, types: pokemonTypesWithColors }
  const { abilities, id, name, stats, types } = finalResult
  return { abilities, id, name, stats, types }
}
