<template>
  <div class="navbar-container">
    <nav class="navbar sticky-top bg-white">
      <img id="header-logo" src="../assets/nero.png" alt="" />
      <div class="header-selectors-total-group">
        <div class="currency-dropdown">
          <input
            class="header-dropdown"
            list="currencies"
            name="language-dropdown"
            placeholder="RON"
            v-model="currency"
            @input="setExchangeCurrency(currency)"
          />
          <datalist id="currencies">
            <option value="RON"></option>
            <option value="USD"></option>
            <option value="EUR"></option>
            <option value="CAD"></option>
            <option value="HUF"></option>
          </datalist>
        </div>
        <div class="language-dropdown">
          <input
            class="header-dropdown"
            list="languages"
            name="language-dropdown"
            placeholder="English"
          />
          <datalist id="languages">
            <option v-for="language in languages" :key="language.name">
              {{ language.name }}
            </option>
          </datalist>
        </div>

        <span class="navbar-brand navbar-price" href="#!"
          >{{ Math.round(totalPrice * 100) / 100 }} {{this.$store.state.exchangeCurrencySym}}</span
        >
      </div>
    </nav>
  </div>
</template>

<script>
import Languages from "../Languages.json";
import { mapActions, mapMutations } from "vuex";
import currencySymbols from "../currencySymbols.json";

export default {
  data() {
    return {
      languages: Languages,
      currency: 'RON',
      symbols: currencySymbols,
      currentSymbol: 'RON'
    };
  },
  methods: {
    ...mapActions(["fetchCurrencyParams"]),
    ...mapMutations(["setExchangeCurrency", "setExchangeCurrencySym"])
  },
  computed: {
    products() {
      return this.$store.state.cart.products;
    },

    totalPrice() {
      return this.$store.state.totalPrice;
    },
  },
  watch: {
    currency: function() {
      for (var i=0; i < this.symbols.length; i++) {
        if (this.symbols[i].name == this.currency) {
          this.currentSymbol = this.symbols[i].value;
          this.setExchangeCurrencySym(this.currentSymbol)
        }
      }
    },
  },
  created() {
    this.fetchCurrencyParams();
  },
};
</script>

<style scoped>
.navbar-container {
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 10px -3px grey;
}

.navbar {
  width: 57%;
  margin: auto;
}

.navbar-price {
  margin-left: 10px;
}
.app_footer {
  height: 50px;
  margin-top: -50px;
}

#header-logo {
  float: left;
  margin: 10px !important;
}

.header-selectors-total-group {
  display: flex;
}

.header-dropdown {
  border: 2px solid grey;
  border-radius: 5px;
  margin: 5px;
  width: 5rem;
  padding: 0 0 0 8px;
}

@media screen and (max-width: 720px) {
  .navbar {
    width: 100%;
  }

  .navbar-price {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>