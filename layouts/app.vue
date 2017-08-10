<template lang="pug">
  .app
    .navbar.navbar-dark.bg-dark.fixed-top
      nuxt-link.navbar-brand(to="/") Vue.js Workshop #3
      ul.nav.mr-auto
        li.nav-item(v-if="!$store.state.user.guest")
          nuxt-link.nav-link.text-white(to="/guestbook") Guestbook
      ul.nav
        li.nav-item(v-if="$store.state.user.guest")
          nuxt-link.nav-link.text-white(to="/register") Register
        li.nav-item(v-if="$store.state.user.guest")
          nuxt-link.nav-link.text-white(to="/login") Login
        li.nav-item(v-if="!$store.state.user.guest")
          nuxt-link.nav-link.text-white(to="/logout") Logout
    .container
      nuxt
</template>

<script>
  import axios from 'axios'
  import Cookie from 'js-cookie'

  export default {
    created () {
      let token = Cookie.get('api_token')

      if (token) {
        axios.defaults.headers.common['API_TOKEN'] = token
      }
    }
  }
</script>

<style lang="scss">
  .app {
    padding-top: 80px;
    padding-bottom: 20px;
  }
</style>
