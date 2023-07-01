<template>
  <div class="header-container">
    <nav class="navbar sticky-top bg-white">
      <img id="header-logo" src="../public/header-logo.png" alt="" />
      <div class="header-selectors-total-group">
        <div class="currency-dropdown">
          <select
            id="currencies"
            class="header-dropdown"
            name="currency-dropdown"
            v-model="currency"
            @change="
              setExchangeCurrency(currency);
              changeSym();
              setCurrencyAsync(currency);
            "
          >
            <option value="RON">RON</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="HUF">HUF</option>
          </select>
        </div>
        <div class="language-dropdown">
          <select
            id="languages"
            class="header-dropdown"
            list="languages"
            name="language-dropdown"
            v-model="selectedLanguage"
          >
            <option v-for="language in languages" :key="language.name">
              {{ language.name }}
            </option>
          </select>
        </div>

        <span class="navbar-brand navbar-price" href="#!"
          >{{ ((totalPrice * 100) / 100).toFixed(2) }}
          {{ this.$store.state.exchangeCurrencySym }}</span
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
      currency: "RON",
      symbols: currencySymbols,
      currentSymbol: "RON",
      selectedLanguage: "English"
    };
  },
  methods: {
    ...mapActions(["fetchCurrencyParams", "setCurrencyAsync"]),
    ...mapMutations(["setExchangeCurrency", "setExchangeCurrencySym"]),
    changeSym() {
      for (var i = 0; i < this.symbols.length; i++) {
        if (this.symbols[i].name == this.currency) {
          this.currentSymbol = this.symbols[i].value;
          this.setExchangeCurrencySym(this.currentSymbol);
        }
      }
    }
  },
  computed: {
    products() {
      return this.$store.state.cart.products;
    },

    totalPrice() {
      return this.$store.state.totalPrice;
    }
  },
  watch: {
    currentSymbol: function() {
      this.fetchCurrencyParams();
    }
  },
  created() {
    // this.fetchCurrencyParams(this.$store.state);
  }
};
</script>

<style scoped>
.header-container {
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 10px -3px grey;
}

.navbar {
  margin: 0 2em;
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
  height: 50px;
  width: auto;
}

.header-selectors-total-group {
  display: flex;
}

.header-dropdown {
  border: 2px solid grey;
  border-radius: 5px;
  margin: 5px;
  width: 6rem;
  padding: 0 0 0 8px;
}

@media screen and (max-width: 720px) {
  .navbar {
    margin: 0 0.5em;
  }
  .navbar-price {
    margin-left: 10px;
    margin-right: 10px;
  }

  .header-selectors-total-group {
    flex-direction: column;
  }
}
</style>
