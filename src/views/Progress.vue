<template>
  <div :class="`background-${backgroundBlue}`">
    <div class="header-background">
      <div class="header">
        <div class="best" v-if="percentBar === 90">Best Game</div>
        <div class="goodbye" v-if="percentBar === 100">to be continued ...</div>
      </div>
    </div>

    <h2 class="heading-12">Batman History</h2>
    <div class="line line_block">
      <ProgressBar :maxWidth="'400px'" :percent="percentBar" color="success" />
      <Button label="add 10%" @click="addPercentBar" />
      <Button
        label="subtract 5%"
        color="warning"
        @click="subtractPercentBar"
        style="margin-left: 30px"
      />
      <ProgressCircle :percent="percentBar" color="second" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgressBar from "../components/Progress/ProgressBar.vue";
import ProgressCircle from "../components/Progress/ProgressCircle.vue";
import Button from "../components/Button.vue";

const backgroundBlue = ref(0);

const percentBar = ref(0);

const addPercentBar = () => {
  backgroundBlue.value += 10;
  percentBar.value += 10;
  if (percentBar.value && backgroundBlue.value > 100) {
    percentBar.value = 100;
    backgroundBlue.value = 100;
  }
};

const subtractPercentBar = () => {
  backgroundBlue.value -= 10;
  percentBar.value -= 10;
  if (percentBar.value && backgroundBlue.value <= 0) {
    percentBar.value = 0;
    backgroundBlue.value = 0;
  }
};
</script>

<style lang="scss" scoped>
.header-background {
  position: relative;
}
.header {
  position: absolute;
  top: 140px;
  left: 510px;
  font-weight: bold;
  font-size: 35px;
  color: #d2a923;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
}

.heading-12 {
  font-size: 30px;
  padding: 50px;
  color: #26c1a4;
}

.best {
  opacity: 0.5;
}

.goodbye {
  padding-left: 70px;
  color: #09ccef;
  opacity: 0.3;
}
.background-10 {
  background-image: url("../assets/1.webp");
  background-size: cover;
  color: #fff;
}

.background-20 {
  background-image: url("../assets/2.jpg");
  background-size: cover;
  color: #fff;
}

.background-30 {
  background-image: url("../assets/3.jpg");
  background-size: cover;
  color: #fff;
}

.background-40 {
  background-image: url("../assets/4.jpg");
  background-size: cover;
  color: #fff;
}

.background-50 {
  background-image: url("../assets/5.jpg");
  background-size: cover;
  color: #fff;
}

.background-60 {
  background-image: url("../assets/7.jpg");
  background-size: cover;
  color: #fff;
}

.background-70 {
  background-image: url("../assets/8.jpg");
  background-size: cover;
  color: #fff;
}

.background-80 {
  background-image: url("../assets/9.avif");
  background-size: cover;
  color: #fff;
}

.background-90 {
  background-image: url("../assets/9.jpg");
  background-size: cover;
  color: #fff;
}

.background-100 {
  background-image: url("../assets/10.jpeg");
  background-size: cover;
  color: #fff;
}
</style>
