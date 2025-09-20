import axios from "axios";
import { ref } from "vue";


export function useGetApi(link: string) {

    const isLoading = ref(false);
    const resposnse = ref(null);
    const apiError = ref(null);

    isLoading.value = true;
    axios
        .get(link)
        .then((res) => {
            resposnse.value = res.data.data;
            isLoading.value = false;

        })
        .catch((err) => {
            console.log(err);
            apiError.value = err.response.data.message;
            isLoading.value = false;

        });


    return {
        data: resposnse,
        isLoading,
        apiError
    }
}


