import { IUserData } from "@/types/authStoreTypes";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";



export const useAuthStore = defineStore('auth', () => {


    const router = useRouter();

    const token = ref<string>('')
    const isLoading = ref(false)
    const apiErrors = ref();
    const FieldErrorSelected = ref();
    const userData = ref<IUserData>();
    const isLogedIn = computed(() => {
        return token.value ? true : false;
    });

    function login(values: {
        email: string,
        password: string
    }) {
        isLoading.value = true;
        axios
            .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                token.value = res.data.token;
                userData.value = res.data.user;
                apiErrors.value = null;
                FieldErrorSelected.value = null;
                router.push({ name: "home" });
                isLoading.value = false;
            })
            .catch((err) => {
                console.log(err);

                apiErrors.value =
                    err.response.data?.errors?.msg ?? err.response.data.message;

                FieldErrorSelected.value = err.response.data.errors
                    ? err.response.data.errors.param
                    : null;
                isLoading.value = false;
            });
    }


    function registerUser(values) {
        axios
            .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                token.value = res.data.token;
                userData.value = res.data.user;
                apiErrors.value = null;
                FieldErrorSelected.value = null;
                router.push({ name: "home" });
            })
            .catch((err) => {
                console.log(err);

                apiErrors.value =
                    err.response.data?.errors?.msg ?? err.response.data.message;

                FieldErrorSelected.value = err.response.data.errors
                    ? err.response.data.errors.param
                    : null;
            });

        console.log(values);
    }

    function getDataFromLocalStorage() {
        if (localStorage.getItem("token")) {
            token.value = localStorage.getItem("token")!;

        }
        if (localStorage.getItem("user")) {
            userData.value = JSON.parse(localStorage.getItem("user")!);
        }
    }


    function logOutUSer() {
        isLoading.value = true;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        token.value = "";
        userData.value = null;
        isLoading.value = false;
        router.push({ name: "login" });
    }






    return {
        login,
        registerUser,
        getDataFromLocalStorage,
        logOutUSer,
        token,
        isLoading,
        apiErrors,
        FieldErrorSelected,
        userData,
        isLogedIn

    }



})