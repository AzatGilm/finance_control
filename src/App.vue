<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal cost
      <a href="/dashboard"> Dashboard </a>
      <a href="/about"> About </a>
      <a href="/404"> 404 </a>
    </header>
    <PageDashboard v-if="page==='dashboard'" />
    <PageAbout v-if="page==='about'" />
    <PageError404 v-if="page==='404'" />
  </div>
</template>

<script>
import PageDashboard from './page/PageDashboard.vue'
import PageAbout from './page/PageAbout.vue'
import PageError404 from './page/PageError404.vue'

export default {
  name: 'App',
  components: {
    PageDashboard,
    PageAbout,
    PageError404
  },
  data () {
    return {
      page: 'dashboard'
    }
  },
  methods: {
    setPage () {
      this.page = location.pathname.slice(1)
    }
  },
  mounted () {
    this.setPage()
    const links = document.querySelectorAll('a')
    links.forEach(
      (link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault()
          history.pushState({}, '', link.href)
          this.setPage()
        })
      }
    )
    window.addEventListener('popstate', this.setPage)
  }
}
</script>

<style lang="scss" module>
  .header {
    font-size: 20px;
    color: red;
  }
</style>
