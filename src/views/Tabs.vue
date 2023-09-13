<script setup>
import { ref } from "vue";
import Tabs from "../components/Tabs.vue";

const tabs = [
  { name: "About", label: "о Проекте" },
  { name: "Vue3", label: "о Vue" },
  { name: "React", label: "о React" },
];

const selectTab = ref("Vue3");

const changeTab = (tabName) => {
  selectTab.value = tabName;
};
</script>

<template>
  <h2 class="heading-1">Tabs</h2>
  <Tabs :names="tabs" :selectTab="selectTab" @changeTab="changeTab">
    <div v-if="selectTab === 'About'">Lorem ipsum dolor sit amet.</div>
    <div v-if="selectTab === 'Vue3'">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, id.
    </div>
    <div v-if="selectTab === 'React'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque. Laborum iusto
      odit minus incidunt.
    </div>
  </Tabs>
</template>

<style lang="scss" scoped></style>
