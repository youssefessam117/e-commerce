import { ref } from "vue";


export function useAlert() {
    const isAlert = ref(false);

    const startAlert = () => {
        isAlert.value = true;
    };

    const closeAlert = () => {
        isAlert.value = false;
    };


    return { isAlert, startAlert, closeAlert };
}