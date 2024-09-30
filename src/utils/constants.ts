import type { PokemnonSpecieType } from '@/types/PokemonType'

export const POKEMONSPECIES: PokemnonSpecieType[] = [
  {
    name: 'normal',
    color: 'bg-zinc-400'
  },
  {
    name: 'fighting',
    color: 'bg-stone-500'
  },
  {
    name: 'flying',
    color: 'bg-purple-300'
  },
  {
    name: 'poison',
    color: 'bg-purple-600'
  },
  {
    name: 'ground',
    color: 'bg-yellow-700 text-zinc-200'
  },
  {
    name: 'rock',
    color: 'bg-stone-600 text-zinc-200'
  },
  {
    name: 'bug',
    color: 'bg-emerald-300'
  },
  {
    name: 'ghost',
    color: 'bg-blue-700 text-zinc-200'
  },
  {
    name: 'steel',
    color: 'bg-zinc-300'
  },
  {
    name: 'fire',
    color: 'bg-red-500'
  },
  {
    name: 'water',
    color: 'bg-blue-400'
  },
  {
    name: 'grass',
    color: 'bg-green-400'
  },
  {
    name: 'electric',
    color: 'bg-yellow-400'
  },
  {
    name: 'psychic',
    color: 'bg-pink-400'
  },
  {
    name: 'ice',
    color: 'bg-cyan-400'
  },
  {
    name: 'dragon',
    color: 'bg-purple-700 text-zinc-200'
  },
  {
    name: 'dark',
    color: 'bg-stone-700 text-zinc-200'
  },
  {
    name: 'fairy',
    color: 'bg-pink-200'
  },
  {
    name: 'stellar',
    color: 'bg-yellow-300'
  },
  {
    name: 'unknown',
    color: 'bg-zinc-300'
  }
]

//other mocks
export const bulbasaur = {
  abilities: [
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/'
      },
      is_hidden: false,
      slot: 1
    },
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/'
      },
      is_hidden: true,
      slot: 3
    }
  ],
  base_experience: 64,
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  name: 'bulbasaur',
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/'
      }
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/'
      }
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/'
      }
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/'
      }
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/'
      }
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/'
      }
    }
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/'
      }
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/'
      }
    }
  ],
  weight: 69
}

export const evolutionChain = {
  baby_trigger_item: null,
  chain: {
    evolution_details: [],
    evolves_to: [
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: null,
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: 16,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/evolution-trigger/1/'
            },
            turn_upside_down: false
          }
        ],
        evolves_to: [
          {
            evolution_details: [
              {
                gender: null,
                held_item: null,
                item: null,
                known_move: null,
                known_move_type: null,
                location: null,
                min_affection: null,
                min_beauty: null,
                min_happiness: null,
                min_level: 32,
                needs_overworld_rain: false,
                party_species: null,
                party_type: null,
                relative_physical_stats: null,
                time_of_day: '',
                trade_species: null,
                trigger: {
                  name: 'level-up',
                  url: 'https://pokeapi.co/api/v2/evolution-trigger/1/'
                },
                turn_upside_down: false
              }
            ],
            evolves_to: [],
            is_baby: false,
            species: {
              name: 'venusaur',
              url: 'https://pokeapi.co/api/v2/pokemon-species/3/'
            }
          }
        ],
        is_baby: false,
        species: {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/2/'
        }
      }
    ],
    is_baby: false,
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
    }
  },
  id: 1
}
