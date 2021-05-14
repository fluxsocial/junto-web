<template>
  <div class="left-drawer__section">
    <div class="left-drawer__section--title">
      <p class="left-drawer__section--title--name">FEEDS</p>
    </div>
    <div class="left-drawer__section--items">
      <left-drawer-section-item
        v-for="channel in community.channels.filter(c => c.type === 'feed')"
        :key="channel"
        :channel="channel"
      ></left-drawer-section-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftDrawerSectionItem from './LeftDrawerSectionItem.vue';

export default defineComponent({
  props: {
    community: Object,
  },
  components: {
    LeftDrawerSectionItem,
  },
});
</script>
