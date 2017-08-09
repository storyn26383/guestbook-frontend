<template lang="pug">
  .index
    logo
    .title
      h1.display-4.ml-3 Vue.js Workshop
      h3 - #3 -
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'app',
  components: {
    Logo
  }
}
</script>

<style lang="scss">
  .index {
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
</style>
