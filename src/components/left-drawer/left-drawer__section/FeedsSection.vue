<template>
  <div class="left-drawer__section">
    <div class="left-drawer__section--title">
      <p class="left-drawer__section--title--name">FEEDS</p>
    </div>
    <left-drawer-section-item
      title="main"
      type="feed"
    ></left-drawer-section-item>
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
