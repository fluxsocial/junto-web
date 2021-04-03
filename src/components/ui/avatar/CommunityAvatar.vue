<template>
  <div class="community-avatar"></div>
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
  background-color: blue;
  border-radius: 100px;
  margin-bottom: 2rem;
  background-image: url("../../../../src/assets/images/junto_app_icon.png");
  background-size: cover;
}
</style>