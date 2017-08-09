<template lang="pug">
  .register
    form
      h1.mb-3 Register
      .form-group
        label(for="name") Name
        input#name.form-control(required)
      .form-group
        label(for="email") Email
        input#email.form-control(type="email", required)
      .form-group
        label(for="name") Password
        input#name.form-control(type="password", required)
      .form-group
        label(for="password-confirmation") Password Confirmation
        input#password-confirmation.form-control(type="password", required)
      button.btn.btn-primary(type="submit") Submit
</template>

<script>
  export default {
    layout: 'app'
  }
</script>
