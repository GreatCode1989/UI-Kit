<template>
    <header class="header">
    <router-link to="/">UI Kit Vue3</router-link>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';
.header {
  background: #fff;
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}
</style>