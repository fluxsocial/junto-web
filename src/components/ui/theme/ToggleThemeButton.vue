<template>
  <button class="toggleThemeButton" @click="toggleTheme">
    <svg class="toggleThemeButton__icon">
      <use :href="require('../../../assets/icons/icons.svg') + themeIcon"></use>
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  methods: {
    toggleTheme(): void {
      const store = useStore();
      if (this.currentTheme === 'light') {
        store.commit({ type: 'toggleTheme', value: 'dark' });
      } else {
        store.commit({ type: 'toggleTheme', value: 'light' });
      }
    },
  },
  computed: {
    currentTheme() {
      const store = useStore();
      return store.getters.getCurrentTheme;
    },
    themeIcon() {
      if (this.currentTheme === 'light') {
        return '#sun';
      }
      return '#moon';
    },
  },
});
</script>

<style lang="scss" scoped>
.toggleThemeButton {
  padding: 1rem 2rem;
  outline: none;
  border: 1px solid var(--junto-border-color);
  background-color: var(--junto-border-color);
  margin-bottom: 2rem;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
  &__icon {
    height: 1.7rem;
    width: 1.7rem;
    fill: var(--junto-primary);
  }
}
</style>
