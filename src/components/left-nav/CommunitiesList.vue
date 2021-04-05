<template>
  <div class="left-nav__communities-list">
    <community-avatar
      v-for="community in communities"
      :key="community.name"
      :community="community"
    ></community-avatar>
  </div>
</template>

<script>
import CommunityAvatar from "./../ui/avatar/CommunityAvatar.vue";

export default {
  data() {
    return {
      communities: [
        { name: "JUNTO", channels: ["main, inspiration, events"] },
        {
          name: "Holochain",
          channels: ["main, holo-fuel", "meetups", "when-moon"],
        },
        { name: "Naruto", channels: ["main, anbu"] },
        { name: "Hoops", channels: ["main, hoopiddydoops"] },
      ],
    };
  },
  methods: {
    navToCommunity() {},
  },
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