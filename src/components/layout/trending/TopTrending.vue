<template>
  <section class="trending">
    <div class="top-trending">
      <img class="top-trending-img" src="@/assets/background/p.jpg" />
    </div>
    <!-- <div class="details">
      <p class="productname">This is the product name and here we are</p>
      <p class="productdescription">
        Smartphones are, of course, powerful gadgets that have allowed us to do things which,
        just a few years ago, were unimaginable. But they have also become the gateway to social
        media, a place that has made a great...
      </p>
      <button type="submit" class="veiw">View</button>
    </div>-->
    <div class="user-based">
      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <!-- <div class="description-header">Smartphones gadgets</div> -->
          <div
            class="based-product-description"
          >But they become the gateway a place that made a great...</div>
          <div class="based-product-price">
            <small>$96.00</small>39$
          </div>
        </div>
      </div>

      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div
            class="based-product-description"
          >But they become the gateway a place that made a great...</div>
          <div class="based-product-price">
            <small>$96.00</small>$20.99
          </div>
        </div>
      </div>

      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div
            class="based-product-description"
          >But they become the gateway a place that made a great...</div>
          <div class="based-product-price">
            <small>$96.00</small>$0.99
          </div>
        </div>
      </div>

      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div
            class="based-product-description"
          >But they become the gateway a place that made a great...</div>
          <div class="based-product-price">
            <small>$96.00</small>230.99$
          </div>
        </div>
      </div>

      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div
            class="based-product-description"
          >But they become the gateway a place that made a great...</div>
          <div class="based-product-price">
            <small>$96.00</small>$230.99
          </div>
        </div>
      </div>

      <div class="based-card">
        <div class="based-image">
          <img id="div-based-image" src="@/assets/background/p.jpg" />
        </div>

        <div class="based-description">
          <div
            class="based-product-description"
          >But they become the gateway a place that made a great...</div>
          <div class="based-product-price">
            <small>$96.00</small>$230.99
          </div>
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
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0.8rem;
  height: 22em;

  .top-trending {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    .top-trending-img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      border-radius: .3em;
    }
  }
  .user-based {
    flex: 1.8;
    border-top-right-radius: 5px;
    overflow: scroll;

    .based-card {
      display: grid;
      justify-content: space-between;
      height: 5.6rem;
      grid-template-columns: 2fr 2fr;
    grid-gap: .5em;
      margin-bottom: 0.5em;
      .based-image {
        flex: 1;
        img {
          width: 100%;
          max-height: 100%;
          max-width: 100%;
          object-fit: cover;
          border-radius: .3em;
        }
      }
      .based-description {
        display: flex;
        flex-direction: column;
        justify-content: start;

        .description-card-header {
          font-size: 1rem;
        }
        .based-product-description {
          font-size: 0.9em;
          font-weight: 200;
        }
        .based-product-price {
          color: #53A831;
          text-align: end;
          font-size: 1em;
    font-weight: 400;
        }
        .based-product-price small {
          font-size: 70%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;
    color: brown;
        }
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    .top-trending {
      width: 100;
    }
    .user-based {
      display: none;
    }
  }
}
</style>