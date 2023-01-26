<template>
<div class="wrapper">
  <Header></Header>
  <div class="wrapper-content">
    <div class="container">
    <router-view />  
    
    </div>
  </div>
  <Footer></Footer>
  
  </div>
</template>

<script>
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
export default {
  components: { Header: TheHeader, Footer: TheFooter }, 
  
};
</script>

<style lang="scss"></style>
