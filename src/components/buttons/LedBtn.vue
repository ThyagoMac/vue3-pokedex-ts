<script setup lang="ts">
type Props = {
  color?: string
  size?: string
  flicker?: boolean
}

const { size, color, flicker } = withDefaults(defineProps<Props>(), {
  color: 'cyan',
  flicker: false,
  size: '12'
})
</script>
<template>
  <div
    :class="`
      bg-${color}-400
      rounded-full
      w-${size}
      h-${size}
      border-4
    border-zinc-200
      ${flicker ? 'led-flicker' : ''}
    `"
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
