<template>
  <div class="category-products">
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
    components: {
        Card
    }
}
</script>
<style lang="scss" scoped>
.category-products {
    margin: 1em 0;
    display: grid;
    grid-gap: 1em;
        grid-template-columns: 1fr 1fr 1fr;
}
</style>