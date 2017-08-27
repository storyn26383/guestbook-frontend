<template lang="pug">
  .register
    form(@submit.stop.prevent="submit")
      h1.mb-3 Register
      .alert.alert-danger(v-if="error")
        | {{ error }}
      .form-group
        label(for="name") Name
        input#name.form-control(v-model="form.name", :disabled="loading", required)
      .form-group
        label(for="email") Email
        input#email.form-control(type="email", v-model="form.email", :disabled="loading", required)
      .form-group
        label(for="name") Password
        input#name.form-control(type="password", v-model="form.password", :disabled="loading", required)
      .form-group
        label(for="password-confirmation") Password Confirmation
        input#password-confirmation.form-control(type="password", v-model="form.password_confirmation", :disabled="loading", required)
      button.btn.btn-primary(type="submit", :disabled="loading") Submit
</template>

<script>
  import _ from 'lodash'
  import axios from 'axios'
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
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        }
      }
    },
    methods: {
      async submit () {
        this.loading = true

        try {
          await axios.post('/api/register', {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password
          })

          await this.login(this.form.email, this.form.password)
        } catch (e) {
          this.loading = false

          if (e.response.data.error) {
            this.error = e.response.data.error.message
          } else {
            this.error = _.map(e.response.data, Array.pop).pop()
          }
        }
      }
    }
  }
</script>
