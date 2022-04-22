<template>
  <div>
      <!-- <PaymentForm/> -->
      <PaymentsList/>
      <ModalVue v-if="modalFlag" modal="paymentform"/>
      <button @click="openModal" > Open Modal Window </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

// import PaymentForm from '../components/PaymentForm.vue'
import PaymentsList from '../components/PaymentsList.vue'
import ModalVue from '../components/modalwindow/ModalVue.vue'

export default {
  components: {
    // PaymentForm,
    PaymentsList,
    ModalVue
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
