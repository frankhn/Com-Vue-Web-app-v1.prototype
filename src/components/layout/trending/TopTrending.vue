<template>
  <section class="trending">
    <div class="top-trending">
      <img src="@/assets/background/p.jpg" />
    </div>
    <div class="details">
      <p class="productname">This is the product name and here we are</p>
      <p class="productdescription">
        Smartphones are, of course, powerful gadgets that have allowed us to do things which,
        just a few years ago, were unimaginable. But they have also become the gateway to social
        media, a place that has made a great...
      </p>
      <button type="submit" class="veiw">View</button>
    </div>
    <div class="user-based">
      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div class="description-header">Smartphones gadgets</div>
          <div class="based-product-description">But they become the gateway a place that made a great...</div>
        </div>
      </div>

      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div class="description-header">Smartphones gadgets</div>
          <div class="based-product-description">But they become the gateway a place that made a great...</div>
        </div>
      </div>

      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div class="description-header">Smartphones gadgets</div>
          <div class="based-product-description">But they become the gateway a place that made a great...</div>
        </div>
      </div>

      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div class="description-card-header">Smartphones gadgets</div>
          <div class="based-product-description">But they become the gateway a place that made a great...</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.trending {
  display: flex;
  height: 22em;
  margin-bottom: 10px;
  justify-content: space-around;
  flex-direction: row;

  .top-trending {
    flex: 3;
    padding-right: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 5px;
    }
  }
  .details {
    padding: 0 0.5rem 0;
    flex: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .productname {
      font-weight: 400;
      font-size: larger;
    }

    .productdescription {
      flex: 2;
      font-size: medium;
      color: #525258;
      font-weight: 400;
    }
    .veiw {
      width: 50%;
      height: 2rem;
      border: none;
      color: white;
      background: #53a831;
      margin-left: 50%;
    }
  }

  .user-based {
    flex: 1.8;
    border-top-right-radius: 5px;
    overflow: scroll;

    .based-card {
      display: flex;
      justify-content: space-between;
      height: 5.6rem;
      margin-bottom: .5em;
      .based-image {
        flex: 1;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .based-description {
        flex: 1.3;
        display: flex;
        padding: 0 .3rem 0;
        flex-direction: column;
        justify-content: start;

        .description-card-header {
          font-size: 1rem;
        }
        .based-product-description {
          font-size: .9em;
          font-weight: 200;
        }
      }
    }
  }
}
// .based-card {
//   line-height: 6em;
//   display: flex;
//   height: 6em;
//   padding: 0;
//   margin-bottom: .5em;
//   justify-content: space-between;
// }
// #img-card {
//   height: auto;
// }
// .based-description {
//   display: block;
//   width: 60%;
//   padding: 0;
//   background: #cfd4d6;
// }
// .based-image {
//    width: 40%;
//    padding: 0
// }
// #div-based-image {
//     max-height:100%;
//     max-width:100%;
// }
// .based-product-name {
//   font-size: larger
// }
// .based-product-description {
//   font-size: 12px;
//   text-transform: initial;
// }
// @media only screen and (max-width: 1300px) {
//   .details {
//     display: none;
//   }
//   .user-based {
//     width: 100%
//   }
// }
</style>