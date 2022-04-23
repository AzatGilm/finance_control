<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal cost
      <router-link to="/dashboard"> Dashboard </router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/404"> 404 </router-link>
    </header>
    <main>
      <router-view/>
    </main>
    <Modal/>
  </div>
</template>

<script>
import Modal from './components/modalwindow/ModalVue.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
    }
  },
  mounted () {
    // this.$router.push({ name: 'about' })
  }
}
</script>

<style lang="scss" module>
  .header {
    font-size: 20px;
    color: red;
  }
</style>
