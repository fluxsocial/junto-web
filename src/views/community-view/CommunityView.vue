<template>
  <div class="community-view">
    <left-drawer></left-drawer>
    <main-view></main-view>
  </div>
</template>

<script>
import LeftDrawer from "../../components/left-drawer/LeftDrawer.vue";
import MainView from "../../components/main-view/MainView.vue";
export default {
  components: {
    LeftDrawer,
    MainView,
  },
};
</script>

<style lang="scss" scoped>
.community-view {
  height: 100vh;
  width: 100%;
  display: flex;
}
</style>