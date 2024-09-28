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
        <div
          class="ml-9 mt-4 bg-cyan-400 rounded-full w-12 h-12 border-4 border-zinc-200 led-blue-flicker"
        ></div>
        <DescriptionCard />
      </div>
      <div class="bg-green-100">
        <PokemonListCards />
      </div>
    </div>
  </BaseTemplate>
</template>

<style>
.led-blue-flicker {
  animation: flicker 1.5s infinite alternate;
}

/* Flickering animation */
@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    box-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 20px #22d3ee,
      0 0 40px #22d3ee,
      0 0 40px #22d3ee,
      0 0 45px #22d3ee,
      0 0 10px #22d3ee;
  }

  20%,
  24%,
  55% {
    box-shadow: none;
  }
}
</style>
