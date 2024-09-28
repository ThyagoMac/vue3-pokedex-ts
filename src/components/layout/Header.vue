<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const routes = useRouter()
const navigations = routes.getRoutes().map(({ path, name }) => ({ path, name }))
</script>
<template>
  <header class="bg-zinc-200">
    <Disclosure as="nav" class="max-w-screen-lg m-auto" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <RouterLink to="/" class="flex flex-shrink-0 items-center">
              <img class="h-auto w-16" src="@/assets/img/logo.png" alt="logo" />
            </RouterLink>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <RouterLink
                  v-for="(navigation, index) in navigations"
                  :to="navigation.path"
                  :key="index"
                  class="py-2 px-3 w-min rounded-md bg-green-200 hover:bg-green-300 transition-all"
                  activeClass="bg-green-300"
                  exactActiveClass="bg-green-200"
                >
                  {{ navigation.name }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <RouterLink
            v-for="(navigation, index) in navigations"
            :key="index"
            :to="navigation.path"
            class="py-2 px-3 rounded-md bg-red-200 block"
            activeClass="bg-green-300"
            exactActiveClass="bg-green-200"
          >
            {{ navigation.name }}
          </RouterLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>
