<template>
  <div class="community-view">
    <left-drawer :community="currentCommunity"></left-drawer>
    <router-view :community="currentCommunity"></router-view>
  </div>
</template>

<script lang="ts">
import communities from '@/data/communities';
import { defineComponent } from 'vue';
import LeftDrawer from '@/components/left-drawer/LeftDrawer.vue';

export default defineComponent({
  components: {
    LeftDrawer,
  },
  computed: {
    currentCommunity() {
      const { communityId } = this.$route.params;
      return communities.find((community) => community.id === communityId);
    },
  },
});
</script>

<style lang="scss" scoped>
.community-view {
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
}
</style>
