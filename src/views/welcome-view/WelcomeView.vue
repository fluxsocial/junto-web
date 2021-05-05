<template>
  <div class="welcomeView">
    <welcome-view-header></welcome-view-header>
    <div class="welcomeView__container">
      <welcome-view-left></welcome-view-left>
      <welcome-view-right></welcome-view-right>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WelcomeViewHeader from './components/WelcomeViewHeader.vue';
import WelcomeViewLeft from './components/WelcomeViewLeft.vue';
import WelcomeViewRight from './components/WelcomeViewRight.vue';

export default defineComponent({
  components: { WelcomeViewHeader, WelcomeViewLeft, WelcomeViewRight },
});
</script>

<style lang="scss" scoped>
.welcomeView {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: var(--junto-background-color);

  &__container {
    display: flex;
  }
}
</style>
