<template>
  <HomeSliderMain />
  <HomeProdects />
</template>

<script setup>
import HomeProdects from "../../components/Home/HomeProdects.vue";
import HomeSliderMain from "../../components/Home/HomeSliderMain.vue";
import { useGetApi } from "../../composbles/useGetApi.ts";

const { apiError, data, isLoading } = useGetApi(
  "https://ecommerce.routemisr.com/api/v1/products"
);
console.log(data.value);
</script>

<style lang="scss" scoped></style>
