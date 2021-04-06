<template>
  <div class="left-drawer__section__item" @click="setCurrentCommunityView">
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
      switch (this.type.toLowerCase()) {
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
  methods: {
    setCurrentCommunityView() {
      this.$store.commit({
        type: "changeCommunityView",
        value: {
          name: this.title,
          type: this.type,
        },
      });
    },
  },
};
</script>
<style lang="scss">
.left-drawer__section__item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }

  &--icon {
    height: 1.4rem;
    margin-right: 0.5rem;
  }

  &--title {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--junto-primary);
  }
}
</style>