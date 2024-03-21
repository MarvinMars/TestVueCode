<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const mobileMenuOpen = ref(false)
const logoutHandler = async () => {
  const isLogout = authStore.logout()
  if (isLogout) {
    await router.push({ name: 'Home' })
  }
}
</script>

<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1"></div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Home</RouterLink>
        <RouterLink
          to="/game"
          class="text-sm font-semibold leading-6 text-gray-900"
          v-show="authStore.isAuthenticated"
          >Game</RouterLink
        >
        <RouterLink
          to="/profile"
          class="text-sm font-semibold leading-6 text-gray-900"
          v-show="authStore.isAuthenticated"
          >Profile</RouterLink
        >
        <button
          @click="logoutHandler"
          class="text-sm font-semibold leading-6 text-gray-900"
          v-show="authStore.isAuthenticated"
        >
          Logout
        </button>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink
          to="/login"
          class="text-sm font-semibold leading-6 text-gray-900"
          v-show="!authStore.isAuthenticated"
          >Login <span aria-hidden="true">&rarr;</span></RouterLink
        >
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Home</RouterLink
              >
              <RouterLink
                to="/game"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                v-show="authStore.isAuthenticated"
                >Game</RouterLink
              >
              <RouterLink
                to="/profile"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                v-show="authStore.isAuthenticated"
                >Profile</RouterLink
              >
              <button
                @click="logoutHandler"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                v-show="authStore.isAuthenticated"
              >
                Logout
              </button>
            </div>
            <div class="py-6">
              <RouterLink
                to="/login"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                v-show="!authStore.isAuthenticated"
                >Login <span aria-hidden="true">&rarr;</span></RouterLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped></style>
