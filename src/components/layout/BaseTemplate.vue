<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <Header />
  <main class="flex-1 bg-zinc-100">
    <div class="m-auto w-full h-full max-w-screen-lg p-5">
      <slot />
    </div>
  </main>
  <Footer />
</template>
