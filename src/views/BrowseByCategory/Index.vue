<template>
  <section class="browse">
    <AppHeader />
    <div class="mega-menu-container">
      <MegaMenu />
    </div>
    <hr id="divider" />
    <div class="body-container">
      <div class="current-category">Things To Do</div>
      <div class="filter-section">
        <Categories />
         <!-- <Price /> -->
        <Location />
        <!-- <Map />  -->
      </div>
      <hr id="divider" />
      <!-- <div class="products-section"> -->
        <Products />
      <!-- </div> -->
    </div>
    <Footer />
  </section>
</template>

<script>
import Footer from "@/components/common/AppFooter.vue";
import AppHeader from "@/components/common/AppHeader.vue";
import MegaMenu from "@/components/common/megamenu/Index.vue";
import Categories from "@/components/common/FilterNavBar/Categories";
import Card from "@/components/layout/product/Card.vue";
import Products from '@/components/common/FilterNavBar/FilteredProducts'
import Location from "@/components/common/FilterNavBar/Location";
export default {
  components: {
    AppHeader,
    MegaMenu,
    Categories,
    Location,
    Map,
    Card,
    Products,
    Footer
  }
};
</script>

<style lang="scss" scoped>
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

  .filter-section{
  }

  .products-section {
    margin: 3em 0;
  }
}
</style>
