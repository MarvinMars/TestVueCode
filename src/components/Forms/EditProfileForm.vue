<script setup>
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import Swal from 'sweetalert2'

const userStore = useUserStore()

const userData = userStore.userData

const email = ref(userData.email || '')
const username = ref(userData.username || '')
const name = ref(userData.name || '')
const phone = ref(userData.phone || '')
const address = ref(userData.address || {})

const handleProfileUpdate = async (e) => {
  e.preventDefault()

  const response = await userStore.updateUserData({
    email: email.value,
    username: username.value,
    name: name.value,
    phone: phone.value,
    address: address.value
  })

  if (response) {
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Changes has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    await router.push({ name: 'Game' })
  }
}
</script>

<template>
  <form @submit="handleProfileUpdate">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
              >Username</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="username"
                name="username"
                id="username"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
              >Last name</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="name"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >Phone</label
            >
            <div class="mt-2">
              <input
                id="phone"
                v-model="phone"
                name="phone"
                type="text"
                autocomplete="phone"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900"
              >Street address</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="address.street"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="mt-2">
              <input
                type="text"
                v-model="address.city"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900"
              >Suite</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="address.suite"
                name="suite"
                id="suite"
                autocomplete="suite"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900"
              >ZIP / Postal code</label
            >
            <div class="mt-2">
              <input
                type="text"
                v-model="address.zipcode"
                name="postal-code"
                id="postal-code"
                autocomplete="postal-code"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        :disabled="userStore.loading"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-25"
      >
        Save
      </button>
    </div>
  </form>
</template>

<style scoped></style>
