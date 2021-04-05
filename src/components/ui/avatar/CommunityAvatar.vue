<template>
  <div class="community-avatar">&nbsp;</div>
</template>

<script>
export default {
  props: ["profile-image"],
};
</script>

<style lang="scss" scoped>
.community-avatar {
  height: 5rem;
  width: 5rem;
  background-color: #eee;
  border-radius: 100px;
  margin-bottom: 2rem;
  background-image: url("../../../../src/assets/images/junto_app_icon.png");
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
}
</style>