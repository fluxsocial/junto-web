<template>
  <div class="left-drawer__section__item" @click="setCurrentCommunityView">
    <img class="left-drawer__section__item--icon" :src="setIcon" :alt="type" />
    <p class="left-drawer__section__item--title">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from '@/store';
import FeedIcon from '@/assets/icons/feeds.png';
import ChannelIcon from '@/assets/icons/hashtag.png';

export default defineComponent({
  props: {
    title: String,
    type: String as PropType<'feed' | 'channel' | undefined>,
  },
  computed: {
    setIcon(): any {
      let icon;
      switch (this.type?.toLowerCase()) {
        case 'feed':
          icon = FeedIcon;
          break;
        case 'channel':
          icon = ChannelIcon;
          break;
        default:
          icon = FeedIcon;
          break;
      }
      return icon;
    },
  },
  methods: {
    setCurrentCommunityView(): void {
      const store = useStore();
      store.commit({
        type: 'changeCommunityView',
        value: {
          name: this.title,
          type: this.type,
        },
      });
    },
  },
});
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
  }
}
</style>
