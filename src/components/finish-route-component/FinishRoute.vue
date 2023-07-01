<template>
  <div>
    <div class="container">
      <div class="row gx-5 border">
        <div>
          <i class="check-icon"><img src="../../public/check.png" alt=""/></i>
          <span class="thank-you"
            >Thank you for your order. Your payment was completed!</span
          >
        </div>
        <br />
        <br />
        <hr />
        <div class="col-md-6">
          <h4>Order details</h4>
          <p>Order number: {{ $store.state.cart.orderNumber }}</p>
          <p>Date: today</p>
          <p>
            Total price:
            {{ (($store.state.totalPrice * 100) / 100).toFixed(2) }}
            {{ this.$store.state.exchangeCurrencySym }}
          </p>
        </div>
        <div class="col-md-6">
          <br />
          <br />
          <p>Payment method: {{ $store.state.cardData.paymentMethod }}</p>
          <p>Card number: {{ $store.state.cardData.cardNum }}</p>
        </div>
      </div>

      <div class="row gx-5 border">
        <p>
          Please check
          <span class="email-address">{{ $store.state.userData.email }}</span>
          for the order confirmation email (including spam/junk folder).
        </p>
      </div>
      <div class="back-to-shopping">
        <div class="col-md-4">
          <router-link to="/shopping-cart/">
            <a href="">
              <i aria-hidden="true" class="arrow-icon"
                ><img src="../../public/back.png"
              /></i>
              <span class="back-to-shopping">back to shopping</span>
            </a>
          </router-link>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  text-align: center;
}
.row {
  background-color: white;
  border-radius: 10px;
}

.thank-you {
  color: #00b968;
  font-size: 22px;
  font-weight: 600;
  font-style: normal;
  line-height: 1.4;
}

.email-address {
  font-weight: 600;
}

h4 {
  font-weight: 600;
}

.check-icon > img {
  height: 40px;
  padding-right: 20px;
}

a {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}
.arrow-icon > img {
  height: 40px;
}
.back-to-shopping {
  text-align: start;
  color: #6c6c6c;
  font-weight: 600;
  text-decoration: none;
}
</style>
