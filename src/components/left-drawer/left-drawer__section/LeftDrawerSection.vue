<template>
  <div class="left-drawer__section">
    <channels-section
      v-if="sectionType === 'channel'"
      :community="community"
    ></channels-section>
    <feeds-section v-if="sectionType === 'feed'"></feeds-section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ChannelsSection from './ChannelsSection.vue';
import FeedsSection from './FeedsSection.vue';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<'feed' | 'channel'>,
      default: 'feed',
    },
    community: Object,
  },
  computed: {
    sectionType(): string {
      return this.type.toLowerCase();
    },
  },

  components: {
    ChannelsSection,
    FeedsSection,
  },
});
</script>

<style lang="scss">
@import '../../../assets/sass/main.scss';
.left-drawer__section {
  margin-bottom: 1.5rem;
  &--title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    &--name {
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--junto-primary-light);
    }
  }

  &--items {
    display: flex;
    flex-direction: column;
  }
}
</style>
