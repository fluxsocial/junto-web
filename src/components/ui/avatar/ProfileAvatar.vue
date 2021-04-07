<template>
  <div class="profile-avatar" :style="avatarDiameter">&nbsp;</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    profileImage: { type: String, default: '' },
    diameter: { type: Number, default: 30 },
  },
  computed: {
    avatarDiameter(): String {
      return `height:${this.diameter}rem; width: ${this.diameter}rem;`;
    },
  },
});
</script>

<style lang="scss" scoped>
.profile-avatar {
  background-color: #eee;
  border-radius: 100px;
  background-image: url('../../../../src/assets/images/junto_app_icon.png');
  background-size: cover;
}
</style>
