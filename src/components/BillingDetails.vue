<template>
  <div id="order-form">
    <h4>Billing details</h4>
    <hr />
    <div>
      <button
        type="button"
        class="btn btn-light"
        @click="setIsPersonal('personal')"
      >
        Personal
      </button>
      <button
        type="button"
        class="btn btn-light"
        @click="setIsPersonal('company')"
      >
        Company
      </button>
    </div>
    <form id="billing-details-form">
      <div class="form-group email">
        <label for="email"></label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email address*"
          v-model="userData.email"
          @input="setUserDataEmail(userData.email)"
        />
      </div>
      <br />
      <select
        class="form-group form-select"
        v-model="userData.country"
        @click="setUserDataCountry(userData.country)"
      >
        <option disabled selected hidden value="">Country</option>
        <option v-for="country in countries" :key="country.id">
          {{ country.name }}
        </option>
      </select>
      <div class="form-group" v-if="!this.$store.state.isPersonal">
        <label for="form-address"></label>
        <input
          type="text"
          class="form-control"
          id="form-address"
          placeholder="Address*"
          v-model="userData.address"
          @input="setUserDataAddress(userData.address)"
        />
      </div>
      <div class="form-group" v-if="!this.$store.state.isPersonal">
        <label for="form-city"></label>
        <input
          type="text"
          class="form-control"
          id="form-city"
          placeholder="City"
          v-model="userData.city"
          @input="setUserDataCity(userData.city)"
        />
      </div>
      <div class="form-group" v-if="!this.$store.state.isPersonal">
        <label for="form-zipCode"></label>
        <input
          type="text"
          class="form-control"
          id="form-zipCode"
          placeholder="Zip / Postal code"
          v-model="userData.zipCode"
          @input="setUserDataZipCode(userData.zipCode)"
        />
      </div>
      <div class="form-group" v-if="!this.$store.state.isPersonal">
        <label for="form-company"></label>
        <input
          type="text"
          class="form-control"
          id="form-company"
          placeholder="Company*"
          v-model="userData.company"
          @input="setUserDataCompany(userData.company)"
        />
      </div>
      <div class="form-vat" v-if="!this.$store.state.isPersonal">
        <label for="form-company"></label>
        <input
          type="text"
          class="form-control"
          id="form-vat"
          placeholder="VAT ID"
          v-model="userData.vatId"
          @input="setUserDataVat(userData.vatId)"
        />
      </div>
      <div class="form-phone" v-if="!this.$store.state.isPersonal">
        <label for="form-phone"></label>
        <input
          type="text"
          class="form-control"
          id="form-phone"
          placeholder="Phone"
          v-model="userData.phoneNum"
          @input="setUserDataPhoneNum(userData.phoneNum)"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "order-form",
  data() {
    return {
      userData: {
        email: "",
        country: "",
        address: "",
        city: "",
        zipCode: "",
        company: "",
        vatId: "",
        phoneNum: "",
      },
      countries: [
        { id: 1, name: "Romania" },
        { id: 2, name: "England" },
        { id: 3, name: "Germany" },
        { id: 4, name: "Netherlands" },
        { id: 5, name: "Italy" },
        { id: 6, name: "Spain" },
      ],
    };
  },
  methods: {
    ...mapMutations([
      "setIsPersonal",
      "setUserDataEmail",
      "setUserDataCountry",
      "setUserDataAddress",
      "setUserDataCity",
      "setUserDataZipCode",
      "setUserDataCompany",
      "setUserDataVat",
      "setUserDataPhoneNum",
    ]),
    ...mapActions(["setPersonal"]),
    setIsPersonal(type) {
      this.setPersonal(type);
    },
  },
};
</script>

<style scoped>
hr {
  opacity: 1;
  color: #adb5bd;
}
</style>