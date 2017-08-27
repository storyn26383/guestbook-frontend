<template lang="pug">
  .login.row.justify-content-center
    form.col-4(@submit.stop.prevent="submit")
      h1.mb-3 Login
      .form-group
        label(for="email") Email
        input#email.form-control(type="email", v-model="form.email", :disabled="loading", required)
      .form-group
        label(for="password") Password
        input#password.form-control(type="password", v-model="form.password", :disabled="loading", required)
      button.btn.btn-primary(type="submit", :disabled="loading") Submit
</template>

<script>
  import login from '~/plugins/login'

  export default {
    layout: 'app',
    middleware: ['guest'],
    mixins: [login],
    data () {
      return {
        loading: false,
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      submit () {
        this.loading = true

        this.login(this.form.email, this.form.password)
      }
    }
  }
</script>
