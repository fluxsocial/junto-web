<template>
  <router-link
    :to="{ name: 'channel', params: { channelId: channel.id }}"
    class="left-drawer__section__item"
  >
    <svg class="left-drawer__section__item--icon">
      <use :href="require('../../../assets/icons/icons.svg') + setIcon" />
    </svg>
    <p class="left-drawer__section__item--title">{{ channel.name }}</p>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Channel } from '@/store';

export default defineComponent({
  props: {
    channel: {
      type: Object as PropType<Channel>,
      required: true,
    },
  },
  computed: {
    setIcon(): any {
      let icon;
      switch (this.channel.type?.toLowerCase()) {
        case 'feed':
          icon = '#feed';
          break;
        case 'channel':
          icon = '#hashtag';
          break;
        default:
          icon = '#feed';
          break;
      }
      return icon;
    },
  },
  methods: {
    setCurrentCommunityView(): void {
      this.$router.push({
        name: 'channel',
        params: { channelId: this.channel.id },
      });
    },
  },
});
</script>
<style lang="scss">
.left-drawer__section__item {
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }

  &--icon {
    height: 1.4rem;
    width: 1.4rem;
    margin-right: 0.5rem;
    fill: var(--junto-primary);
  }

  &--title {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--junto-primary);
  }
}
</style>
