<template lang="pug">
  .login.row.justify-content-center
    form.col-4(@submit.stop.prevent="submit")
      h1.mb-3 Login
      .alert.alert-danger(v-if="error")
        | {{ error }}
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
        error: '',
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async submit () {
        this.loading = true

        try {
          await this.login(this.form.email, this.form.password)
        } catch (e) {
          this.loading = false

          this.error = e.response.data.error.message
        }
      }
    }
  }
</script>
