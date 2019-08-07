<template>
    <div class="category-selector">
      <v-select
      class="category-selector"
      :options="options" />
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  components: {
    'v-select': vSelect
  },
  data: {
    options: [
      "local",
      "things to do"
    ]
  }
}
</script>

<style lang="scss" scoped>
.category-selector {
  position: absolute;
  // font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  // text-rendering: optimizelegibility;
  // -moz-osx-font-smoothing: grayscale;
  // -moz-text-size-adjust: none;
}
</style>
