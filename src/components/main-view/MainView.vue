<template>
  <div class="mainView">
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
.mainView {
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>