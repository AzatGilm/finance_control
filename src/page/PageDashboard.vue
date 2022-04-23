<template>
  <div>
      <!-- <PaymentForm/> -->
      <PaymentsList/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

// import PaymentForm from '../components/PaymentForm.vue'
import PaymentsList from '../components/PaymentsList.vue'

export default {
  components: {
    // PaymentForm,
    PaymentsList
  },
  data () {
    return {
      modalFlag: false
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    openModal () {
      this.modalFlag = true
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>

</style>
