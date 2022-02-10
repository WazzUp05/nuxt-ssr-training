<template>
  <div>
    <h1>Обвертка для страниц users</h1>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'UsersTemplate',
  middleware: ['checkAuth'],
  created() {
    this.$log()
  },
}
</script>

<style></style>
