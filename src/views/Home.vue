<template>
  <section class="home">
    <AppHeader />
    <div class="mega-menu-container">
      <MegaMenu />
    </div>
    <hr id="divider"/>
    <div class="body-container">
      <TopTrending />
      <Featured />
    </div>
    <Footer />
  </section>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/common/AppFooter.vue'
import AppHeader from '@/components/common/AppHeader.vue'
import MegaMenu from '@/components/common/megamenu/Index.vue'
import TopTrending from '@/components/layout/trending/TopTrending.vue'
import Featured from '@/components/layout/featured/Featured.vue'

export default {
  components: {
    AppHeader,
    MegaMenu,
    TopTrending,
    Featured,
    Footer,
  },
};
</script>
<style>
.mega-menu-container {
  padding: 0 10%;
  margin-top: .6em;
}
#divider {
  margin:0;
}
.body-container {
  padding: 0 10%;
  margin-top: .6em;
  position: relative;
}
</style>
