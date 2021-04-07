<template>
  <div class="community-view">
    <left-drawer :community="getCurrentCommunity"></left-drawer>
    <main-view :community="getCurrentCommunity"></main-view>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import LeftDrawer from '@/components/left-drawer/LeftDrawer.vue';
import MainView from './main-view/MainView.vue';

export default defineComponent({
  components: {
    LeftDrawer,
    MainView,
  },
  computed: {
    getCurrentCommunity() {
      const store = useStore();
      return store.getters.getCurrentCommunity;
    },
  },
});
</script>

<style lang="scss" scoped>
.community-view {
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
}
</style>
