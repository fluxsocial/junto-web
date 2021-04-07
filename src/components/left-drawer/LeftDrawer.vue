<template>
  <div class="left-drawer">
    <community-name :title="community.name"></community-name>
    <left-drawer-section type="Feed"></left-drawer-section>
    <left-drawer-section
      type="Channel"
      :community="community"
    ></left-drawer-section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Community } from '@/store/index';
import CommunityName from './CommunityName.vue';
import LeftDrawerSection from './left-drawer__section/LeftDrawerSection.vue';

export default defineComponent({
  props: {
    community: Object as PropType<Community>,
  },
  components: { CommunityName, LeftDrawerSection },
});
</script>

<style lang="scss" scoped>
.left-drawer {
  padding: 2rem;
  width: 15vw;
  min-width: 20rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eee;
}
</style>
