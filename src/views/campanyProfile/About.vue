<template>
  <div>
    <Header />
    <div class="div-container">
    <aboutUs />
    </div>
    <Footer />
  </div>
</template>

<script>
import aboutUs from '@/components/layout/about/aboutUs.vue'
import Header from '@/components/common/AppHeader.vue'
import Footer from '@/components/common/AppFooter.vue'
export default {
  components: {
    Header,
    aboutUs,
    Footer
  }
}
</script>

<style>
.div-container {
  padding: 0 10%;
  margin-top: 1em;
}
</style>
