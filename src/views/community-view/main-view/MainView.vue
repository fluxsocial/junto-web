<template>
  <div class="mainView" v-if="community != null">
    <main-view-top-bar :currentView="currentView"></main-view-top-bar>
    <feed-view v-if="currentView.type === 'feed'"></feed-view>
    <channel-view v-if="currentView.type === 'channel'"></channel-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import communities from '@/data/communities';
import MainViewTopBar from './MainViewTopBar.vue';
import FeedView from './feed-view/FeedView.vue';
import ChannelView from './channel-view/ChannelView.vue';

export default defineComponent({
  components: {
    MainViewTopBar,
    FeedView,
    ChannelView,
  },
  computed: {
    community() {
      const { communityId } = this.$route.params;
      return communities.find((c) => c.id === communityId);
    },
    currentView() {
      const { communityId, channelId } = this.$route.params;
      const community = communities.find((c) => c.id === communityId);
      return community?.channels.find((c) => c.id === channelId);
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
