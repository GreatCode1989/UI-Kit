<template>
  <div :class="['sidebar', { sidebar_isopen: openSideBar }]">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  openSideBar: {
    type: Boolean,
    required: true,
  },
});

const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Button", href: "/button" },
  { name: "Checkbox", href: "/checkbox" },
  { name: "Radiobutton", href: "/radiobutton" },
  { name: "Progress", href: "/progress" },
  { name: "Input", href: "/input" },
  { name: "Tabs", href: "/tabs" },
  { name: "Table", href: "/table" },
]);
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    color: blue;
    border-radius: 12px;
    transition: 0.2s;
    font-weight: bold;
    padding-left: 10px;
    margin-bottom: 10px;
    border: 1px transparent;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      border: 1px solid var(--success);
      transition: width 0.1s ease-in-out;
    }
    &:hover {
      color: var(--success);
    }

    &:hover:before {
      width: 50%;
    }
  }
}
</style>
