<template>
  <div id="app">
    <app-header class="header"></app-header>

    <br />

    <app-routes-links></app-routes-links>

    <router-view></router-view>

    <app-footer class="mt-auto"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import RoutesLinks from "./components/RoutesLinks.vue";
import Footer from "./components/Footer.vue";

import SecureCheckoutRoute from "./components/secure-checkout-route/SecureCheckoutRoute.vue";

import CartItemList from "./components/CartItemList.vue";
import PaymentForm from "./components/PaymentForm.vue";
import ChoosePayment from "./components/ChoosePayment.vue";
import Subscribe from "./components/Subscribe.vue";
import { store } from "./store/store";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-routes-links": RoutesLinks,
    "app-footer": Footer,

    "app-secure-checkout-route": SecureCheckoutRoute,

    "app-cart-item-list": CartItemList,
    "app-payment-form": PaymentForm,
    "app-choose-payment": ChoosePayment,
    "app-subscribe": Subscribe,
  },
  data() {
    return {};
  },
  computed: {
    cart() {
      return store.state.cart.products;
    },
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2f2f2;
  color: #2c3e50;
  height: 100%;
  margin: 0;
}

h1,
h2 {
  font-weight: normal;
}

.row {
  padding: 15px;
}

.content {
  min-height: 100%;
}
.content-inside {
  padding-bottom: 10px;
}

.header {
  position: sticky;
  top: 0;
}

/* @media screen and (min-width: 800px) {
  #app {
    font-size: 20px;
  }

  .container, .container-md, .container-sm {
    max-width: 100vh;
    padding-left: 0px;
  }
} */

/* @media screen and (min-width: 700px) {
  .container {
    margin-left: -20px;
  }
} */
</style>
