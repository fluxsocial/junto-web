<template>
  <div class="left-drawer__section">
    <channels-section
      v-if="sectionType === 'channels'"
      :community="community"
    ></channels-section>
    <feeds-section v-if="sectionType === 'feeds'"></feeds-section>
  </div>
</template>
<script>
import ChannelsSection from "./ChannelsSection.vue";
import FeedsSection from "./FeedsSection.vue";

export default {
  props: {
    type: String,
    community: Object,
  },
  computed: {
    sectionType() {
      return this.type.toLowerCase();
    },
  },

  components: {
    ChannelsSection,
    FeedsSection,
  },
};
</script>

<style lang="scss">
@import "../../../assets/sass/main.scss";
.left-drawer__section {
  margin-bottom: 1.5rem;
  &--title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    &--name {
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      color: $junto-primary-light;
    }
  }

  &--items {
    display: flex;
    flex-direction: column;
  }
}
</style>