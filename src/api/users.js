const API_URL = import.meta.env.VITE_API_URL

export async function getUsers() {
  try {
    const response = await fetch(`${API_URL}/users`, {
      headers: getHeaders()
    })

    return response.json()
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    throw error
  }
}
export async function getUser(id) {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      headers: getHeaders()
    })

    return response.json()
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    throw error
  }
}

function getHeaders() {
  return {
    'Content-type': 'application/json; charset=UTF-8'
  }
}
