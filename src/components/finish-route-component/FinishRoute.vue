<template>
  <div>
    <div class="content">
      <div class="content-inside">
        <div class="container">
          <div class="row gx-5 border">
            <div>
              <i class="icon"><img src="../../assets/check.png" alt="" /></i>
              <span class="thank-you">Thank you for your order. Your payment was completed!</span>
            </div>
            <br />
            <br />
            <hr />
            <div class="col-md-6">
              <h4>Order details</h4>
              <p>Order number: {{$store.state.cart.orderNumber}}</p>
              <p>Date: today</p>
              <p>Total price: {{Math.round($store.state.totalPrice * 100) / 100}} {{this.$store.state.exchangeCurrencySym}}</p>
            </div>
            <div class="col-md-6">
              <br />
              <br />
              <p>Payment method: {{$store.state.cardData.paymentMethod}}</p>
              <p>Card number: {{ $store.state.cardData.cardNum }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row gx-5 border">
          <p>
            Please check
            <span class="email-address">{{ $store.state.userData.email }}</span>
            for the order confirmation email (including spam/junk folder).
          </p>
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
#col-md-6 {
  text-align: left;
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

img {
  height: 40px;
  padding-right: 20px;
}
</style>
