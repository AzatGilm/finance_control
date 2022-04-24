<template>
  <div :class="[$style.wrapper]">
      <div :class="[$style.overlay]"></div>
      <div :class="[$style.content]" >
        <header>{{name}}</header>
        <PaymentForm v-if=" name==='PaymentForm'" />
        <button v-on:click="onClose">Close</button>
      </div>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm.vue'

export default {
  components: {
    PaymentForm
  },
  props: {
    name: String
  },
  methods: {
    onClose () {
      this.$modal.close()
    }
  }
}

</script>

<style module lang="scss">
  .wrapper {
      border: 1px solid red;
      position: absolute;
      width: 100%;
      height: 100vh;

      .overlay {
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(50, 50, 50, 0.5);
      }
      .content {
        position: relative;
        z-index: 100;
      }
  }

</style>
