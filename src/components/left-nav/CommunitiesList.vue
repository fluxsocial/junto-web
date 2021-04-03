<template>
  <div class="left-nav__communities-list">
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
.left-nav__communities-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>