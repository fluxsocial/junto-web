<template>
  <div class="mainView__topBar">
    <div class="mainView__topBar--title">
      <svg class="mainView__topBar--title--icon">
        <use :href="require('../../../assets/icons/icons.svg') + setIcon"></use>
      </svg>
      <p class="mainView__topBar--title--name">{{ currentView.name }}</p>
    </div>
    <div class="mainView__topBar--action-items">
      <svg
        class="mainView__topBar--action-items--invite"
        @click="getInviteCode"
      >
        <use href="@/assets/icons/icons.svg#add-user"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CommunityView } from '@/store';

export default defineComponent({
  props: {
    currentView: { type: Object as PropType<CommunityView>, required: true },
  },
  computed: {
    setIcon() {
      let icon;
      switch (this.currentView.type) {
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
    getInviteCode() {
      // Get the invite code to join community and copy to clipboard

      const el = document.createElement('textarea');
      el.value = 'Hey! Here is an invite code to join my private community on Junto.';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      alert('Your custom invite code is copied to your clipboard!');
    },
  },
});
</script>

<style lang="scss">
.mainView__topBar {
  z-index: 2000;
  height: 7.5rem;
  background-color: var(--junto-background-color);
  width: 100%;
  border-bottom: 1px solid var(--junto-border-color);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;

  &--title {
    display: flex;
    align-items: center;

    &--icon {
      fill: var(--junto-primary);
      height: 1.7rem;
      width: 1.7rem;
      margin-right: 0.5rem;
    }

    &--name {
      font-size: 1.7rem;
      font-weight: 700;
      color: var(--junto-primary);
    }
  }

  &--action-items {
    &--invite {
      height: 1.7rem;
      width: 1.7rem;
      fill: var(--junto-primary);
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
