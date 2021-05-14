<template>
  <div class="left-drawer__section">
    <div class="left-drawer__section--title">
      <p class="left-drawer__section--title--name">CHANNELS</p>

      <create-channel-icon></create-channel-icon>
    </div>
    <div class="left-drawer__section--items">
      <left-drawer-section-item
        v-for="channel in community.channels.filter(c => c.type === 'channel')"
        :key="channel"
        :channel="channel"
      ></left-drawer-section-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftDrawerSectionItem from './LeftDrawerSectionItem.vue';
import CreateChannelIcon from './create-channel/CreateChannelIcon.vue';

export default defineComponent({
  props: {
    community: Object,
  },
  components: {
    LeftDrawerSectionItem,
    CreateChannelIcon,
  },
});
</script>
