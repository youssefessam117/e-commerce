<template>
  <nav class="bg-gray-200 fixed top-0 right-0 left-0 z-50 h-16">
    <div class="container mx-auto flex justify-between items-center h-full">
      <div class="flex gap-5 items-center">
        <router-link exact-active-class="" :to="{ name: 'home' }">
          <img src="../assets/images/freshcart-logo.svg" alt="" />
        </router-link>
        <div v-if="authStore.isLogedIn" class="flex gap-3 text-gray-500">
          <router-link
            exact-active-class="bg-[#0aad0a] text-white rounded-md"
            class="p-2"
            :to="{ name: 'home' }"
          >
            Home
          </router-link>
          <router-link
            exact-active-class="bg-[#0aad0a] text-white rounded-md"
            class="p-2"
            :to="{ name: 'cart' }"
          >
            Cart
          </router-link>
          <router-link
            exact-active-class="bg-[#0aad0a] text-white rounded-md"
            class="p-2"
            :to="{ name: 'product' }"
          >
            Product
          </router-link>
          <router-link
            exact-active-class="bg-[#0aad0a] text-white rounded-md"
            class="p-2"
            :to="{ name: 'category' }"
          >
            Category
          </router-link>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <ul class="flex gap-2 items-center text-gray-900">
          <li class="cursor-pointer"><i class="fa-brands fa-youtube"></i></li>
          <li class="cursor-pointer"><i class="fa-brands fa-linkedin"></i></li>
          <li class="cursor-pointer"><i class="fa-brands fa-facebook"></i></li>
          <li class="cursor-pointer"><i class="fa-brands fa-instagram"></i></li>
          <li class="cursor-pointer"><i class="fa-brands fa-twitter"></i></li>
          <li class="cursor-pointer mx-3 relative">
            <i class="fa-solid fa-cart-shopping text-2xl"></i>
            <span
              v-if="cartStore.numOfCartItems"
              class="absolute top-0 right-0 px-1.5 py-1 bg-main flex justify-center items-center rounded-lg text-white"
              >{{ cartStore.numOfCartItems }}</span
            >
          </li>
        </ul>
        <div class="text-gray-500 flex gap-3 items-center">
          <span
            v-if="authStore.isLogedIn"
            @click="authStore.logOutUSer"
            class="cursor-pointer"
          >
            logout
          </span>
          <template v-else>
            <router-link :to="{ name: 'login' }">login</router-link>
            <router-link :to="{ name: 'register' }">Register</router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/Auth/index.ts";
import { useCartStore } from "../stores/Cart/index.ts";

const authStore = useAuthStore();
const cartStore = useCartStore();
</script>

<style scoped>
.router-link-active {
}
/* .router-link-exact-active {
  background-color: #0aad0a;
  border-radius: 5px;
  color: white;
  transition: all 0.3s ease-in-out;
} */
</style>
