<template>
  <div>
    <div class="content">
      <div class="content-inside">
        <div class="container">
          <div class="row gx-5 border">
            <h4 class="order-summary-title">
              Order summary <a class="order-summary-edit" href="/shopping-cart/">(edit)</a>
            </h4>
            <app-cartItem
              v-for="product in products"
              :key="product.id"
              :product="product"
            ></app-cartItem>

            <hr />
            <div class="checkout-div">
              <div class="checkout-button-div"></div>
              <div class="total-div">
                <h4>
                  {{ ((totalPrice * 100) / 100).toFixed(2) }}
                  {{ this.$store.state.exchangeCurrencySym }}
                </h4>
                <p>
                  Includes 19% VAT ({{ ((totalVat * 100) / 100).toFixed(2) }}
                  {{ this.$store.state.exchangeCurrencySym }})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row gx-5 border">
          <div class="col-md-6">
            <h4>Billing details</h4>
            <hr />
            <p>Email address: {{ $store.state.userData.email }}</p>
            <p>Country: {{ $store.state.userData.country }}</p>
            <p v-if="!this.$store.state.isPersonal">
              Address: {{ $store.state.userData.address }}
            </p>
            <p v-if="!this.$store.state.isPersonal">
              City: {{ $store.state.userData.city }}
            </p>
            <p v-if="!this.$store.state.isPersonal">
              Zip / Postal code: {{ $store.state.userData.zipCode }}
            </p>
            <p v-if="!this.$store.state.isPersonal">
              Company: {{ $store.state.userData.company }}
            </p>
            <p v-if="!this.$store.state.isPersonal">
              VAT ID: {{ $store.state.userData.vatId }}
            </p>
            <p v-if="!this.$store.state.isPersonal">
              Phone: {{ $store.state.userData.phoneNum }}
            </p>
          </div>
          <div class="col-md-6">
            <h4>Card details</h4>
            <hr />
            <p>Payment method: {{ $store.state.cardData.paymentMethod }}</p>
            <p>Card number: {{ $store.state.cardData.cardNum }}</p>
            <p>Expiration date: {{ $store.state.cardData.expirationDate }}</p>
            <p>Security code: {{ $store.state.cardData.securityCode }}</p>
            <p>Name on card: {{ $store.state.cardData.cardName }}</p>
          </div>
          <hr />
          <p v-if="this.$store.state.userData.subscribe">
            By placing this order, you are subscribing to our weekly newsletter!
          </p>
          <div class="place-order-div">
            <router-link to="/shopping-cart/finish">
              <button class="btn btn-success place-order-button">
                Place order
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import CartItem from "../CartItem.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions(["fetchUserOrder"])
  },

  components: {
    "app-cartItem": CartItem
  },

  computed: {
    products() {
      return this.$store.state.cart.products;
    },

    totalPrice() {
      return this.$store.state.totalPrice;
    },

    totalVat() {
      return this.$store.state.totalVat;
    }
  }
};
</script>

<style scoped>
.content {
  text-align: center;
}
.order-summary-title {
  text-align: left;
  font-weight: 600;
}

.order-summary-edit {
  color: #0151ff;
  font-size: 20px;
  font-weight: 500;
}
.row {
  background-color: white;
  border-radius: 10px;
}
.coupon-button {
  float: left;
  color: grey;
  padding: 0;
  border: none;
  background: none;
  margin-top: 20px;
}

.total-div {
  text-align: end;
}

.routes-container {
  display: flex;
  justify-content: space-around;
  margin-top: -10px;
  margin-bottom: -20px;
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

.place-order-button {
  width: 20rem;
  background-color: #11ca79;
  border-color: transparent;
  box-shadow: 0 6px 8px 0 rgb(17 202 121 / 25%);
}
.place-order-button:hover {
  background-color: #10ad69;
}
</style>
