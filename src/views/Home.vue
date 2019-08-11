<template>
  <section class="home">
    <AppHeader />
    <div class="mega-menu-container">
      <MegaMenu />
    </div>
    <hr id="divider" />
    <div class="body-container">
      <TopTrending />
      <AdCard />
      <Featured />
      <div class="load-more">
        <LoadMore />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/common/AppFooter.vue";
import AppHeader from "@/components/common/AppHeader.vue";
import MegaMenu from "@/components/common/megamenu/Index.vue";
import TopTrending from "@/components/layout/trending/TopTrending.vue";
import Featured from "@/components/layout/featured/Featured.vue";
import AdCard from "@/components/layout/middleAd/AdCard.vue";
import LoadMore from "@/components/common/buttons/LoadMore";

export default {
  components: {
    AppHeader,
    MegaMenu,
    AdCard,
    TopTrending,
    Featured,
    LoadMore,
    Footer
  }
};
</script>
<style lang="scss">
.home {
  background-color: rgb(245, 245, 245);
}
.mega-menu-container {
  padding: 0 10%;
  margin-top: 1em;
}
#divider {
  margin: 0;
}
.body-container {
  padding: 0 10%;
  margin-top: 0.6em;
  position: relative;

  .load-more {
    margin-top: 3em;
    display: flex;
    justify-content: center;
  }
}
@media only screen and (max-width: 770px) {
  .mega-menu-container {
    display: none;
  }
  #divider {
    display: none;
  }
}
@media only screen and (max-width: 1000px) {
  .mega-menu-container {
    padding: 0 2%;
  }
  .body-container {
    padding: 0 2%;
  }
}
</style>
