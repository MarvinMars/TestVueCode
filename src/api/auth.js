export async function login(email, password) {
  try {
    console.log('Fetch for login ', email, password)
    return Math.random().toString(36).substr(2)
  } catch (error) {
    console.error('Login failed:', error)
    return false
  }
}

export async function logout() {
  try {
    console.log('Fetch for logout')
    return true
  } catch (error) {
    console.error('Login failed:', error)
    return false
  }
}
