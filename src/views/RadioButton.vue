<template>
  <div>
    <h2 class="heading 2">RadioButton</h2>
    <h1>Basic</h1>
    <div class="line line_block">
      <p>Selected Club: {{ selectedClub }}</p>
      <div v-for="club of footballClubs" :key="club.id">
        <Radiobutton
          :value="club.name"
          :label="club.name"
          :id="club.id"
          name="club"
          v-model:checkedValue="selectedClub"
        />
      </div>
    </div>
    <h2 class="heading-2">Disabled</h2>
    <div class="line">
      <Radiobutton
        value="Radiobutton Disabled"
        label="Radiobutton Disabled"
        id="RadiobuttonDisabled"
        name="RadiobuttonDisabled"
        :disabled="disabledRadio"
        v-model:checkedValue="disabledRadioChecked"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Radiobutton from "@/components/Radiobutton.vue";

const footballClubs = ref([
  { name: "Chelsi", id: "f1" },
  { name: "Dnipro", id: "f2" },
  { name: "Real Madrid", id: "f3" },
  { name: "Milan", id: "f4" },
]);
const selectedClub = ref("");

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<style lang="scss" scoped></style>
