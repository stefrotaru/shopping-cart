<template>
  <div class="container">
    <div class="row gx-5">
      <div class="col-md-6">
        <div class="product-container">
          <img
            src="https://store.nero.com/images/merchant/9cea886b9f44a3c2df1163730ab64994/products/copy_2_VL_maintenance.jpg"
          />
          <h4>{{ product.name }}</h4>
          <p class="product-description" v-if="this.$route.path == '/'">{{ product.description }}</p>
          <a class="volume-discounts-link" 
             @click="modal = true" 
             v-if="this.$route.path == '/'"
             >Volume discounts</a>

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
                            <h5>1 Year Maintenance Nero Backitup Volume License - autorenewal</h5>
                            <h6>We offer volume discount prices for this product, as displayed below.</h6>
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
                                  <td>$$$</td>
                                </tr>
                                <tr>
                                  <td>10-49</td>
                                  <td>$$$</td>
                                </tr>
                                <tr>
                                  <td>50-249</td>
                                  <td>$$$</td>
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
      <div class="col-md-6">
        <div class="item-counter">
          <button
            class="btn btn-light"
            @click="decrementButton"
            v-if="this.$route.path == '/'"
          >
            -
          </button>
          <input
            class=""
            type="text"
            :value="product.quantity"
            v-if="this.$route.path == '/'"
          />
          <span v-if="this.$route.path == '/review'"
            >Quantity: {{ product.quantity }}</span
          >
          <button
            class="btn btn-light"
            @click="incrementButton"
            v-if="this.$route.path == '/'"
          >
            +
          </button>
        </div>
        <div class="subtotal">
          <span class="price-bold">
            {{ Math.round(product.price * product.quantity * 100) / 100 }}
            {{this.$store.state.exchangeCurrencySym}}</span
          >
          <button
            class="btn btn-danger"
            v-on:click="removeButton"
            v-if="this.$route.path == '/'"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { store } from "../store/store";

export default {
  data() {
    return {
      modal: false,
    };
  },
  components: {
  },
  props: ["product"],
  methods: {
    ...mapMutations(["removeItem"]),

    ...mapActions(["fetchUserOrder"]),

    incrementButton() {
      let vat = Math.round(((19 / 100) * (this.product.price * 1 * 100)) / 100);
      this.product.quantity++;
      this.$store.state.totalPrice += this.product.price + vat;
      this.$store.state.totalVat += Math.round(
        ((19 / 100) * (this.product.price * 100)) / 100
      );
    },

    decrementButton() {
      if (this.product.quantity > 1) {
        let vat = Math.round(
          ((19 / 100) * (this.product.price * 1 * 100)) / 100
        );
        this.product.quantity--;
        this.$store.state.totalPrice -= this.product.price + vat;
        this.$store.state.totalVat -= Math.round(
          ((19 / 100) * (this.product.price * 100)) / 100
        );
      }
    },

    removeButton() {
      let i = this.product.id;

      for (var y = 0; y <= store.state.cart.products.length; y++) {
        if (store.state.cart.products[y].id == i) {
          store.state.cart.products.splice(y, 1);
          let vat = Math.round(
            ((19 / 100) * (this.product.price * this.product.quantity * 100)) /
              100
          );
          store.state.totalPrice -=
            this.product.price * this.product.quantity + vat;
          store.state.totalVat -= vat;
          return;
        }
      }
    },
  },
};
</script>

<style scoped>
.g-5, .gx-5 {
    --bs-gutter-x: 0;
}

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
  color: #3474ff
}

.volume-discounts-link {
  color: #3474ff;
  text-decoration: none;
  cursor: pointer
}
/* Modal styling down here */
.modal-mask {
  position: fixed;
  z-index: 9998;
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
  margin-left: 0
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
</style>