import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)
  function loading() {
    isLoading.value = true
  }
  function loaded() {
    isLoading.value = false
  }

  function setIsloading(val: boolean) {
    isLoading.value = val
  }

  return { isLoading, setIsloading, loading, loaded }
})
