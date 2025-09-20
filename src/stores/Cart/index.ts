import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "../Auth";
import { toast } from "vue3-toastify";
import { ref } from "vue";
import { CartData } from "@/types";



export const useCartStore = defineStore('cart', () => {


    const cartData = ref<CartData>(null)

    const numOfCartItems = ref<number>(0)
    const cartId = ref<string>(null)


    const authStore = useAuthStore();
    const canUpdateQuantity = ref(true);

    function addToCart(productID: string) {
        axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
            productId: productID
        }, {
            headers: {
                token: authStore.token,
            }
        }).then((response) => {
            toast(response.data.message, {
                theme: "colored",
                type: "success",
                transition: "zoom",
                dangerouslyHTMLString: true,
            });
            getLoggedUserCartData();
        }).catch((error) => {
            toast(error.response.data.message, {
                theme: "colored",
                type: "error",
                transition: "zoom",
                dangerouslyHTMLString: true,
            });
        });
    }

    async function getLoggedUserCartData() {
        axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
            headers: {
                token: authStore.token,
            }
        }).then((response) => {
            cartData.value = response.data.data;
            numOfCartItems.value = response.data.numOfCartItems;
            cartId.value = response.data.cartId;


        }).catch((error) => {
            console.log(error.response.data);
        });
    }


    function removeSpecificCartItem(productID: string) {

        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productID}`, {
            headers: {
                token: authStore.token,
            }
        }).then((response) => {
            toast(response.data.message, {
                theme: "colored",
                type: "success",
                transition: "zoom",
                dangerouslyHTMLString: true,
            });
            // cartData.value = response.data.data;
            getLoggedUserCartData();
        }).catch((error) => {
            toast(error.response.data.message, {
                theme: "colored",
                type: "error",
                transition: "zoom",
                dangerouslyHTMLString: true,
            });
        });

    }



    function removeCartItems() {

        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/`, {
            headers: {
                token: authStore.token,
            }
        }).then((response) => {
            toast(response.data.message, {
                theme: "colored",
                type: "success",
                transition: "zoom",
                dangerouslyHTMLString: true,
            });
            // cartData.value = response.data.data;
            getLoggedUserCartData();
        }).catch((error) => {
            toast(error.response.data.message, {
                theme: "colored",
                type: "error",
                transition: "zoom",
                dangerouslyHTMLString: true,
            });
        });

    }



    function updateCartProductQuantity(productID: string, count: number) {
        canUpdateQuantity.value = false;
        axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productID}`, {
            count
        }, {
            headers: {
                token: authStore.token,
            }
        }).then((response) => {

            toast(response.data.status, {
                theme: "colored",
                type: "success",
                transition: "zoom",
                dangerouslyHTMLString: true,
            });
            // cartData.value = response.data.data;
            getLoggedUserCartData();
            canUpdateQuantity.value = true;
        }).catch((error) => {
            canUpdateQuantity.value = true;
            toast(error.response.data.message, {
                theme: "colored",
                type: "error",
                transition: "zoom",
                dangerouslyHTMLString: true,
            });

        });
    }


    return { addToCart, getLoggedUserCartData, cartData, cartId, numOfCartItems, removeSpecificCartItem, removeCartItems, updateCartProductQuantity, canUpdateQuantity }
})