<template>
  <div>products</div>
  <h2>{{ counterStore.counter }}</h2>
  <h3>{{ counterStore.counterPlusFive }}</h3>
  <button
    class="bg-blue-300 p-5 rounded-2xl"
    @click="counterStore.incrementCounter"
  >
    increment
  </button>
</template>

<script setup lang="ts">
import { useCounterStore } from "../../stores/counters/index.ts";

const counterStore = useCounterStore();
console.log(counterStore.counter);
</script>

<style lang="scss" scoped></style>
