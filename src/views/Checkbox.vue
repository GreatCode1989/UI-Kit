<template>
  <div>
    <h2 class="heading 2">Checkbox Active</h2>
    <div class="line">
      <Checkbox
        label="Checkbox Active"
        id="checkboxActive"
        name="checkBoxActive"
        value="I like it"
        v-model:checked="checkboxActive"
      />
    </div>
    <h2 class="heading 2">Checkbox Disabled</h2>
    <div class="line">
      <Checkbox
        label="Checkbox Disabled"
        id="checkboxDisabled"
        name="checkBoxDisabled"
        value="I like it"
        :disabled="checkboxDisabled"
        v-model:checked="checkboxDisabledChecked"
      />
    </div>
    <h2 class="heading 2">Checkbox Group</h2>
    <div class="line line_block">
      <p>Selected Heroes: {{ selectedHeroes }}</p>
      <CheckboxGroup
        :options="listOfHeroes"
        name="heroes"
        v-model:value="selectedHeroes"
      />
    </div>
    <h2 class="heading 2">Switch</h2>
    <div class="line">
      <Checkbox
        :label="switchProfessional ? 'I am Frontend Developer' : 'I am Backend Developer'"
        id="switch "
        name="switch"
        value="I like it"
        type="switch"
        v-model:checked="switchProfessional"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Checkbox from "../components/Checkbox/Checkbox.vue";
import CheckboxGroup from "../components/Checkbox/CheckboxGroup.vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfHeroes = ref([
  { name: "Spider-man", id: "h1" },
  { name: "Tor", id: "h2" },
  { name: "Batman", id: "h3" },
  { name: "Loki", id: "h4" },
]);

const selectedHeroes = ref([]);

const switchProfessional = ref(false);
</script>

<style lang="scss" scoped></style>
