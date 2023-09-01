<template>
  <div :class="`background-${backgroundBlue}`">
    <div class="header-background">
      <div class="header">
        <div v-if="percentBar === 90">Welcome Home My Friend</div>
        <div class="goodbye" v-if="percentBar === 100">Goodbye My Friend</div>
      </div>
    </div>

    <h2 class="heading-2">Progress Bar</h2>
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
  color: #369a28;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
}

.goodbye {
  padding-left: 70px;
  color: #09ccef;
}
.background-10 {
  background-color: #09ccef;
  color: #fff;
}

.background-20 {
  background-color: #1ea9c1;
  color: #fff;
}

.background-30 {
  background-color: #2484a7;
}

.background-40 {
  background-color: #2b5f7f;
  color: #fff;
}

.background-50 {
  background-color: #2e5968;
  color: #fff;
}

.background-60 {
  background-color: #2e495a;
  color: #fff;
}

.background-70 {
  background-color: #313f47;
  color: #fff;
}

.background-80 {
  background-color: #2d373d;
  color: #fff;
}

.background-90 {
  background-color: #5c2b7f;
  color: #fff;
}

.background-100 {
  background-color: #50254f;
  color: #fff;
}
</style>
