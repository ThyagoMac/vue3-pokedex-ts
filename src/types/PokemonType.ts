export type PokemonType = {
  id: string | number
  name: string
  url: string
  img: string
}

export type PokemonGetTypesType = {
  name: string
  url: string
}

export type PokemonFilterType = {
  limit: number
  offset: number
}

export type PokemnonSpecieType = {
  id: string | number
  name: string
  color: string
  icon?: string
}

export type PokemonSpeciesType = {
  evolution_chain: {
    url: string
  }
}

type AbilityType = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

type StatType = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type TypeType = {
  slot: number
  name?: string
  color?: string
  type: {
    name: string
    url: string
  }
}

export type CurrentPokemonType = {
  abilities: AbilityType[]
  id: number | string
  name: string
  stats: StatType[]
  types?: TypeType[]
  evolutions: string[]
  img: string
}

export type EvolutionChainType = {
  chain: {
    species: {
      name: string
    }
    evolves_to: Array<{
      species: {
        name: string
      }
      evolves_to: Array<{
        species: {
          name: string
        }
        evolves_to: any[] //must be any?
      }>
    }>
  }
}
