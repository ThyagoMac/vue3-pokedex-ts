<script setup lang="ts">
import BaseTemplate from '@/components/layout/BaseTemplate.vue'
import DescriptionCard from '@/components/cards/DescriptionCard.vue'
import PokemonListCards from '@/components/cards/PokemonListCards.vue'
import { onMounted } from 'vue'
import LedBtn from '@/components/buttons/LedBtn.vue'

onMounted(() => {})
</script>

<template>
  <BaseTemplate>
    <div class="flex flex-col gap-5 sm:flex-row bg-red-700 py-5 px-3 rounded-lg">
      <div class="bg-red-600 flex-1">
        <LedBtn class="ml-9 mt-4" size="12" color="cyan" :flicker="true" />
        <DescriptionCard />
      </div>
      <div class="bg-green-100">
        <PokemonListCards />
      </div>
    </div>
  </BaseTemplate>
</template>
