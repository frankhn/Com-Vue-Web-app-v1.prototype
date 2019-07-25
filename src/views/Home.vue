<template>
  <div class="home">
    <Header />
    <div class="body-container">
      <TopTrending />
      <Featured />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/common/AppFooter.vue';
import Header from '@/components/common/AppHeader.vue';
import TopTrending from '@/components/layout/trending/TopTrending.vue';
import Featured from '@/components/layout/featured/Featured.vue';

export default {
  components: {
    Header,
    TopTrending,
    Featured,
    Footer,
  },
};
</script>
<style>
.body-container {
  padding: 0 10%;
  margin-top: .6em;
}
</style>
