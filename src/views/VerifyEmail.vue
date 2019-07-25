<template>
  <div class="home" id="LoginForm">
      <EmailVerification />
  </div>
</template>

<script>
// @ is an alias to /src
import EmailVerification from '@/components/layout/registration/EmailVerification.vue';

export default {
  components: {
    EmailVerification
  },
};
</script>

<style scoped>
  /* *{
    background-image: url(../assets/background/p.jpg);
    background-repeat:no-repeat; 
    background-position:center; 
    background-size:cover; 
    padding:10px;
} */
</style>
