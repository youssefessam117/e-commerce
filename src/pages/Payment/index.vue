<template>
  <div class="w-5/6 mx-auto">
    <h3 class="text-2xl font-extralight">pay in your prefere way:</h3>
    <p
      v-if="authStore.apiErrors"
      class="text-red-600 bg-red-200 p-3 text-center"
    >
      {{ authStore.FieldErrorSelected }}
      <span v-if="authStore.FieldErrorSelected">:</span>
      {{ authStore.apiErrors }}
    </p>
    <Form @submit="getUserDataValues" :validation-schema="paymentSchema">
      <div v-for="item in fieldsData">
        <label
          :for="item.name"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          {{ item.label }} :</label
        >
        <Field
          :type="item.type"
          :id="item.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          :name="item.name"
        />
        <ErrorMessage
          :name="item.name"
          class="text-red-600 bg-red-200 p-3 text-center"
          as="div"
        />
      </div>

      <button
        class="bg-[#0aad0a] py-2 px-5 text-white rounded-md mt-3 ms-auto block"
        type="submit"
      >
        pay online
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { ref } from "vue";
import { object, string } from "yup";
import { useAuthStore } from "../../stores/Auth/index.ts";
import axios from "axios";
import { useCartStore } from "../../stores/Cart/index.ts";

const cartStore = useCartStore();
const authStore = useAuthStore();

const fieldsData = ref([
  {
    name: "details",
    label: "details",
    type: "text",
  },
  {
    name: "city",
    label: "city",
    type: "text",
  },
  {
    name: "phone",
    label: "phone",
    type: "tel",
  },
]);

const paymentSchema = object({
  details: string().required("details is required and u must do it "),
  city: string().required("details is required and u must do it "),
  phone: string()
    .matches(
      /^(010|011|012|015)[0-9]{8}$/,
      "phone is not valid must be egyptian phone number"
    )
    .required(),
});

function getUserDataValues(values) {
  console.log("values", values);

  const siteUrl = window.location.origin;
  axios
    .post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartStore.cartId}?url=${siteUrl}`,
      {
        details: values.details,
        city: values.city,
        phone: values.phone,
      },
      {
        headers: {
          token: authStore.token,
        },
      }
    )
    .then((response) => {
      console.log(response);
      location.href = response.data.session.url;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<style lang="scss" scoped></style>
