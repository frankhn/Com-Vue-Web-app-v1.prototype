<template>
  <div class="page-container">
    <div class="product-name">
      <h4>Hello people</h4>
    </div>
    <section class="product-container">
      <div class="big-photo">
        <div class="currentImage">
          <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
        </div>
        <div class="thumbnails">
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
          <div class="thumb">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
        </div>
      </div>
      <Options />
    </section>
    <div class="details-keeper">
      <Details />
      <div class="empty-palce"></div>
    </div>
  </div>
</template>

<script>
import Details from "@/components/layout/product/Details";
import Options from "@/components/layout/product/Options";
export default {
  name: "Singleproduct",
  components: {
    Options,
    Details
  }
};
</script>

<style lang="scss">
.product-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  // grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
  grid-gap: 1em;
  grid-template-rows: 29em;

  .big-photo {
    // display: grid;
    .currentImage {
      height: 80%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .thumbnails {
      display: flex;
      height: 20%;

      overflow: auto;
      .thumb {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .details-keeper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1em;
  }
}
.details-keeper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1em;
  margin-top: 1em;
}
</style>
