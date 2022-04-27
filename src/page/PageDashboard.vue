<template>
    <v-row>
      <v-col>
        <div class="text-h5 text-md-h3 my-8">
          My personal costs
        </div>
        <v-dialog v-model="pfs">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="teal"
              dark
              v-bind="attrs"
              v-on="on">
              ADD PAYMENT
              <v-icon dark> mdi-plus</v-icon>
            </v-btn>
          </template>

          <v-card>
            <PaymentForm v-on:closeModal="pfs=false"/>
          </v-card>
        </v-dialog>
        <PaymentsList/>
      </v-col>
      <v-col>Some text</v-col>
    </v-row>
</template>

<script>
import PaymentsList from '../components/PaymentsList.vue'
import PaymentForm from '../components/PaymentForm.vue'

export default {
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
      pfs: false
    }
  }
}
</script>

<style>

</style>
