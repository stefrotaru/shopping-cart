<template>
  <div class="container">
    <div class="row gx-5 border">
      <div class="order-form col-md-6">
        <app-order-form></app-order-form>
      </div>
      <div class="card-details col-md-6">
        <app-card-details></app-card-details>
        <br />
        <p v-if="this.$store.state.isPersonal">
          By placing the order you are confirming that you are over 16 years of
          age and you agree with <br />
          <a href="/#">Lorem Ipsum Payments terms and conditions.</a>
        </p>
        <br />
        <div class="button-div">
          <button
            class="btn btn-success"
            type="submit"
            form="#billing-details-form"
            @click="
              setIsValidForm();
              continueToReview();
            "
          >
            Continue to review
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BillingDetails from "./BillingDetails.vue";
import CardDetails from "./CardDetails.vue";

export default {
  components: {
    "app-order-form": BillingDetails,
    "app-card-details": CardDetails
  },
  data() {
    return {
      isPersonal: this.$store.state.isPersonal
    };
  },
  methods: {
    ...mapMutations(["setIsValidForm", "setIsInvalidCardNum", "setIsInvalidExpDate", "setIsInvalidSecurityCode", "setIsInvalidCardName" , "setIsInvalidEmail"]),

    continueToReview() {
      if (this.$store.state.form.isValidForm && this.$store.state.userData !== '' && this.$store.state.cardData.cardNum !== '' && this.$store.state.cardData.expirationDate !== '' && this.$store.state.cardData.securityCode !== '' && this.$store.state.cardData.cardName !== '') {
        this.$router.push("/shopping-cart/review");
      }
    }
  }
};
</script>

<style scoped>
.order-form {
  display: inline-grid;
  text-align: center;
}

.card-details {
  text-align: center;
}

.btn-success {
  background-color: #11ca79;
  border-color: transparent;
  box-shadow: 0 6px 8px 0 rgb(17 202 121 / 25%);
}
.btn-success:hover {
  background-color: #10ad69;
}
.row {
  background-color: white;
  border-radius: 10px;
}

@media (max-width: 767px) {
  .card-details {
    padding-top: 2rem;
  }
}
</style>
