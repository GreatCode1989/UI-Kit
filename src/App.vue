<script setup>
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue';
import {ref} from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <div class="containet">
  <div class="sidebar-toggle" @click="toggleMenu">&#8592;</div>
  <Header/>
  <Sidebar :openSideBar="isOpenMenu"/>
    <div :class="['content', {content_full: !isOpenMenu}]">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
