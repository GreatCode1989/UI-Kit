>

<script setup>
import Button from "@/components/Button.vue";
import { ref, computed } from "vue";
import Input from "../components/Input.vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
} from "@vuelidate/validators";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");
const frontendField = ref("");

const mustBeFrontend = (value) => value.includes("frontend");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage("Минимальная длина: 3 символа", minLength(3)),
  },
  emailField: {
    email: helpers.withMessage("Вы ввели неправельный email", email),
  },
  luckyField: {
    maxLength: helpers.withMessage("Максимальная длина: 2 символа", maxLength(2)),
    numeric: helpers.withMessage("Вы можете ввести только цифры", numeric),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(
      "Пароли не совпадают",
      sameAs(passwordField.value)
    ),
  },
  frontendField: {
    frontendField: helpers.withMessage(
      "Строка должна содержать frontend",
      mustBeFrontend
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  confirmPasswordField,
  frontendField,
});

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  alert("form submitted");
};
</script>

<template>
  <h2 class="heading 2">Input</h2>

  <form @submit.prevent="submitForm">
    <Input
      label="your name"
      name="name"
      placeholder="input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      label="your email"
      name="email"
      placeholder="input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      label="your lucky number"
      name="lucky"
      placeholder="input your lucky"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"
    />
    <Input
      label="your poassword"
      name="password"
      placeholder="input your password"
      v-model:value="passwordField"
      type="password"
    />
    <Input
      label="Please confirm password "
      name="confirm"
      placeholder="confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
      type="password"
    />
    <Input
      label="Frontend"
      name="frontend"
      placeholder="frontend"
      v-model:value="v.frontendField.$model"
      :error="v.frontendField.$errors"
    />
    <Button label="submit" color="primary"></Button>
  </form>
</template>

<style lang="scss" scoped></style>
