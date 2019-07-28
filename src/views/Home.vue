<template>
  <div class="home">
    <Header />
    <div class="mega-menu-container">
      <MegaMenu />
    </div>
    <hr id="divider"/>
    <div class="body-container">
      <TopTrending />
      <Featured />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/common/AppFooter.vue'
import Header from '@/components/common/AppHeader.vue'
import MegaMenu from '@/components/common/megamenu/Index.vue'
import TopTrending from '@/components/layout/trending/TopTrending.vue'
import Featured from '@/components/layout/featured/Featured.vue'

export default {
  components: {
    Header,
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
