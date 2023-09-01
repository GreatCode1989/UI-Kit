<template>
  <header class="header">
    <router-link to="/">BATMAN FOREVER</router-link>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.header {
  background: #fff;
  color: rgb(69, 168, 168);
  font-weight: bold;
  font-size: 21px;
  letter-spacing: 1px;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  z-index: 1;
  position: relative;
}
</style>
