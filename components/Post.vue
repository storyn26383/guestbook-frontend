<template lang="pug">
  .post
    p.card-text.small.text-muted.float-right
      | {{ moment(post.created_at).format('YYYY-MM-DD hh:mm:ss') }} by {{ post.user.name }}
    p.card-text(v-html="post.content.replace(/\\n/g, '<br>')")
    hr
    post.ml-4(:key="reply.id", :post="reply", v-for="reply in post.children")
    editor.mb-3(placeholder="Write a comment...", :post="post")
</template>

<script>
  import moment from 'moment'
  import Editor from '~/components/Editor'

  export default {
    name: 'post',
    components: { Editor },
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
      moment (datetime) {
        return moment(datetime)
      }
    }
  }
</script>
