<template lang="pug">
  .login.row.justify-content-center
    form.col-4
      h1.mb-3 Login
      .form-group
        label(for="email") Email
        input#email.form-control(type="email", required)
      .form-group
        label(for="password") Password
        input#password.form-control(type="password", required)
      button.btn.btn-primary(type="submit") Submit
</template>

<script>
  export default {
    layout: 'app'
  }
</script>
