<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6"
  >
    <Product :productData="productItem" v-for="productItem in products" />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useLoading } from "vue-loading-overlay";
import { IProduct } from "../../types/index.ts";
import Product from "./Product.vue";

const isLoading = ref(false);
//

const products = ref<IProduct[]>([]);

const loading = useLoading({
  // options
});
function getAllProducts() {
  const loader = loading.show({
    // Optional parameters
  });
  isLoading.value = true;
  axios
    .get("https://ecommerce.routemisr.com/api/v1/products")
    .then((res) => {
      console.log(res.data);
      products.value = res.data.data;
      isLoading.value = false;
      loader.hide();
    })
    .catch((err) => {
      console.log(err);
      isLoading.value = false;
      loader.hide();
    });
}

onMounted(() => {
  getAllProducts();
});
</script>

<style lang="scss" scoped></style>
