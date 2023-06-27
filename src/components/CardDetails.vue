<template>
  <div id="order-form">
    <h4>Card details</h4>
    <hr />
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': this.$store.state.form.isInvalidCardNum }"
          id="form-cardNumber"
          placeholder="Card Number*"
          v-model="cardData.cardNum"
          @input="setCardDataCardNum(cardData.cardNum)"
          @focus="setIsInvalidCardNum()"
          @keyup="setIsInvalidCardNum()"
        />
      </div>
      <div class="form-group">
        <br />
        <input
          type="date"
          class="form-control"
          :class="{ 'is-invalid': this.$store.state.form.isInvalidExpDate }"
          id="form-expirationDate"
          placeholder="Expiration date*"
          v-model="cardData.expirationDate"
          @input="setCardDataExpDate(cardData.expirationDate)"
          @focus="setIsInvalidExpDate()"
          @change="setIsInvalidExpDate()"
        />
      </div>
      <div class="form-group">
        <br />
        <input
          type="text"
          class="form-control"
          :class="{
            'is-invalid': this.$store.state.form.isInvalidSecurityCode
          }"
          id="form-securityCode"
          placeholder="Security code*"
          v-model="cardData.securityCode"
          @input="setCardDataSecCode(cardData.securityCode)"
          @focus="setIsInvalidSecurityCode()"
          @keyup="setIsInvalidSecurityCode()"
        />
      </div>
      <div class="form-group">
        <br />
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': this.$store.state.form.isInvalidCardName }"
          id="form-cardName"
          placeholder="Name on card*"
          v-model="cardData.cardName"
          @input="setCardDataCardName(cardData.cardName)"
          @focus="setIsInvalidCardName()"
          @keyup="setIsInvalidCardName()"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { store } from "../store/store";

export default {
  name: "order-form",
  data() {
    return {
      cardData: {
        cardNum: "",
        expirationDate: "",
        securityCode: "",
        cardName: ""
      },
      isPersonal: store.state.isPersonal
    };
  },
  methods: {
    ...mapMutations([
      "setCardDataCardNum",
      "setCardDataExpDate",
      "setCardDataSecCode",
      "setCardDataCardName",

      "setIsInvalidCardNum",
      "setIsInvalidExpDate",
      "setIsInvalidSecurityCode",
      "setIsInvalidCardName"
    ])
  }
};
</script>

<style scoped>
hr {
  opacity: 1;
  color: #adb5bd;
}
</style>
