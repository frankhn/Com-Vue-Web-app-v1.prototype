<template>
  <div class="home">
    <AppHeader />
    <div class="mega-menu-container">
      <MegaMenu />
    </div>
    <hr id="divider" />
    <div class="div-container">
      <BuyProduct />
    </div>
    <Footer />
  </div>
</template>

<script>
import BuyProduct from "@/components/layout/product/BuyProduct.vue";
import Footer from "@/components/common/AppFooter.vue";
import MegaMenu from "@/components/common/megamenu/Index.vue";
import AppHeader from "@/components/common/AppHeader.vue";

export default {
  name: "product",
  components: {
    AppHeader,
    MegaMenu,
    BuyProduct,
    Footer
  }
};
</script>

<style>
.div-container {
  padding: 0 10%;
  margin-top: 1em;
}
#divider {
  margin: 0;
}
.mega-menu-container {
  padding: 0 10%;
  margin-top: 1em;
}
</style>
