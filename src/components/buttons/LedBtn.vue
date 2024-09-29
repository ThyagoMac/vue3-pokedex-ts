<script setup lang="ts">
type Props = {
  color?: 'cyan'
  size?: 'sm' | 'md' | 'lg'
  flicker?: boolean
}

const { size, color, flicker } = withDefaults(defineProps<Props>(), {
  color: 'cyan',
  flicker: false,
  size: 'md'
})

const classConfig = {
  //color
  cyan: 'bg-cyan-400',

  //size
  sm: 'w-6 h-6',
  md: 'w-12 h-12',
  lg: 'w-15 h-15'
}
</script>
<template>
  <div
    :class="[
      `rounded-full border-4 border-zinc-200 ${flicker ? 'led-flicker' : ''}`,
      classConfig[color],
      classConfig[size]
    ]"
  ></div>
</template>

<style scoped>
.led-flicker {
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
