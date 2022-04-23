<template>
  <div :class="[$style.app]">
    <Modal v-if="modalShown" :name="modalShown" />
    <header :class="[$style.header]">
      My personal cost
      <router-link to="/dashboard"> Dashboard </router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/404"> 404 </router-link>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Modal: () => import('./components/modalwindow/ModalVue.vue')
  },
  data () {
    return {
      modalShown: false
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    onShown ({ name }) {
      this.modalShown = name
    },
    onClose () {
      this.modalShown = ''
    }
  },
  mounted () {
    // this.$router.push({ name: 'about' })
    // console.log(this.$router)
    this.fetchData()
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('close', this.onClose)
  }
}
</script>

<style lang="scss" module>
  .header {
    font-size: 20px;
    color: red;
  }
  html, body, .app {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
  }
</style>
