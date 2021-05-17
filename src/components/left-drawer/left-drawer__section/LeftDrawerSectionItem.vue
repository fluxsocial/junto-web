<template>
  <router-link
    :to="{ name: 'perspective', params: { perspectiveId: channel.id }}"
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
import { Perspective } from '@/store';

export default defineComponent({
  props: {
    channel: {
      type: Object as PropType<Perspective>,
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

.router-link-exact-active  {
  background:var(--junto-border-color);

}

.left-drawer__section__item {
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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
