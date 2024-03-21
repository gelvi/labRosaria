<template>
  <div class="home">
    <img class="shopLogo garnier-logo" alt="Shop logo" src="../assets/garnierLogo.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.garnier-logo {

  margin-left: 10px; /* Adjust margin as needed */
  width: 200px; /* Adjust the width as needed */
  height: auto;
}
</style>