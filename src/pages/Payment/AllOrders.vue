<template>
  <div>all orders</div>
</template>

<script setup lang="ts">
import { jwtDecode } from "jwt-decode";
import { onMounted } from "vue";

onMounted(() => {
  const decode = jwtDecode(localStorage.getItem("token"));
  console.log(decode);
});














</script>

<style lang="scss" scoped></style>
