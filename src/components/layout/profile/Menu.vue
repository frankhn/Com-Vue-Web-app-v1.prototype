<template>
  <div class="menu-container">
    <div class="menu-item">
      <a href="#" id="featuredlinknav">Featured</a>
    </div>

    <div class="menu-item" id="local">
      <a href="#">Local</a>
    </div>

    <div class="menu-item">
      <a href="#">Gateways</a>
    </div>

    <div class="menu-item">
      <a id="localdropdownlinkfeatured" href="#">Flash Deals</a>
    </div>

    <div class="menu-item">
      <a href="#">Settings</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 3em 0;
  padding: 0 0 1.6em;
  width: 60%;
  border-bottom: solid 1px gray;
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  .menu-item {
    float: left;
    overflow: hidden;

    a {
      color: gray;
      font-size: 1.1em;
      font-weight: 300;
    }
  }
}
</style>
