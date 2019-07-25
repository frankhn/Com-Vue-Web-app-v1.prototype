<template>
  <div class="featured-container">
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
};
</script>

<style>
.featured-container {
  padding: 0;
  overflow: hidden;
}
</style>
