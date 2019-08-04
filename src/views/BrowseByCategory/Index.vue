<template>
  <section class="browse">
    <AppHeader />
    <div class="mega-menu-container">
      <MegaMenu />
    </div>
    <hr id="divider" />
    <div class="body-container">
        <div class="current-category">
            Things To Do
        </div>
      <div class="filter-section">
        <Categories />
        <Price />
        <Location />
        <Map />
      </div>
    <hr id="divider" />
      <div class="products-section">
          <Card />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Footer from "@/components/common/AppFooter.vue";
import AppHeader from "@/components/common/AppHeader.vue";
import MegaMenu from "@/components/common/megamenu/Index.vue";
import Categories from "@/components/common/FilterNavBar/Categories";
import Card from '@/components/layout/product/Card.vue'
import Price from "@/components/common/FilterNavBar/Price";
import Location from "@/components/common/FilterNavBar/Location";
import Map from "@/components/common/mapView/Index";
export default {
  components: {
    AppHeader,
    MegaMenu,
    Categories,
    Location,
    Price,
    Map,
    Card,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.mega-menu-container {
  padding: 0 10%;
  margin-top: 0.6em;
}
#divider {
  margin: 0;
}
.body-container {
  padding: 0 10%;
  margin-top: 0.6em;
  position: relative;
  .products-section {
      margin: 3em 0;
  }
}
</style>
