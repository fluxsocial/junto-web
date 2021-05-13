<template>
  <div class="directMessageMeta">
    <div class="directMessageMeta__sender">
      <profile-avatar
        :diameter="3"
        :profileImage="message.profileImage"
      ></profile-avatar>
      <p class="directMessageMeta__sender--username">{{ message.username }}</p>
      <p class="directMessageMeta__sender--time">{{ time }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { format } from 'date-fns';
import { defineComponent, PropType } from 'vue';
import { ChatMessage } from '@/data/messages';
import ProfileAvatar from '../../ui/avatar/ProfileAvatar.vue';

export default defineComponent({
  props: {
    message: { type: Object as PropType<ChatMessage>, required: true },
  },
  computed: {
    time(): string {
      const message = this.message as ChatMessage;
      const time = message.timestamp
        .toISOString()
        .split('+')[0]
        .replace('Z', '');
      return format(time, 'h:mm A');
    },
  },
  components: {
    ProfileAvatar,
  },
});
</script>

<style lang="scss" scoped>
.directMessageMeta {
  display: flex;
  margin-bottom: 1rem;

  &__sender {
    display: flex;
    align-items: center;

    &--username {
      font-size: 1.4rem;
      font-weight: 700;
      margin-left: 0.5rem;
      color: var(--junto-primary);
    }

    &--time {
      margin-left: 1rem;
      color: gray;
    }
  }

  &__timestamp {
    font-size: 1.2rem;
  }
}
</style>
