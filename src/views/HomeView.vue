<script setup lang="ts">
import BaseTemplate from '@/components/layout/BaseTemplate.vue'
import DescriptionCard from '@/components/cards/DescriptionCard.vue'
import PokemonListCards from '@/components/cards/PokemonListCards.vue'
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<template>
  <BaseTemplate>
    <div class="flex flex-col gap-5 sm:flex-row bg-red-700 py-5 px-3 rounded-lg">
      <div class="bg-red-600 flex-1">
        <div class="ml-9 mt-4 bg-cyan-400 rounded-full w-12 h-12 border-4 border-zinc-200"></div>
        <DescriptionCard />
      </div>
      <div class="bg-green-100">
        <PokemonListCards />
      </div>
    </div>
  </BaseTemplate>
</template>
