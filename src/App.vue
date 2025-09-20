<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore } from "./stores/Auth/index.ts";
import { useCartStore } from "./stores/Cart/index.ts";

const authStore = useAuthStore();

const cartStore = useCartStore();

onMounted(() => {
  authStore.getDataFromLocalStorage();
  cartStore.getLoggedUserCartData();
});
</script>

<template>
  <router-view />
</template>

<style scoped></style>
