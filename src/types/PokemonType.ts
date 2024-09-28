export type PokemonType = {
  id: string | number
  name: string
  description: string
  url: string
}

export type PokemonListType = PokemonType[]

export type PokemonFilterType = {
  limit: number
  offset: number
}
