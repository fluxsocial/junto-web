<template>
  <div class="app-view">
    <left-nav></left-nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftNav from '@/components/left-nav/LeftNav.vue';

export default defineComponent({
  components: {
    LeftNav,
  },
  created() {
    // TODO: Check if user is logged in
    const isLoggedIn = true;
    if (!isLoggedIn) {
      this.$router.push('/signup');
    }
  },
});
</script>

<style lang="scss" scoped>
.app-view {
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  background-color: var(--junto-background-color);
}
</style>
