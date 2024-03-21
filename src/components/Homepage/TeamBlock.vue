<script setup>
import TeamItem from '@/components/Partial/TeamItem.vue'
import { ref, onMounted } from 'vue'
import { getUsers } from '@/api/users.js'

const loading = ref(false)
const users = ref(null)
const error = ref(null)

async function fetchData() {
  error.value = users.value = null
  loading.value = true

  try {
    users.value = await getUsers()
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Users list</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae
          ullamcorper suspendisse.
        </p>
      </div>
      <div class="col-span-3" v-if="loading">Loading...</div>
      <ul v-else role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="user in users" :key="user.id">
          <TeamItem :id="user.id" :name="user.name" :website="user.website" />
        </li>
      </ul>
    </div>
  </div>
</template>
