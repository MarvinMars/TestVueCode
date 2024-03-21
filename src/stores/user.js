import { defineStore } from 'pinia'
import { getProfile, updateProfile, deleteProfile } from '@/api/profile'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userData: null,
    loading: false,
    errorLoading: null
  }),
  actions: {
    async fetchUserData() {
      try {
        this.loading = true
        this.errorLoading = null
        this.userData = await getProfile()
      } catch (error) {
        console.error('Failed to fetch user data:', error)
        this.errorLoadingUserData = error.message || 'Failed to fetch user data'
      } finally {
        this.loading = false
      }
    },
    async updateUserData(data) {
      try {
        this.loading = true
        this.errorLoading = null
        this.userData = await updateProfile(data)

        return true
      } catch (error) {
        console.error('Failed to fetch user data:', error)
        this.errorLoading = error.message || 'Failed to update user data'
      } finally {
        this.loading = false
      }
    },
    async deleteUserData() {
      try {
        this.loading = true
        this.errorLoading = null
        this.userData = await deleteProfile()

        return true
      } catch (error) {
        console.error('Failed to fetch user data:', error)
        this.errorLoading = error.message || 'Failed to delete user data'
      } finally {
        this.loading = false
      }
    }
  }
})
