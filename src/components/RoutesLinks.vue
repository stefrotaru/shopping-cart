<template>
  <div class="container routes-container">
    <div class="routes-title">
      <p>{{ returnRoute() }}</p>
    </div>
    <ul class="routes-links">
      <router-link
        class="individual-link nav-link pl-0"
        :class="{ disabled: 1 }"
        to="/shopping-cart/"
        exact
        >Secure checkout</router-link
      >
      <p>></p>
      <router-link
        class="individual-link nav-link pl-0"
        :class="{ disabled: 1 }"
        to="/shopping-cart/review"
        >Review</router-link
      >
      <p>></p>
      <router-link
        class="individual-link nav-link pl-0"
        :class="{ disabled: 1 }"
        to="/shopping-cart/finish"
        >Finish</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    returnRoute() {
      if (this.$route.path == "/shopping-cart/") {
        return "Secure Checkout";
      } else if (this.$route.path == "/shopping-cart/review") {
        return "Review";
      } else if (this.$route.path == "/shopping-cart/finish") {
        return "Finish";
      }
    }
  }
};
</script>

<style scoped>
.routes-container {
  display: flex;
  justify-content: space-around;
}

.routes-title {
  font-weight: 600;
}

.routes-links {
  display: flex;
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

.disabled {
  pointer-events: none;
}

@media screen and (max-width: 720px) {
  .routes-container {
    flex-direction: column;
  }

  .routes-links {
    justify-content: center;
  }
}
</style>
