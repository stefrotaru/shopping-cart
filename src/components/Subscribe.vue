<template>
  <div class="container">
    <div class="row gx-5 border">
      <span
        ><input
          type="checkbox"
          v-model="subscribe"
          @click="setUserSubscription(!subscribe)"
          id="sub"
        />
        Subscribe to our newsletter now and enjoy exclusive benefits (1-2x per
        week)</span
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      subscribe: false
    };
  },
  methods: {
    ...mapMutations(["setUserSubscription"])
  }
};
</script>

<style scoped>
.row {
  background-color: white;
  border-radius: 10px;
}
</style>
