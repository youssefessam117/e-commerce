import axios from "axios";
import { ref } from "process";



export function usePostApi(link: string, body: {}) {

    const isLoading = ref(false);
    const resposnse = ref(null);
    const apiError = ref(null);

    isLoading.value = true;
    axios
        .post(link, {
            body
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
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