<script setup lang="ts">
import type { PokemonType } from '@/types/PokemonType'

const props = defineProps<{
  pokemon: PokemonType
}>()
</script>

<template>
  <div>--{{ props.pokemon.name }}--</div>
</template>
