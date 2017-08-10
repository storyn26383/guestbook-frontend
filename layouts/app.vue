<template lang="pug">
  .app
    .navbar.navbar-inverse.bg-inverse.fixed-top.bg-faded.navbar-toggleable-xl
      nuxt-link.navbar-brand(to="/") Vue.js Workshop #3
      ul.navbar-nav.mr-auto
        li.nav-item(v-if="!$store.state.user.guest")
          nuxt-link.nav-link(to="/guestbook") Guestbook
      ul.navbar-nav
        li.nav-item(v-if="$store.state.user.guest")
          nuxt-link.nav-link(to="/register") Register
        li.nav-item(v-if="$store.state.user.guest")
          nuxt-link.nav-link(to="/login") Login
        li.nav-item(v-if="!$store.state.user.guest")
          nuxt-link.nav-link(to="/logout") Logout
    .container
      nuxt
</template>

<style lang="scss">
  .app {
    padding-top: 80px;
    padding-bottom: 20px;
  }
</style>
