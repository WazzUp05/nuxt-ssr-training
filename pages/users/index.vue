<template>
  <div>
    <h2>Пользователи</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
      users,
    }
  },
  name: 'UsersPage',
  data() {
    return {
      users: [],
    }
  },
}
</script>

<style></style>
