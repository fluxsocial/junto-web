<template>
  <div class="left-nav__communities-list">
    <community-avatar
      v-for="community in getCommunities"
      :key="community.name"
      :community="community"
      :profileImage="community.profileImage"
    ></community-avatar>
    <create-community-icon></create-community-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import CommunityAvatar from '../ui/avatar/CommunityAvatar.vue';
import CreateCommunityIcon from './community-actions/CreateCommunityIcon.vue';

export default defineComponent({
  computed: {
    getCommunities() {
      const store = useStore();
      return store.getters.getCommunities;
    },
  },
  components: { CommunityAvatar, CreateCommunityIcon },
});
</script>

<style lang="scss" scoped>
.left-nav__communities-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  margin-bottom: 25vh;
}
</style>
