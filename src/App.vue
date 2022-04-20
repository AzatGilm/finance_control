<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal cost
    </header>
    <PaymentForm />
    <PaymentsList />
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList.vue'
import PaymentForm from './components/PaymentForm.vue'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
    }
  },
  methods: {
    onDataAdded (data) {
      this.paymentsList.push(data)
    },
    ...mapActions([
      'fetchData'
    ])
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang="scss" module>
  .header {
    font-size: 20px;
    color: red;
  }
</style>
