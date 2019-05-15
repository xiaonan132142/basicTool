let cache = {
  setItem(key, value) {
    let keys = localStorage.getItem('keys')
      ? JSON.parse(localStorage.getItem('keys'))
      : {}
    keys[key] = value
    localStorage.setItem('keys', JSON.stringify(keys))
    localStorage.setItem(key, value)
  },
  getItem(key) {
    return localStorage.getItem(key)
  },
  clearAll() {
    if (localStorage.getItem('keys')) {
      let keys = JSON.parse(localStorage.getItem('keys'))
      for (let key in keys) {
        localStorage.removeItem(key)
      }
    }

    localStorage.removeItem('keys')
  },
}

export default cache
