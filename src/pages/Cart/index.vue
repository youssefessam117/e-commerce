<template>
  <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
      <h2
        class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black"
      >
        Shopping Cart
      </h2>
      <div class="hidden lg:grid grid-cols-2 py-6">
        <div class="font-normal text-xl leading-8 text-gray-500">Product</div>
        <p
          class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between"
        >
          <span class="w-full max-w-[200px] text-center">product price</span>
          <span class="w-full max-w-[260px] text-center">Quantity</span>
          <span class="w-full max-w-[200px] text-center">Total</span>
        </p>
      </div>

      <div
        v-for="item in cartStore.cartData?.products"
        class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6 relative"
      >
        <button
          @click="cartStore.removeSpecificCartItem(item.product.id)"
          class="rounded-full group flex items-center justify-center focus-within:outline-red-500 absolute right-1.5 top-1"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
              cx="17"
              cy="17"
              r="17"
              fill=""
            />
            <path
              class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
              d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
              stroke="#EF4444"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
        >
          <div class="img-box">
            <img
              :src="item.product.imageCover"
              alt="perfume bottle image"
              class="xl:w-[140px] rounded-xl object-cover"
            />
          </div>
          <div class="pro-data w-full max-w-sm">
            <h5
              class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
            >
              {{ item?.product?.title }}
            </h5>
            <p
              class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center"
            >
              {{ item?.product?.category?.name }}
            </p>
            <h6
              class="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center"
            >
              ${{ item?.price }}
            </h6>
          </div>
        </div>
        <div
          class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
        >
          <h6
            class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center"
          >
            ${{ item?.price }}
          </h6>
          <div class="flex items-center w-full mx-auto justify-center">
            <button
              @click="
                cartStore.updateCartProductQuantity(
                  item.product.id,
                  item.count - 1
                )
              "
              :disabled="!cartStore.canUpdateQuantity"
              :class="{
                'bg-red-400 cursor-not-allowed': !cartStore.canUpdateQuantity,
              }"
              class="group rounded-l-full px-6 py-[18px] border cursor-pointer border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <svg
                class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  stroke-opacity="0.2"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  stroke-opacity="0.2"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <input
              v-model="item.count"
              type="text"
              class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
              @keyup.enter="
                cartStore.updateCartProductQuantity(
                  item.product.id,
                  item?.count
                )
              "
            />
            <button
              @click="
                cartStore.updateCartProductQuantity(
                  item.product.id,
                  item.count + 1
                )
              "
              :disabled="!cartStore.canUpdateQuantity"
              class="group rounded-r-full cursor-pointer px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <svg
                class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  stroke-opacity="0.2"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  stroke-opacity="0.2"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <h6
            class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center"
          >
            $ {{ item.price * item.count }}
          </h6>
        </div>
      </div>
      <div
        class="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto"
      >
        <div class="flex items-center justify-between w-full mb-6">
          <p class="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
          <h6 class="font-semibold text-xl leading-8 text-gray-900">
            ${{ cartStore.cartData?.totalCartPrice }}
          </h6>
        </div>
        <div
          class="flex items-center justify-between w-full pb-6 border-b border-gray-200"
        >
          <p class="font-normal text-xl leading-8 text-gray-400">
            Delivery Charge
          </p>
          <h6 class="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
        </div>
        <div class="flex items-center justify-between w-full py-6">
          <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">
            Total
          </p>
          <h6
            v-if="cartStore.cartData?.totalCartPrice"
            class="font-manrope font-medium text-2xl leading-9 text-indigo-500"
          >
            ${{ cartStore.cartData?.totalCartPrice + 45 }}
          </h6>
        </div>
      </div>
      <div
        class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8"
      >
        <button
          @click="cartStore.removeCartItems()"
          class="rounded-full gap-3 w-full max-w-[280px] py-4 text-center justify-center items-center bg-red-400 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-red-700"
        >
          <span> Clear Cart</span>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
              cx="17"
              cy="17"
              r="17"
              fill=""
            />
            <path
              class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
              d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
              stroke="#EF4444"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button
          @click="goToPayment"
          class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700"
        >
          Continue to Payment
          <svg
            class="ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
          >
            <path
              d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
              stroke="white"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCartStore } from "../../stores/Cart/index.ts";
import { useLoading } from "vue-loading-overlay";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const loading = useLoading({
  // options
});
onMounted(async () => {
  const loader = loading.show({
    // Optional parameters
  });
  await cartStore.getLoggedUserCartData();
  loader.hide();
});

const router = useRouter();
function goToPayment() {
  router.push({ name: "payment" });
}
</script>

<style lang="scss" scoped></style>
