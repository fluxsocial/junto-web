<template>
  <div class="left-drawer__section__item" @click="setCurrentCommunityView">
    <svg class="left-drawer__section__item--icon">
      <use :href="require('../../../assets/icons/icons.svg') + setIcon"></use>
    </svg>
    <p class="left-drawer__section__item--title">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  props: {
    title: String,
    type: String as PropType<'feed' | 'channel' | undefined>,
  },
  computed: {
    setIcon(): any {
      let icon;
      switch (this.type?.toLowerCase()) {
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
      const store = useStore();
      store.commit({
        type: 'changeCommunityView',
        value: {
          name: this.title,
          type: this.type,
        },
      });
    },
  },
});
</script>
<style lang="scss">
.left-drawer__section__item {
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
