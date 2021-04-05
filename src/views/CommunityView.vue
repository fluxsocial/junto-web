<template>
  <div class="community-view">
    <left-nav></left-nav>
    <left-drawer></left-drawer>
    <main-view></main-view>
  </div>
</template>

<script>
import LeftNav from "./../components/left-nav/LeftNav.vue";
import LeftDrawer from "./../components/left-drawer/LeftDrawer.vue";
import MainView from "./../components/main-view/MainView.vue";
export default {
  components: {
    LeftNav,
    LeftDrawer,
    MainView,
  },
};
</script>

<style lang="scss" scoped>
.community-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  z-index: 1000;
}
</style>