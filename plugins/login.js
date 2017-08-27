import axios from 'axios'
import Cookie from 'js-cookie'

export default {
  methods: {
    login (email, password) {
      return new Promise((resolve, reject) => {
        axios.post('api/login', { email, password })
          .then(({ data }) => {
            Cookie.set('api_token', data.api_token)

            this.$router.push('/')
          })
          .catch(e => {
            reject(e)
          })
      })
    }
  }
}
