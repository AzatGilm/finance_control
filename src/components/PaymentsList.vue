<template>
    <div>
        <div v-for="(item, index) in currentElement"
        :key="index">
            {{ item }}
        </div>
        <PaginationVue
        :length="getPaymentsList.length"
        :n="n"
        :cur="page"
        @paginate="onPaginate"
        />
        <button v-on:click="shownPaymentListForm" > Show PaymentsList Form </button>
        <button v-on:click="closePaymentForm" > Close PaymentsList Form </button>
    </div>
</template>

<script>
import PaginationVue from './PaginationVue.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    PaginationVue
  },
  data () {
    return {
      page: 1,
      n: 10
    }
  },
  methods: {
    onPaginate (p) {
      this.page = p
    },
    shownPaymentListForm () {
      this.$modal.show('PaymentForm')
    },
    closePaymentForm () {
      this.$modal.close()
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentElement () {
      const { page, n } = this
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  }
}
</script>

<style>
</style>
