<template>
  <div class="w-5/6 mx-auto">
    <h3 class="text-2xl font-extralight">Register Now:</h3>
    <p
      v-if="authStore.apiErrors"
      class="text-red-600 bg-red-200 p-3 text-center"
    >
      {{ authStore.FieldErrorSelected }}
      <span v-if="authStore.FieldErrorSelected">:</span>
      {{ authStore.apiErrors }}
    </p>
    <Form @submit="getUserDataValues" :validation-schema="userSchema">
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
      >
        Register
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { ref } from "vue";
import { object, ref as refYup, string } from "yup";
import { useAuthStore } from "../../stores/Auth/index.ts";

const authStore = useAuthStore();

const fieldsData = ref([
  {
    name: "name",
    label: "name",
    type: "text",
  },
  {
    name: "email",
    label: "email",
    type: "email",
  },
  {
    name: "password",
    label: "password",
    type: "password",
  },
  {
    name: "rePassword",
    label: "rePassword",
    type: "password",
  },
  {
    name: "phone",
    label: "phone",
    type: "tel",
  },
]);

const userSchema = object({
  name: string().required("name is required and u must do it "),
  email: string().email().required(),
  password: string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
      "password is weak and must be 6 charachters and contain 1 char and number "
    ),
  rePassword: string()
    .required()
    .oneOf([refYup("password")]),
  phone: string()
    .matches(
      /^(010|011|012|015)[0-9]{8}$/,
      "phone is not valid must be egyptian phone number"
    )
    .required(),
});

function getUserDataValues(values) {
  authStore.registerUser(values);
}
</script>

<style lang="scss" scoped></style>
