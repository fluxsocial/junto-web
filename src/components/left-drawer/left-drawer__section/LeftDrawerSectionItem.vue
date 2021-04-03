<template>
  <div class="left-drawer__section__item">
    <img class="left-drawer__section__item--icon" :src="setIcon" :alt="type" />
    <p class="left-drawer__section__item--title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "type"],
  computed: {
    setIcon() {
      let icon;
      switch (this.type) {
        case "feeds":
          icon = require("../../../assets/icons/feeds.png");
          break;
        case "channels":
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
.left-drawer__section__item {
  display: flex;
  align-items: center;
  &--icon {
    height: 1.4rem;
    margin-right: 0.5rem;
  }

  &--title {
    font-size: 1.7rem;
    font-weight: 500;
  }
}
</style>