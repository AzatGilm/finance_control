<template>
  <div>
      <!-- <input placeholder="Date" v-model='date' >
      <input placeholder="Category" v-model='category'>
      <input placeholder="Price" v-model.number='price'> -->

    <v-text-field
      @focus="shown = true"
      v-model="date"
    />
    <v-date-picker v-show="shown" v-model="date"></v-date-picker>
    <v-text-field
      v-model="category"
      label="Category"
      required>
    </v-text-field>
    <v-text-field
      v-model="value"
      label="Value"
      required>
    </v-text-field>
      <button @click="save">Save</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      date: '',
      category: '',
      value: 0,
      shown: false
    }
  },
  methods: {
    ...mapMutations([
      'addPaymentsListData'
    ]),
    save () {
      const { date, category, value } = this
      this.addPaymentsListData([{ date, category, value }])
      this.$emit('closeModal', false)
    }

  },
  watch: {
    date () {
      this.shown = false
    }
  }
}
</script>

<style>
</style>
