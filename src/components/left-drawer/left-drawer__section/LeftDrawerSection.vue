<template>
  <div class="left-drawer__section">
    <div class="left-drawer__section--title">
      <p class="left-drawer__section--title--name">{{ title }}</p>

      <create-channel-icon
        v-if="title.toLowerCase() === 'channels'"
      ></create-channel-icon>
    </div>
    <left-drawer-section-item
      title="main"
      :type="title.toLowerCase()"
    ></left-drawer-section-item>
  </div>
</template>
<script>
import LeftDrawerSectionItem from "./LeftDrawerSectionItem.vue";
import CreateChannelIcon from "./create-channel/CreateChannelIcon.vue";
export default {
  props: {
    title: String,
  },
  components: {
    LeftDrawerSectionItem,
    CreateChannelIcon,
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/main.scss";
.left-drawer__section {
  margin-bottom: 3rem;
  &--title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &--name {
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      color: $junto-primary-light;
    }
  }
}
</style>