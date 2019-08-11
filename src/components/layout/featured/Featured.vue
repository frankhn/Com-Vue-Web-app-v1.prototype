<template>
  <div class="featured-container">
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
  </div>
</template>

<script>
import Card from '@/components/layout/product/Card.vue'
export default {
  name: 'featured',
  components: {
    Card
  }
}
</script>

<style>
.featured-container {
  display: grid;
  width: 100%;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
