<template>
  <div class="communities-list">
    <community-avatar></community-avatar>
    <community-avatar></community-avatar>
    <community-avatar></community-avatar>
  </div>
</template>

<script>
import CommunityAvatar from "./../ui/avatar/CommunityAvatar.vue";

export default {
  components: { CommunityAvatar },
};
</script>

<style lang="scss" scoped>
.communities-list {
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>