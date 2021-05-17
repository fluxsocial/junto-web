<template>
  <div v-if="show" class="modal">
    <div @click="$emit('toggle', false)" class="modal__backdrop"></div>
    <div class="modal__content">
      <div class="modal__title">
        <h2 class="modal__title-text">{{ title }}</h2>
        <svg @click="$emit('toggle', false)" class="modal__close-icon">
          <use href="@/assets/icons/icons.svg#cancel"></use>
        </svg>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    show: Boolean,
    title: String,
  },
});
</script>

<style lang="scss" scoped>
.modal {
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__backdrop {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
}

.modal__content {
  width: 30vw;
  background-color: var(--junto-background-color);
  border-radius: 25px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  min-width: 40rem;
  z-index: 10;
}

.modal__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.modal__title-text {
  font-size: 2.8rem;
  font-weight: 700;
}

.modal__title-container {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
  }
}

.modal__close-icon {
  height: 3rem;
  width: 3rem;
  fill: var(--junto-primary);
}

.modal__description {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--junto-primary-medium);
  margin-bottom: 3rem;
}
</style>
