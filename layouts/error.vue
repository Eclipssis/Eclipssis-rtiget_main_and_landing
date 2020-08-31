<template>
  <div class="container error-page">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
  export default {
    layout: 'blog',

    data() {
      return {
        error: {
          statusCode: 404
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.error-page {
  min-height: 80vh;
  padding-top: 200px;
  text-align: center;
}
</style>