<template>
  <div id="app" class=" sm:container sm:m-auto mx-16">
    <Header @toggle="sidebarOpen = !sidebarOpen" />
    <Sidebar :open="sidebarOpen" />
    <router-view />
    <hr />
    <Footer />
  </div>
</template>
<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
  data() {
    return {
      sidebarOpen: false,
      close: false,
    }
  },
}
</script>
