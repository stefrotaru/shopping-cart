<template>
  <div class="container">
    <div class="content">
      <div class="content-inside">
        <app-cart-item-list></app-cart-item-list>
      </div>
    </div>

    <app-choose-payment></app-choose-payment>

    <br />

    <app-subscribe></app-subscribe>

    <br />

    <div class="content">
      <div class="content-inside">
        <app-payment-form></app-payment-form>
      </div>
    </div>

    <div>
      <div class="col-md-4">
        <a href="#">
          <i aria-hidden="true" class="icon"
            ><img src="../../assets/back.png"
          /></i>
          <span class="back-to-shopping">Back to website</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemList from "../CartItemList.vue";
import PaymentForm from "../PaymentForm.vue";
import ChoosePayment from "../ChoosePayment.vue";
import Subscribe from "../Subscribe.vue";

export default {
  components: {
    "app-cart-item-list": CartItemList,
    "app-payment-form": PaymentForm,
    "app-choose-payment": ChoosePayment,
    "app-subscribe": Subscribe
  }
};
</script>

<style scoped>
.back-to-shopping {
  color: #6c6c6c;
  font-weight: 600;
  margin-top: 5px;
}

img {
  height: 35px;
  width: auto;
}

a {
  text-decoration: none;
  display: inline-flex;
}
</style>
