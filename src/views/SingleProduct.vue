<template>
  <div class="home">
    <Header />
    <div class="div-container">
      <BuyProduct />
    </div>
    <Footer />
  </div>
</template>

<script>
import BuyProduct from "@/components/layout/product/BuyProduct.vue"
import Footer from "@/components/common/AppFooter.vue"
import Header from "@/components/common/AppHeader.vue"

export default {
  name: "product",
  components: {
    Header,
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
</style>
