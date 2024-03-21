import { useAuthStore } from '@/stores/auth'

const API_URL = import.meta.env.VITE_API_URL

export async function getProfile() {
  try {
    const response = await fetch(`${API_URL}/users/1/`, {
      headers: getHeaders()
    })

    if (response.status === 401) {
      useAuthStore().logout()
      return null
    }

    return response.json()
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    throw error
  }
}

export async function updateProfile(data) {
  try {
    const response = await fetch(`${API_URL}/users/1/`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(data)
    })

    if (response.status === 401) {
      useAuthStore().logout()
      return null
    }

    return response.json()
  } catch (error) {
    console.error('Failed to update user data:', error)
    throw error
  }
}

export async function deleteProfile() {
  try {
    const response = await fetch(`${API_URL}/users/1/`, {
      method: 'DELETE',
      headers: getHeaders()
    })

    if (response.status === 401) {
      useAuthStore().logout()
      return null
    }

    return response.json()
  } catch (error) {
    console.error('Failed to delete user:', error)
    throw error
  }
}

function getHeaders() {
  const { token } = useAuthStore()
  return {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json; charset=UTF-8'
  }
}
