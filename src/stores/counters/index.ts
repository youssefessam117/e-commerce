import { defineStore } from "pinia";
import { computed, ref } from "vue";



export const useCounterStore = defineStore('counters', () => {


    const counter = ref(0)


    function incrementCounter() {
        counter.value++
    }

    const counterPlusFive = computed(() => counter.value + 5)


    return {
        counter,
        incrementCounter,
        counterPlusFive
    }


})