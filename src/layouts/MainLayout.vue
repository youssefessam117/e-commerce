<template>
  <Navbar />
  <div class="mt-20 px-5">
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style lang="scss" scoped></style>
