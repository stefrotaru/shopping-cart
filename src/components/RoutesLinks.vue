<template>
  <div class="container routes-container">
    <div class="routes-title">
      <p>{{ returnRoute() }}</p>
    </div>
    <ul class="routes-links">
      <router-link class="individual-link nav-link pl-0" to="/" exact>Secure checkout</router-link>
      <p>></p>
      <router-link class="individual-link nav-link pl-0" to="/review">Review</router-link>
      <p>></p>
      <router-link class="individual-link nav-link pl-0" to="/finish">Finish</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    returnRoute() {
      if (this.$route.path == '/') {
        return 'Secure Checkout'
      } else if (this.$route.path == '/review') {
        return 'Review'
      } else if (this.$route.path == '/finish') {
        return 'Finish'
      }
    }
  }
};
</script>

<style scoped>
.routes-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: -25px;
}

.routes-title {
  font-weight: 600;
}

.routes-links {
  display: flex;
  justify-content: space-around;
}

.individual-link {
  padding-left: 10px;
  padding-right: 10px;
  font-style: none;
}

a {
  color: black;
  text-decoration: none;
}
.list-items {
  font-style: none;
}
.router-link-active {
  color: #0151ff;
}
</style>