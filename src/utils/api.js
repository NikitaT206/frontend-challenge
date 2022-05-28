import { API_KEY, URL } from './constants'

function checkReponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export async function getCats() {
  const res = await fetch(URL + `?limit=100&page=1&order=DESC`, {
    headers: {
      'x-api-key': API_KEY
    }
  })
  return checkReponse(res)
}