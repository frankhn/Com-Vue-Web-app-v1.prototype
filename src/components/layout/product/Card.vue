<template>
  <div class="product-card">
    <router-link to="/deal/prototype">
      <div class="product-tumb">
        <img src="@/assets/background/p.jpg" alt />
      </div>
      <div class="badge">Hot</div>
      <div class="product-details">
        <!-- <span class="product-catagory">Women,bag</span> -->
        <h4>
          <a href>Women leather bag</a>
        </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
        <div class="product-bottom-details">
          <!-- <div class="product-links">
            <a href>
              <i class="fa fa-heart"></i>
            </a>
            <a href>
              <i class="fa fa-shopping-cart"></i>
            </a>
          </div>-->
          <!-- <div class="product-star-rating">
            <span class="fa fa-star checked"></span> <span
									id="startunchecked" class="fa fa-star checked"></span> <span
									id="startunchecked" class="fa fa-star "></span> <span
									id="startunchecked" class="fa fa-star "></span> <span
									id="startunchecked" class="fa fa-star"></span>
          </div> -->
          <div class="product-price">
            <small>$96.00</small>$230.99
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.product-card {
  padding: 0;
  overflow: hidden;
  display: inline-block;
}
.product-card {
  box-shadow: 0 2px 7px #dfdfdf;
  background: #fafafa;
  border-top-right-radius: 0.3em;
  border-top-left-radius: 0.3em;
}

.badge {
  position: absolute;
  left: 0;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  padding: 3px 10px;
}

.product-tumb {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
}

.product-tumb img {
  max-width: 100%;
  max-height: 100%;
}

.product-details {
  padding: 0.2em;
}

.product-details h4 a {
  font-weight: 500;
  display: block;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
}

.product-details h4 a:hover {
  color: #fbb72c;
}

.product-details p {
  font-size: 0.5em;
  font-size: 0.8em;
  color: #999;
}

.product-bottom-details {
  overflow: hidden;
}

.product-bottom-details div {
  float: right;
  /* width: 100%; */
}

.product-price {
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
}

.product-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

.product-links {
  text-align: right;
}

.product-links a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
}

.product-links a:hover {
  color: #fbb72c;
}
.checked, .price span {
  color: #ff9f1a; }
</style>
