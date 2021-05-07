<template>
  <text-field-full
    maxLength="100"
    title="Invite Code"
    description="Paste the link to your community invite here."
  ></text-field-full>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextFieldFull from '../../ui/textfields/TextFieldFull.vue';

export default defineComponent({
  components: {
    TextFieldFull,
  },
});
</script>
