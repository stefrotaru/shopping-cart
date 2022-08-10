<template>
  <div class="header-container">
    <div class="">
      <div class="upper-footer">
        <img
          src="https://store.nero.com/checkout/themes/default/images/logos/2checkout-logo.svg"
          class="logo"
        />
        <p id="footer_p">
          Your payment is securely processed by <br />our partner, 2Checkout.<a
            href="#"
            >Who is 2Checkout?</a
          >
        </p>
      </div>
    </div>
    <footer class="py-3 my-4">
      <p class="text-center text-muted">
        Order processed by our payments partner 2Checkout.
      </p>
      <p class="text-center text-muted">
        Verifone Payments BV dba 2Checkout | [Mail address: P.O. Box 11334, 1001
        GH Amsterdam] Singel 250, 4th floor, Amsterdam, 1016AB, Netherlands
      </p>
      <ul class="">
        <a href="#">Terms and conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">Refund policy</a>
        <a href="#">Right of Withdrawal</a>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-container {
  background-color: white;
}

#footer_p {
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
}

.upper-footer {
  text-align: left;
  text-align: center;
  padding-top: 1rem;
}
.upper-footer a {
  font-weight: 600;
}
.logo {
  max-width: 140px;
}
</style>