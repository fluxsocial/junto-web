<template>
  <div class="profile-avatar" :style="avatarDiameter">&nbsp;</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    profileImage: {
      default: require('@/assets/images/junto_app_icon.png'),
    },
    diameter: [Number, String],
  },
  computed: {
    avatarDiameter(): string {
      return `height:${this.diameter}rem; width: ${this.diameter}rem; background-image: url('${this.profileImage}');`;
    },
  },
});
</script>

<style lang="scss" scoped>
.profile-avatar {
  background-color: var(--junto-border-color);
  border-radius: 100px;
  background-size: cover;
}
</style>
