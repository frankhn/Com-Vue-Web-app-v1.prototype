<template>
  <div class="fiter-btn-group">
       <Categories /> 
    </div>
</template>
<script>
import Categories from '@/components/common/FilterNavBar/Categories'
export default {
    components: {
        Categories
    }
}
</script>
<style lang="scss" scoped>
.fiter-btn-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
      margin-bottom: .2em;
}
</style>