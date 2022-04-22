<template>
  <div class="[$style.wrapper]">
      <div class="overlay"></div>
      <header>Name</header>
      <PaymentForm v-if="modal==='paymentform'" />
      <button>Close</button>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm.vue'

export default {
  components: {
    PaymentForm
  },
  props: {
    modal: String
  }
}

</script>

<style module>
  .wrapper {
      border: 1px solid red;
  }
</style>
