<template>
  <div class="mainView__topBar">
    <div class="mainView__topBar--title">
      <img class="mainView__topBar--title--icon" :src="setIcon" />
      <p class="mainView__topBar--title--name">{{ currentView.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import FeedIcon from '@/assets/icons/feeds.png';
import ChannelIcon from '@/assets/icons/hashtag.png';
import { CommunityView } from '@/store';

export default defineComponent({
  props: {
    currentView: { type: Object as PropType<CommunityView>, required: true },
  },
  computed: {
    setIcon() {
      let icon;
      switch (this.currentView.type) {
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
});
</script>

<style lang="scss">
.mainView__topBar {
  z-index: 2000;
  height: 7.5rem;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 2rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  &--title {
    display: flex;
    align-items: center;

    &--icon {
      height: 1.7rem;
      margin-right: 0.5rem;
    }

    &--name {
      font-size: 1.7rem;
      font-weight: 700;
    }
  }
}
</style>
