<template>
  <div></div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Array,
    required: false,
  },
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "300px",
  },
});
</script>

<style lang="scss" scoped></style>
