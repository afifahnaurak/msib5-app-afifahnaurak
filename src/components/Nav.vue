<script setup lang="ts"></script>

<template>
  <div
    class="flex justify-between items-center bg-primary w-min-full px-32 py-2"
  >
    <div class="flex justify-between">
      <div class="flex flex-start gap-x-2">
        <img src="src/assets/Content.svg" width="30" />
        <img src="src/assets/Gits1.svg" width="110" />
      </div>
      <div>
        <nav
          class="font-poppins flex justify-evenly text-base gap-x-6 py-4 text-gray-600 mt-2"
        >
          <router-link
            :to="'/home'"
            class="nav-item font-poppins font-medium"
            :class="{ 'font-bold': $route.path === '/home' }"
            >Home</router-link
          >
          <router-link
            :to="'/todos'"
            class="nav-item font-poppins font-medium"
            :class="{ 'font-bold': $route.path === '/todos' }"
            >Todo</router-link
          >
          <router-link
            :to="'/about'"
            class="nav-item font-poppins font-medium"
            :class="{ 'font-bold': $route.path === '/about' }"
            >About</router-link
          >
        </nav>
      </div>
    </div>
    <div>
      <nav
        class="font-poppins flex justify-evenly text-base gap-x-6 py-4 text-gray-600"
      >
        <router-link :to="'/'" class="nav-item font-poppins font-medium mt-2"
          >Log in</router-link
        >
        <router-link
          :to="'/'"
          class="nav-item font-poppins font-medium bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-md"
          >Sign up</router-link
        >
      </nav>
    </div>
  </div>
</template>
