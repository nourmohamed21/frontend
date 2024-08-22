<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <button @click="logout">Logout</button>
    <!-- <PageLoader></PageLoader> -->
  </div>
</template>

<script>

export default {
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>
