<template>
  <div>
    <h2 class="heading-2">Progress Bar</h2>
    <ProgressBar :maxWidth="'400px'" :percent="percentBar" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgressBar from "../components/Progress/ProgressBar.vue";

const percentBar = ref(40);
</script>

<style lang="scss" scoped></style>
