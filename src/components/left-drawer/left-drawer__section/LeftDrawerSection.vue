<template>
  <div class="left-drawer__section">
    <p class="left-drawer__section--title">{{ title }}</p>
    <left-drawer-section-item
      title="main"
      :type="title.toLowerCase()"
    ></left-drawer-section-item>
  </div>
</template>
<script>
import LeftDrawerSectionItem from "./LeftDrawerSectionItem.vue";
export default {
  props: {
    title: String,
  },
  components: {
    LeftDrawerSectionItem,
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/main.scss";
.left-drawer__section {
  margin-bottom: 3rem;
  &--title {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    color: $junto-primary-light;
  }
}
</style>