import { ref } from 'vue'
import { defineStore } from 'pinia'
import { setFavoritePokemons } from '@/services/PokemonService'

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteNames = ref<string[]>([])

  function initFavorites(data: string[]) {
    favoriteNames.value = data
  }

  function updateFavorite(name: string) {
    //check is already exist and ADD
    if (!favoriteNames.value.includes(name)) {
      favoriteNames.value.push(name)
      return
    }
    //or REMOVE
    removeFavorite(name)
  }

  function removeFavorite(name: string) {
    favoriteNames.value = favoriteNames.value.filter((favoriteName) => favoriteName !== name)
  }

  /* dispatch */
  async function dispatchUpdateFavorite(name: string) {
    if (!name) {
      return
    }
    console.log('pipi: ', name)
    updateFavorite(name)
    try {
      setFavoritePokemons(favoriteNames.value)

      return {
        success: true,
        results: null
      }
    } catch (error) {
      return {
        success: false,
        status: error,
        results: null
      }
    }
  }

  return {
    favoriteNames,
    initFavorites,
    updateFavorite,
    removeFavorite,
    dispatchUpdateFavorite
  }
})
