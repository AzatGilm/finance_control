<template>
  <v-app>
    <v-app-bar flat app>
      <v-btn :ripple="false" plain to="/dashboard"> Dashboard </v-btn>
      <v-btn :ripple="false" plain to="/about"> About </v-btn>
      <v-btn :ripple="false" plain to="/404"> 404 </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
  // components: {
  //   Modal: () => import('./components/modalwindow/ModalVue.vue')
  // },
  // data () {
  //   return {
  //     modalShown: false
  //   }
  // },
  // methods: {
  //   onShown ({ name }) {
  //     this.modalShown = name
  //   },
  //   onClose () {
  //     this.modalShown = ''
  //   }
  // },
  // mounted () {
  //   // this.$router.push({ name: 'about' })
  //   // console.log(this.$router)
  //   this.$modal.EventBus.$on('show', this.onShown)
  //   this.$modal.EventBus.$on('close', this.onClose)
  // },
  // beforeDestroy () {
  //   this.$modal.EventBus.$off('show', this.onShown)
  //   this.$modal.EventBus.$off('close', this.onClose)
  // }
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
  :global(.fade-enter-active),:global(.fade-leave-active) {
    transition: 1s opacity linear;
  }
  :global(.fade-enter), :global(.fade-leave-to) {
    opacity: 0;
  }
</style>
