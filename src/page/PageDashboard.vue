<template>
  <div>
      <PaymentForm/>
      <PaymentsList/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import PaymentForm from '../components/PaymentForm.vue'
import PaymentsList from '../components/PaymentsList.vue'

export default {
  components: {
    PaymentForm,
    PaymentsList
  },
  methods: {
    ...mapActions([
      'fetchData'
    ])
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>

</style>
