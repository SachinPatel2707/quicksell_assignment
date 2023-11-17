import axios from 'axios'

const BASE_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment' 

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const get = async (endpoint) => {
  try {
    const response = await apiService.get(endpoint)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const post = async (endpoint, data) => {
  try {
    const response = await apiService.post(endpoint, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
