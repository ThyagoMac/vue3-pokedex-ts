<script setup lang="ts">
import type { PokemonType } from '@/types/PokemonType'

const { pokemon } = defineProps<{
  pokemon: PokemonType
}>()
</script>

<template>
  <div>--{{ pokemon.name }}-- {{ pokemon.id }}</div>
</template>
