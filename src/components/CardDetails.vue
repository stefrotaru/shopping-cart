<template>
  <div id="order-form">
    <h4>Card details</h4>
    <hr />
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="form-cardNumber"
          placeholder="Card Number*"
          v-model="cardData.cardNum"
          @input="setCardDataCardNum(cardData.cardNum)"
        />
      </div>
      <div class="form-group">
        <br />
        <input
          type="date"
          class="form-control"
          id="form-expirationDate"
          placeholder="Expiration date*"
          v-model="cardData.expirationDate"
          @input="setCardDataExpDate(cardData.expirationDate)"
        />
      </div>
      <div class="form-group">
        <br />
        <input
          type="password"
          class="form-control"
          id="form-securityCode"
          placeholder="Security code*"
          v-model="cardData.securityCode"
          @input="setCardDataSecCode(cardData.securityCode)"
        />
      </div>
      <div class="form-group">
        <br />
        <input
          type="text"
          class="form-control"
          id="form-cardName"
          placeholder="Name on card*"
          v-model="cardData.cardName"
          @input="setCardDataCardName(cardData.cardName)"
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
        cardName: "",
      },
      isPersonal: store.state.isPersonal,
    };
  },
  methods: {
    ...mapMutations([
      "setCardDataCardNum",
      "setCardDataExpDate",
      "setCardDataSecCode",
      "setCardDataCardName",
    ]),

    // setCardDataCardNum(cardNum) {
    //   this.setCardDataCardNumAct(cardNum)
    // }
  },
};
</script>

<style scoped>
hr {
  opacity: 1;
  color: #adb5bd
}
</style>
