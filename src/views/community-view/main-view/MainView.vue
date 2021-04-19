<template>
  <div class="mainView" v-if="community != null">
    <main-view-top-bar :currentView="getCurrentView"></main-view-top-bar>
    <feed-view v-if="getCurrentView.type === 'feed'"> </feed-view>
    <channel-view v-if="getCurrentView.type === 'channel'"> </channel-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore, CommunityView, Community } from '@/store';
import MainViewTopBar from './MainViewTopBar.vue';
import FeedView from './feed-view/FeedView.vue';
import ChannelView from './channel-view/ChannelView.vue';

export default defineComponent({
  props: {
    community: Object as PropType<Community>,
  },
  data() {
    return {
      currentView: 'main',
      currentViewType: 'feed',
      selectedComponent: 'feed-view',
    };
  },
  components: {
    MainViewTopBar,
    FeedView,
    ChannelView,
  },
  computed: {
    getCurrentView(): CommunityView {
      const store = useStore();
      return store.getters.getCurrentCommunityView;
    },
  },
});
</script>

<style lang="scss">
.mainView {
  width: 100%;
  height: 100%;
  background-color: var(--junto-background-color);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}
</style>
