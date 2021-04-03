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
  height: 2.4rem;
  width: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    transition: all 0.2s;
  }
  &--icon {
    height: 1.2rem;
  }
}
</style>