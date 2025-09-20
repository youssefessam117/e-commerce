<template>
  <div>ProductDetails</div>
  <div class="flex">
    <div class="w-2/5">
      <img :src="productData?.imageCover" alt="" />
    </div>
    <div class="w-3/5 px-3">
      <h2 class="font-medium text-2xl my-3">
        {{ productData?.title }}
      </h2>
      <p class="text-gray-500 my-3">
        {{ productData?.description }}
      </p>
      <p class="font-extralight">{{ productData?.category.name }}</p>
      <div class="flex justify-between my-3">
        <span class="flex gap-2">
          <span
            :class="{
              'line-through text-red-400': productData?.priceAfterDiscount,
            }"
            >{{ productData?.price }} EGP</span
          >
          <span v-if="productData?.priceAfterDiscount" class="text-main"
            >{{ productData?.priceAfterDiscount }} EGP</span
          >
        </span>
        <span
          >{{ productData?.ratingsAverage }}
          <i class="fa-solid fa-star text-amber-400"></i
        ></span>
      </div>
      <button class="bg-main py-2 px-5 rounded w-full text-white">
        <i class="fa-solid fa-cart-plus"></i> Add to cart
      </button>
    </div>
  </div>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="true"
    loader="dots"
    color="#3498db"
  />
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { IProduct } from "../../types/index.ts";
import Loading from "vue-loading-overlay";

const isLoading = ref(false);
const route = useRoute();

const productData = ref<IProduct>(null);

function getProductDetails() {
  isLoading.value = true;
  axios
    .get(`https://ecommerce.routemisr.com/api/v1/products/${route.params.id}`)
    .then((res) => {
      console.log(res.data);
      productData.value = res.data.data;
      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
      isLoading.value = false;
    });
}

onMounted(() => {
  getProductDetails();
});
</script>

<style lang="scss" scoped></style>
