<template>
  <div class="mainView__topBar">
    <div class="mainView__topBar--title">
      <img class="mainView__topBar--title--icon" :src="setIcon" />
      <p class="mainView__topBar--title--name">{{ currentView.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentView"],
  computed: {
    setIcon() {
      let icon;
      switch (this.currentView.type) {
        case "feed":
          icon = require("../../../assets/icons/feeds.png");
          break;
        case "channel":
          icon = require("../../../assets/icons/hashtag.png");
          break;
        default:
          icon = require("../../../assets/icons/feeds.png");
          break;
      }
      return icon;
    },
  },
};
</script>
<style lang="scss">
.mainView__topBar {
  height: 7.5rem;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 2rem;
  display: flex;
  align-items: center;
  &--title {
    display: flex;
    align-items: center;

    &--icon {
      height: 2rem;
      margin-right: 0.5rem;
    }

    &--name {
      font-size: 2rem;
      font-weight: 700;
    }
  }
}
</style>