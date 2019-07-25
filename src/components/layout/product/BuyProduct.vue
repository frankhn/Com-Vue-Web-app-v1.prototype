<template>
  <div class="row">
    <div class="col-md-12">
      <h4>
        product.name
      </h4>
    </div>
    <div class="col-md-8 col-sm-12 col-xs-12 item-photo">
      <div id="mycarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
          <li data-target="#mycarousel" data-slide-to="1"></li>
          <li data-target="#mycarousel" data-slide-to="2"></li>
          <li data-target="#mycarousel" data-slide-to="3"></li>
          <li data-target="#mycarousel" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item active">
            <img id="singleproductimage" alt src="@/assets/background/p.jpg" />
          </div>
        </div>
        <a class="left carousel-control" href="#mycarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="right carousel-control" href="#mycarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
	<Options />
	<Details />
  </div>
</template>

<script>
import Details from '@/components/layout/product/Details'
import Options from '@/components/layout/product/Options'
export default {
	name: "Singleproduct",
	components: {
		Options,
		Details
	}
};
</script>

<style lang="scss" scoped>
* {
  text-transform: capitalize;
}

#singleproductimage {
  width: 100%;
  height: 26em;
}

#svgnotification {
  height: 12px;
  width: 16px;
}
.div-options {
  padding: 0;
}
.product-labels {
	padding: 0;
}
</style>
