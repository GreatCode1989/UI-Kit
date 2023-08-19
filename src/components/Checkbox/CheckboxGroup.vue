<template>
  <div>
    <div v-for="option in options" :key="option.id">
      <Checkbox
        :label="option.name"
        :id="option.id"
        :name="name"
        :value="option.name"
        :checked="value.includes(option.id)"
        group
        @updateCheckboxGroup="check"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import Checkbox from "./Checkbox.vue";

const props = defineProps({
  value: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every((option) => Object.keys(option).includes("name"));
      const hasIdKey = value.every((option) => Object.keys(option).includes("id"));
      return hasIdKey && hasNameKey;
    },
  },
});

const emit = defineEmits(["update:value"]);

const check = (params) => {
  const updatedValue = [...props.value];
  if (params.checked) {
    updatedValue.push(params.optionId);
  } else {
    updatedValue.splice(updatedValue.indexOf(params.optionId), 1);
  }
  emit("update:value", updatedValue);
};
</script>

<style lang="scss" scoped></style>
