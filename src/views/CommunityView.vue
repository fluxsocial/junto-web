<template>
  <div class="community-view">
    <left-nav></left-nav>
    <left-drawer></left-drawer>
  </div>
</template>

<script>
import LeftNav from "./../components/left-nav/LeftNav.vue";
import LeftDrawer from "./../components/left-drawer/LeftDrawer.vue";
export default {
  components: {
    LeftNav,
    LeftDrawer,
  },
};
</script>

<style lang="scss" scoped>
.community-view {
  display: flex;
}
</style>