<template>
  <div :class="[$style.wrapper]" v-if="shown">
      <div class="overlay"></div>
      <header>{{shown}}</header>
      <PaymentForm v-if=" shown==='PaymentForm'" />
      <button v-on:click="onClose">Close</button>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm.vue'

export default {
  components: {
    PaymentForm
  },
  data () {
    return {
      shown: ''
    }
  },
  props: {
    modal: String
  },
  methods: {
    onShow ({ name }) {
      this.shown = name
    },
    onClose () {
      this.shown = ''
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('close', this.onClose)
  }
}

</script>

<style module lang="scss">
  .wrapper {
      border: 1px solid red;
  }
</style>
