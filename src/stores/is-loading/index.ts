import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)
  const isScreenLoading = ref(false)

  function loading() {
    isLoading.value = true
  }
  function loaded() {
    isLoading.value = false
  }

  function setIsloading(val: boolean) {
    isLoading.value = val
  }

  function screenLoading() {
    isScreenLoading.value = true
  }
  function screenLoaded() {
    isScreenLoading.value = false
  }

  function setScreenLoading(val: boolean) {
    isScreenLoading.value = val
  }

  return {
    isLoading,
    isScreenLoading,
    setIsloading,
    loading,
    loaded,
    screenLoading,
    screenLoaded,
    setScreenLoading
  }
})
