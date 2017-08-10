import axios from 'axios'
import Cookie from 'js-cookie'

export default async ({ isServer, store, req }) => {
  let token

  if (isServer) {
    let cookies = {}
    let cookie = req.headers.cookie || ''

    cookie.split(';').map(cookie => cookie.trim().split('=')).forEach(([key, value]) => {
      cookies[key] = value
    })

    token = cookies.api_token
  } else {
    token = Cookie.get('api_token')
  }

  if (token) {
    try {
      axios.defaults.headers.common['API_TOKEN'] = token

      let { data } = await axios.get('http://localhost:8000/api/me')

      store.commit('user/set', data)
    } catch (e) {
      store.commit('user/unset')
    }
  }
}
