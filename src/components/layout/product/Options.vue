<template>
  <div class="div-options" id="optiondiv">
    <div class="product-labels">
      <div>product</div>
      <div>+Image</div>
      <div>+Image</div>
      <div>Edit</div>
    </div>
    <div class="section">
      <h6 class="title-attr">Options</h6>
    </div>
    <div class="section">
      <h6 class="title-attr">
        <h4>355 Items In Stock</h4>
      </h6>
    </div>

    <!-- Botones de compra -->
    <div class="section">
      <button class="btn" id="btnContact">
        Contact
        business name
      </button>
    </div>
    <div class="share">
      <div class="buy">
        <button class="btn" id="btnBuy">Connect Seller</button>
      </div>
      <div class="share-product">
        <a href="#" id="showsharedeal">
          Share this
          Deal
        </a>
      </div>
      <!-- <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      (5136 Ratings)-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.div-options {
  display: flex;
  // background: red;
  flex-direction: column;
  flex: 2;
  padding-left: 1rem;
  justify-content: space-between;
  border-left: 1px solid gray;

  .product-labels {
    display: flex;
    justify-content: space-between;
    padding: 0 0 1rem;
    border-bottom: 1px solid gray;
  }

  .share {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    margin-bottom: -1.2rem;
    .buy {
      button {
        float: right;
        background: #53a831;
        color: white;
        width: 40%;
      }
    }
    .share-product {
      a {
        font-size: 0.8rem;
        font-weight: 400;
        float: right;
      }
    }
  }
  .share:hover {
    color: blue;
  }
}
.checked,
.price span {
  color: #ff9f1a;
}
</style>
