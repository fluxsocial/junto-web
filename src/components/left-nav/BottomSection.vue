<template>
  <div class="left-nav__bottom-section">
    <profile-avatar diameter="5"></profile-avatar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfileAvatar from '../ui/avatar/ProfileAvatar.vue';

export default defineComponent({
  components: { ProfileAvatar },
});
</script>

<style lang="scss" scoped>
.left-nav__bottom-section {
  width: 100%;
  border-top: 1px #eee solid;
  padding-top: 2rem;
}
</style>
