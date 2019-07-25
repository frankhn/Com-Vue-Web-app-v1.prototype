<template>
  <div class="trending">
    <div class="col-lg-5 col-md-5 col-sm-12 top-trending">
      <img src="@/assets/background/p.jpg" />
    </div>
    <div class="col-lg-3 col-md-3 col-sm-12 details">
      <img src="@/assets/background/p.jpg" />
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 user-based">
      <div class="based-card">
       <div class="based-image">
           <img id='div-based-image' src="@/assets/background/p.jpg" />
       </div>
       <div class="based-description">
           <div class="based-product-name">
             My name is John
           </div>
            <div class="based-product-description">
             Read more about me
           </div>
       </div>
      </div>
      





       <div class="based-card">
       <div class="based-image">
           <img id='div-based-image' src="@/assets/background/p.jpg" />
       </div>
       <div class="based-description">
           description here
       </div>
      </div>

       <div class="based-card">
       <div class="based-image">
           <img id='div-based-image' src="@/assets/background/p.jpg" />
       </div>
       <div class="based-description">
           description here
       </div>
      </div>

       <div class="based-card">
       <div class="based-image">
           <img id='div-based-image' src="@/assets/background/p.jpg" />
       </div>
       <div class="based-description">
           description here
       </div>
      </div>

       <div class="based-card">
       <div class="based-image">
           <img id='div-based-image' src="@/assets/background/p.jpg" />
       </div>
       <div class="based-description">
           description here
       </div>
      </div>

       <div class="based-card">
       <div class="based-image">
           <img id='div-based-image' src="@/assets/background/p.jpg" />
       </div>
       <div class="based-description">
           description here
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.trending {
  width: 100%;
  display: -webkit-inline-box;
}
.top-trending {
  overflow: hidden;
  padding: 0;
  height: 22em;
  line-height: 22em;
  border-top-left-radius: 5px;
}
.details {
  overflow: hidden;
  padding: 0;
  height: 22em;
  line-height: 22em;
  padding-left: 1em;
}
.user-based {
  overflow: scroll;
  padding: 0;
  height: 22em;
  line-height: 22em;
  padding-left: 1em;
}
.based-card {
  line-height: 6em;
  display: flex;
  height: 6em;
  padding: 0;
  margin-bottom: .5em;
  justify-content: space-between;
}
#img-card {
  height: auto;
}
.based-description {
  display: block;
  width: 60%;
  padding: 0;
  background: #cfd4d6;
}
.based-image {
   width: 40%;
   padding: 0
}
#div-based-image {
    max-height:100%;
    max-width:100%;
}
.based-product-name {
  font-size: larger
}
.based-product-description {
  font-size: 12px;
  text-transform: initial;
}
@media only screen and (max-width: 1300px) {
  .details {
    display: none;
  }
  .user-based {
    width: 100%
  }
}
</style>