<template>
</template>

<script>
  import axios from 'axios'
  import Cookie from 'js-cookie'

  export default {
    middleware: ['auth'],
    async fetch ({ store, redirect }) {
      await axios.get('http://localhost:8000/api/logout')

      store.commit('unsetUser')

      Cookie.remove('api_token')

      redirect('/')
    }
  }
</script>
