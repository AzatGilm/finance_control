<template>
    <div>
        <v-data-table
          :headers="tableHeaders"
          :items="listWithIndex"
        >
        </v-data-table>
        <!-- <div v-for="(item, index) in currentElement"
        :key="index">
            {{ item }}
        </div>
        <PaginationVue
        :length="12"
        :n="n"
        :cur="page"
        @paginate="onPaginate"
        /> -->
        <!-- <button v-on:click="shownPaymentListForm" > Show PaymentsList Form </button>
        <button v-on:click="closePaymentForm" > Close PaymentsList Form </button> -->
    </div>
</template>

<script>
// import PaginationVue from './PaginationVue.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    // PaginationVue
  },
  data () {
    return {
      page: 1,
      n: 3,
      tableHeaders: [
        { text: '#', value: 'index' },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'value' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    onPaginate (p) {
      this.page = p
      this.fetchData(p)
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
    listWithIndex () {
      return this.getPaymentsList.map((obj, i) => {
        obj.index = i + 1
        return obj
      })
    },
    currentElement () {
      const { page, n } = this
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  },
  mounted () {
    this.fetchData(this.page)
    this.page = +this.$route.params.page
    // this.$route.path === '/dashboard' ? this.page = 1 : this.page = +this.$route.params.page
  }
}
</script>

<style>
</style>
