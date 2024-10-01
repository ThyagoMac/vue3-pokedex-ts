export type PokemonType = {
  id: string | number
  name: string
  description: string
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

//current pokemon types

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

type TypeType = {
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
  id: number
  name: string
  stats: StatType[]
  types: TypeType[]
  evolutions: string[]
}
