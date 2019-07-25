<template>
    <div>
        <Header />
        <div class="div-container">
            <Index />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/common/AppHeader.vue'
import Footer from '@/components/common/AppFooter.vue'
import Index from '@/components/layout/profile/Index.vue'

export default {
    components: {
        Header,
        Index,
        Footer
    }
}
</script>

<style>
.div-container {
  padding: 0 10%;
  margin-top: 1em;
}
</style>
