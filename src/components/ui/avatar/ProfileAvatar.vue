<template>
  <div class="profile-avatar">&nbsp;</div>
</template>

<script>
export default {
  props: ["profile-image"],
};
</script>

<style lang="scss" scoped>
.profile-avatar {
  height: 5rem;
  width: 5rem;
  background-color: #eee;
  border-radius: 100px;
  background-image: url("../../../../src/assets/images/junto_app_icon.png");
  background-size: cover;
}
</style>