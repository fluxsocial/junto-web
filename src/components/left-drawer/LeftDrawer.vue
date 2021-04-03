<template>
  <div class="left-drawer">
    <community-name title="JUNTO"></community-name>
    <left-drawer-section title="About"></left-drawer-section>
    <left-drawer-section title="Feeds"></left-drawer-section>
    <left-drawer-section title="Channels"></left-drawer-section>
  </div>
</template>

<script>
import CommunityName from "./CommunityName.vue";
import LeftDrawerSection from "./left-drawer__section/LeftDrawerSection.vue";

export default {
  components: { CommunityName, LeftDrawerSection },
};
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