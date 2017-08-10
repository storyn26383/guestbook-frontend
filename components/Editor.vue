<template lang="pug">
  form(@submit.stop.prevent="")
    textarea.form-control(@keydown.enter="enter", :placeholder="placeholder", v-model="content", :disabled="loading", required)
</template>

<script>
  export default {
    layout: 'app',
    middleware: ['auth'],
    data () {
      return {
        loading: false,
        content: ''
      }
    },
    props: {
      placeholder: {
        type: String,
        default: 'Say something...'
      },
      post: Object
    },
    methods: {
      enter (e) {
        if (e.shiftKey) {
          return
        }

        e.preventDefault()

        if (!this.content) {
          return
        }

        this.submit()
      },
      async submit () {
        this.loading = true

        switch (!!this.post) {
          case true:
            await this.$store.dispatch('post/reply', {
              parent: this.post,
              content: this.content
            })

            break

          case false:
            await this.$store.dispatch('post/post', this.content)

            break
        }

        this.content = ''
        this.loading = false
      }
    }
  }
</script>
