<script setup lang="ts">
import BaseTemplate from '@/components/layout/BaseTemplate.vue'
import DescriptionCard from '@/components/cards/DescriptionCard.vue'
import PokemonListCards from '@/components/cards/PokemonListCards.vue'
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<template>
  <BaseTemplate>
    <div class="flex flex-col gap-5 sm:flex-row">
      <div class="bg-red-100 flex-1">
        <DescriptionCard />
      </div>
      <div class="bg-green-100">
        <PokemonListCards />
      </div>
    </div>
  </BaseTemplate>
</template>
