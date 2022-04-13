<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal cost
    </header>
    <PaymentForm @add="onDataAdded"/>
    <PaymentsList :items="paymentsList" />
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList.vue'
import PaymentForm from './components/PaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
      paymentsList: [
        {
          date: '13.04.22',
          category: 'Education',
          price: 100
        },
        {
          date: '24.09.22',
          category: 'Education',
          price: 453
        },
        {
          date: '05.02.23',
          category: 'Education',
          price: 72
        },
        {
          date: '18.07.22',
          category: 'Education',
          price: 290
        }
      ]
    }
  },
  methods: {
    onDataAdded (data) {
      this.paymentsList.push(data)
    }
  }
}
</script>

<style lang="scss" module>
  .header {
    font-size: 20px;
    color: red;
  }
</style>
