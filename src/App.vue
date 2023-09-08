<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-w-full min-h-full">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
