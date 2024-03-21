<script setup>
defineProps({
  id: Number,
  name: String,
  website: String
})
</script>

<template>
  <div class="flex items-center gap-x-6">
    <RouterLink :to="{ name: 'User', params: { id: id } }">
      <img class="h-16 w-16 rounded-full" :src="`https://i.pravatar.cc/50?id=${id}`" alt="" />
    </RouterLink>
    <div>
      <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ name }}</h3>
      <p class="text-sm font-semibold leading-6 text-indigo-600">{{ website }}</p>
    </div>
  </div>
</template>

<style scoped></style>
