<template>
  <div class="main-view">
    <main-view-top-bar></main-view-top-bar>
    <component :is="selectedComponent"> </component>
  </div>
</template>

<script>
import MainViewTopBar from "./MainViewTopBar.vue";
import FeedView from "./FeedView.vue";
import ChannelView from "./ChannelView.vue";
export default {
  data() {
    return {
      selectedComponent: "feed-view",
    };
  },
  components: {
    MainViewTopBar,
    FeedView,
    ChannelView,
  },
};
</script>

<style lang="scss">
.main-view {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>