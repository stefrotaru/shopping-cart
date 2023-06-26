<template>
  <div class="footer-container">
    <div class="">
      <div class="upper-footer">
        <img
          src="../assets/lorem-ipsum-payments.png"
          class="logo"
        />
        <p id="footer_p">
          Your payment is securely processed by <br />our partner, Lorem Ipsum Payments.<a
            href="#"
            >Who is Lorem Ipsum Payments?</a
          >
        </p>
      </div>
    </div>
    <footer class="my-4">
      <p class="text-center text-muted">
        Order processed by our payments partner Lorem Ipsum Payments.
      </p>
      <p class="text-center text-muted">
        Lorem Ipsum Payments BV | [Mail address: P.O. Box 12345, 1001
        GH Spain] Cerveza 250, 4th floor, Barcelona, 08016, Spain
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
.footer-container {
  background-color: white;
  font-size: .8em;
  text-align: center;
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