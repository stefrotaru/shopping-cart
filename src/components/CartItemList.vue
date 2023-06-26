<template>
  <div class="container">
    <div class="row gx-5 border">
      <app-cartItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></app-cartItem>
      <hr />
      <div>
        <div class="total-container">
          <button
            class="coupon-button"
            type="button"
            :class="{ showCouponText: coupon }"
            @click="coupon = !coupon"
          >
            I have a coupon code
          </button>
          <div class="wrapper">
            <div
              class="form-group is-empty"
              :class="{ showCouponInput: !coupon }"
            >
              <label for="coupon" class="control-label">
                <input
                  type="text"
                  id="coupon"
                  name="coupon"
                  class="form-control"
                  v-model="couponCode"
                />
              </label>
              <button
                type="submit"
                class="default-button btn btn-primary"
                @click="
                  coupon = !coupon;
                  setUserCoupon(couponCode);
                "
              >
                Apply code
              </button>
            </div>
          </div>
          <div class="total">
            <h4>
              {{ Math.round(totalPrice * 100) / 100 }}
              {{ this.$store.state.exchangeCurrencySym }}
            </h4>
            <p>
              Includes 19% VAT ({{ Math.round(totalVat * 100) / 100 }}
              {{ this.$store.state.exchangeCurrencySym }})
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      coupon: false,
      couponCode: ""
    };
  },

  methods: {
    ...mapActions(["fetchUserOrder"]),
    ...mapMutations(["setUserCoupon", "setDiscount"]),
    couponToggle() {
      this.coupon = !this.coupon;
    }
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
  },

  watch: {
    couponCode: function() {
      if (this.couponCode == "DISC10") {
        return this.setDiscount(10);
      }
    }
  },

  created() {
    if (this.$store.state.cart.products.length == 0) {
      return this.fetchUserOrder();
    } else {
      return;
    }
  }
};
</script>

<style scoped>
hr {
  opacity: 1;
  color: #adb5bd;
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

.form-group {
  float: left;
  padding-top: 10px;
}

.total-container {
  text-align: end;
}

.total {}

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

.showCouponText {
  display: none;
}
.showCouponInput {
  display: none;
}

@media (max-width: 574px) {
  .coupon-button {
    text-align: start;
  }
  .total-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
