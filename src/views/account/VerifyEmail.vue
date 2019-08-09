<template>
  <div class="home-verify" id="LoginForm">
      <EmailVerification />
  </div>
</template>

<script>
import EmailVerification from '@/components/layout/registration/EmailVerification.vue'

export default {
  name: "verifyEmail",
  components: {
    EmailVerification
  },
};
</script>

<style scoped>
</style>
