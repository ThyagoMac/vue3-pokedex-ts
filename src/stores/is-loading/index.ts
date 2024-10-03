import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)
  const isScreenLoading = ref(false)
  const isCurrentPkmLoading = ref(false)

  function loading() {
    isLoading.value = true
  }
  function loaded() {
    isLoading.value = false
  }
  function setIsloading(val: boolean) {
    isLoading.value = val
  }

  function setScreenLoading(val: boolean) {
    isScreenLoading.value = val
  }

  async function setCurrentPkmLoading(val: boolean) {
    isCurrentPkmLoading.value = val
  }

  return {
    isLoading,
    isScreenLoading,
    isCurrentPkmLoading,
    setIsloading,
    loading,
    loaded,
    setScreenLoading,
    setCurrentPkmLoading
  }
})
