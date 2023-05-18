export function getAllCryptos() {
  return fetch('https://api.coincap.io/v2/assets')
  .then((response) => {
    if(!response.ok && response.status === 500) {
      throw new Error(`${response.status}`)
    } else {
      return response.json()
    }
  })
}