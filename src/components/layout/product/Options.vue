<template>
    <div class="div-options col-md-4 col-sm-12 col-xs-12" id="optiondiv">
      <div class="product-labels">
        <button >product</button>
        <button >+Image</button>
        <button >Edit</button>
      </div>
      <h6 class="title-price">
        <small>Currency Converter</small>
      </h6>

      <h3 id="showproductbuyingprice">Frw 564</h3>

      <!-- Detalles especificos del producto -->
      <div class="section">
        <h6 class="title-attr">Options</h6>
      </div>
      <div class="section">
        <h6 class="title-attr">
          <h4>355 Items In Stock</h4>
        </h6>
      
      </div>

      <!-- Botones de compra -->
      <div class="section col-sm-6 col-xs-6">
        <button class="btn" id="btnContact">
          Contact
          business name
        </button>
      </div>
      <div class="section col-sm-6 col-xs-6">
        <button class="btn" id="btnBuy">Buy</button>
      </div>
      <div class="sectionsharedeal">
        <h6>
          <a href="#" id="showsharedeal">
            <span class="glyphicon glyphicon-heart-empty" id="spansharedealcursor"></span>Share
            Deal
          </a>
        </h6>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        (5136 Ratings)
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.checked,
.price span {
  color: #ff9f1a;
}
</style>
