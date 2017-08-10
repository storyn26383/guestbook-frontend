<template lang="pug">
  .guestbook
    h1.mb-3 Guestbook

    .card
      .card-block
        form
          textarea.form-control(placeholder="Say something...", required)

    .card.mt-3
      .card-block
        .post
          p.card-text.small.text-muted.float-right 1970-01-01 08:00:00 by Someone
          p.card-text Hello World
          hr
        .post
          p.card-text.small.text-muted.float-right 1970-01-01 08:00:00 by Someone
          p.card-text Hello World
          hr
        .post
          p.card-text.small.text-muted.float-right 1970-01-01 08:00:00 by Someone
          p.card-text Hello World
          hr
        form
          textarea.form-control(placeholder="Write a comment...", required)
</template>

<script>
  export default {
    layout: 'app',
    middleware: ['auth']
  }
</script>
