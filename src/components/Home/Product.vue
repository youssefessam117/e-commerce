<template>
  <div @click="goToProductDetails(productData.id)" class="cursor-pointer">
    <img class="w-full" :src="productData.imageCover" alt="" />
    <span class="text-main">{{ productData.category.name }}</span>
    <h3 class="font-bold">
      {{ productData.title.split(" ").slice(0, 2).join(" ") }}
    </h3>
    <div class="flex justify-between">
      <span class="flex gap-2">
        <span
          :class="{
            'line-through text-red-400': productData.priceAfterDiscount,
          }"
          >{{ productData.price }} EGP</span
        >
        <span v-if="productData.priceAfterDiscount" class="text-main"
          >{{ productData.priceAfterDiscount }} EGP</span
        >
      </span>
      <span
        ><i class="fa-solid fa-star text-amber-400"></i
        ><span>{{ productData.ratingsAverage }}</span></span
      >
    </div>
    <button
      @click.stop="cartStore.addToCart(productData.id)"
      class="bg-sky-400 text-white p-3"
    >
      <i class="fa-solid fa-cart-plus"></i> Add to cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { IProduct } from "../../types/index.ts";
import { useCartStore } from "../../stores/Cart/index.ts";

defineProps<{
  productData: IProduct;
}>();

const cartStore = useCartStore();

const router = useRouter();

function goToProductDetails(id: string) {
  // navigate to product details page
  router.push(`/product/${id}`);
  //   router.push({ name: "product", params: { id } });
}
</script>

<style lang="scss" scoped></style>
