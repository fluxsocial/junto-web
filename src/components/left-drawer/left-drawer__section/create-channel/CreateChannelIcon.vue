<template>
  <div class="createChannelIcon" @click="showCreateChannel">
    <img
      class="createChannelIcon--icon"
      src="../../../../assets/icons/plus.png"
      alt=""
    />
  </div>
  <create-channel
    v-if="activateCreateChannel"
    :showCreateChannel="showCreateChannel"
  ></create-channel>
</template>

<script>
import CreateChannel from "./CreateChannel.vue";
export default {
  data() {
    return {
      activateCreateChannel: false,
    };
  },
  methods: {
    showCreateChannel() {
      console.log("toggling create channel view");
      this.activateCreateChannel = !this.activateCreateChannel;
    },
  },
  components: {
    CreateChannel,
  },
};
</script>

<style lang="scss">
.createChannelIcon {
  &--icon {
    height: 1.2rem;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>