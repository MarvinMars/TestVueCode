<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getUser } from '@/api/users.js'

const route = useRoute()

const loading = ref(false)
const user = ref(null)
const error = ref(null)

watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData(id) {
  error.value = user.value = null
  loading.value = true

  try {
    user.value = await getUser(id)
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}

function getGeoLink({ geo }) {
  const { lat, lng } = geo
  return `https://maps.google.com/?q=${lat},${lng}`
}
</script>

<template>
  <div
    v-if="user"
    class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
  >
    <div class="rounded-t-lg h-32 overflow-hidden">
      <img
        class="object-cover object-top w-full"
        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt="Mountain"
      />
    </div>
    <div
      class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
    >
      <img
        class="object-cover object-center h-32"
        :src="`https://i.pravatar.cc/100?id=${user.id}`"
      />
    </div>
    <div class="text-center mt-2">
      <h2 class="font-semibold">{{ user.name }}</h2>
      <p class="text-gray-500">{{ user.email }}</p>
    </div>
    <div class="p-4 border-t mx-8 mt-2">
      <a
        target="_blank"
        :href="getGeoLink(user.address)"
        class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
        >Geolocation</a
      >
    </div>
  </div>
</template>

<style scoped></style>
