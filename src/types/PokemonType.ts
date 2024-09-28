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
  name: string
  color: string
  icon?: string
}
