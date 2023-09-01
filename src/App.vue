<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto px-24 text-white min-w-full min-h-full">
    <header>
      <nav class="font-body flex justify-evenly text-xl space-x-12 py-4">
        <router-link :to="'/'" class="nav-item font-poppins" :class="{ 'font-bold': $route.path === '/' }">Home</router-link>
        <router-link :to="'/todos'" class="nav-item font-poppins" :class="{ 'font-bold': $route.path === '/todos' }">Todo</router-link>
        <router-link :to="'/about'" class="nav-item font-poppins" :class="{ 'font-bold': $route.path === '/about' }">About</router-link>
      </nav>
      <hr class="w-10/12 mx-auto my-auto">
    </header>
    <router-view />
  </div>
</template>


<style scoped>

</style>