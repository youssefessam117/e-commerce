<template>
  <div>Home Slider Main</div>
  <Carousel enabled="true" autoplay="500" v-bind="carouselConfig">
    <Slide v-for="category in categories" :key="category.id" class="flex-col">
      <div>
        <img :src="category.image" :alt="category.name" class="w-full" />
      </div>
      <div>
        <h3 class="text-center text-lg font-bold">{{ category.name }}</h3>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 4,
  wrapAround: true,
  height: "250",
};
const categories = ref([]);
function getAllCategories() {
  axios
    .get("https://ecommerce.routemisr.com/api/v1/categories")
    .then((res) => {
      categories.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  getAllCategories();
});
</script>

<style scoped>
:deep(.carousel__slide) {
  /* padding: 0 10px; */
  background-color: lightblue;
  height: auto;
}
</style>
