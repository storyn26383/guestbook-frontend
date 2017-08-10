import axios from 'axios'
import Cookie from 'js-cookie'

export default {
  methods: {
    async login (email, password) {
      let { data } = await axios.post('api/login', { email, password })

      Cookie.set('api_token', data.api_token)

      this.$router.push('/')
    }
  }
}
