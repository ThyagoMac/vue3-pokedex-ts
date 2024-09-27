import axios from 'axios'

export const pokeApi = axios.create({
  baseURL: import.meta.env.VITE_POKEMON_API_URL,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})
