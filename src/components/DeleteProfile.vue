<script setup>
import NotificationService from '@/services/notificationService'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()
const userStore = useUserStore()
const router = useRouter()

const confirmAction = () => {
  NotificationService.warning(
    "You won't be able to revert this!",
    {
      title: 'Are you sure?',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    },
    deleteProfile
  )
}

const deleteProfile = async (result) => {
  if (result.isConfirmed) {
    const userDeleted = await userStore.deleteUserData()
    if (userDeleted) {
      NotificationService.success('Your file has been deleted.')
      const isLogout = authStore.logout()
      if (isLogout) {
        await router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<template>
  <button
    type="button"
    @click="confirmAction"
    class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visibl:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-25"
  >
    Delete Profile
  </button>
</template>

<style scoped></style>
