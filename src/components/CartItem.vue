<template>
  <div class="container">
    <div class="row gx-0">
      <div class="col-md-6">
        <div class="product-container">
          <img :src="prodImg" />
          <h4>{{ product.name }}</h4>
          <p class="product-description" v-if="this.$route.path === '/shopping-cart/'">
            {{ product.description }}
          </p>
          <a
            class="volume-discounts-link"
            @click="modal = true"
            v-if="this.$route.path === '/shopping-cart/'"
            >Volume discounts</a
          >

          <transition name="modal" v-if="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-header">
                    <slot name="header">Volume Discounts</slot>
                  </div>

                  <div class="modal-body">
                    <slot name="body">
                      <div class="row modal-row">
                        <div class="col-lg-12">
                          <h5>
                            We offer volume discount prices for this product, as
                            displayed below.
                          </h5>
                        </div>
                        <div class="col-lg-12">
                          <table class="table table-hover table-condensed">
                            <thead>
                              <tr>
                                <th>Quantity</th>
                                <th>Unit price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>5-9</td>
                                <td>
                                  {{ product.price * 5 }}
                                  {{ $store.state.exchangeCurrencySym }}
                                </td>
                              </tr>
                              <tr>
                                <td>10-49</td>
                                <td>
                                  {{ product.price * 35 }}
                                  {{ $store.state.exchangeCurrencySym }}
                                </td>
                              </tr>
                              <tr>
                                <td>50-249</td>
                                <td>
                                  {{ product.price * 125 }}
                                  {{ $store.state.exchangeCurrencySym }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </slot>
                  </div>

                  <div class="modal-footer">
                    <slot name="footer">
                      <button
                        class="btn btn-light modal-button"
                        @click="modal = false"
                      >
                        Close
                      </button>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="product_price col-md-6">
        <div class="item-counter">
          <button
            class="btn btn-light"
            @click="decrementButton"
            v-if="this.$route.path == '/shopping-cart/'"
          >
            -
          </button>
          <input
            class=""
            type="text"
            :value="product.quantity"
            v-if="this.$route.path == '/shopping-cart/'"
          />
          <span v-if="this.$route.path == '/shopping-cart/review'"
            >Quantity: {{ product.quantity }}</span
          >
          <button
            class="btn btn-light"
            @click="incrementButton"
            v-if="this.$route.path == '/shopping-cart/'"
          >
            +
          </button>
        </div>
        <div class="subtotal">
          <span class="price-bold">
            {{
              (
                product.price *
                product.quantity *
                this.$store.state.exchangeRate
              ).toFixed(2)
            }}
            {{ this.$store.state.exchangeCurrencySym }}</span
          >
          <button
            class="btn btn-danger"
            v-on:click="removeButton"
            v-if="this.$route.path == '/shopping-cart/'"
          >
            <img :src="trashIcon" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { store } from "../store/store";

import prodImg from "../public/copy_2_VL_maintenance.jpg";
import trashIcon from "../public/icons8-trash-24.png";

export default {
  data() {
    return {
      modal: false,
      prodImg: prodImg,
      trashIcon: trashIcon,
    };
  },
  components: {},
  props: ["product"],
  methods: {
    ...mapMutations(["removeItem"]),

    ...mapActions(["fetchUserOrder"]),

    incrementButton() {
      let vat = ((19 / 100) * (this.product.price * 1 * 100)) / 100;
      this.product.quantity++;
      this.$store.state.totalVat +=
        ((19 / 100) * (this.product.price * 100)) / 100;
      this.$store.state.subtotal += this.product.price;
      this.$store.state.totalPrice += this.product.price + vat;
    },

    decrementButton() {
      if (this.product.quantity > 1) {
        let vat = ((19 / 100) * (this.product.price * 1 * 100)) / 100;
        this.product.quantity--;
        this.$store.state.totalVat -=
        ((19 / 100) * (this.product.price * 100)) / 100;
        this.$store.state.subtotal -= this.product.price;
        this.$store.state.totalPrice -= this.product.price + vat;
      }
    },

    removeButton() {
      let i = this.product.id;

      for (var y = 0; y <= store.state.cart.products.length; y++) {
        if (store.state.cart.products[y].id == i) {
          store.state.cart.products.splice(y, 1);
          let vat =
            ((19 / 100) * (this.product.price * this.product.quantity * 100)) /
            100;
          store.state.totalPrice -=
            this.product.price * this.product.quantity + vat;
          store.state.totalVat -= vat;
          return;
        }
      }
    }
  }
};
</script>

<style scoped>
h4 {
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}

h4,
p {
  text-align: left;
}

img {
  float: left;
  max-height: 150px;
  max-width: 100px;
}

.product-description {
  word-break: break-word;
  line-height: 21px;
  font-size: 13px;
}

.item-counter {
  float: left;
}

input {
  max-width: 50px;
  text-align: center;
}

.subtotal {
  float: right;
  font-weight: 600;
}

@media only screen and (max-width: 995px) {
  .subtotal {
    display: contents;
  }
}

a {
  color: #3474ff;
}

.volume-discounts-link {
  color: #3474ff;
  text-decoration: none;
  cursor: pointer;
}
/* Modal styling */
.modal-mask {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 30rem;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  margin-top: 0;
  background-color: #3474ff;
  padding: 10px 20px;
  border-radius: 3px 3px 0 0;
  border-bottom: 0 solid #e5e5e5;
  color: white;
}

.modal-body {
  margin: 20px 0;
}

.modal-row {
  margin-left: 0;
}

.modal-default-button {
  float: right;
}

.modal-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (max-width: 767px) {
  .product_price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-container {
    width: 90%;
  }
}
</style>
