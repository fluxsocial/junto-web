<template>
  <div class="left-nav__bottom-section">
    <profile-avatar diameter="5"></profile-avatar>
  </div>
</template>

<script>
import ProfileAvatar from "./../ui/avatar/ProfileAvatar.vue";

export default {
  components: { ProfileAvatar },
};
</script>

<style lang="scss" scoped>
.left-nav__bottom-section {
  width: 100%;
  border-top: 1px #eee solid;
  padding-top: 2rem;
}
</style>