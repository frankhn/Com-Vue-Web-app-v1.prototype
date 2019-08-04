<template>
  <div class="home" id="LoginForm">
      <login />
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/layout/registration/Login'

export default {
  name: "verifyEmail",
  components: {
    login
  },
};
</script>

<style scoped>
  
</style>
