<template>
  <div class="textMessage">
    <p class="textMessage__text">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: String,
  },
});
</script>

<style lang="scss" scoped>
.textMessage {
  &__text {
    font-size: 1.5rem;
    font-weight: 400;
  }
}
</style>
