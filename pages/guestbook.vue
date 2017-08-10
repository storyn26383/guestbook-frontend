<template lang="pug">
  .guestbook
    h1.mb-3 Guestbook

    .card
      .card-body
        editor

    .card.mt-3(:key="post.id", v-for="post in posts")
      .card-body.pb-1
        post(:post="post")
</template>

<script>
  import { mapGetters } from 'vuex'
  import Post from '~/components/Post'
  import Editor from '~/components/Editor'

  export default {
    layout: 'app',
    middleware: ['auth'],
    components: { Post, Editor },
    created () {
      this.$store.dispatch('post/list')
    },
    computed: {
      ...mapGetters({
        posts: 'post/list'
      })
    }
  }
</script>
