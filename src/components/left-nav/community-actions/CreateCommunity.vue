<template>
  <text-field-full
    maxLength="50"
    title="Name"
    description="Name your community here"
  ></text-field-full>
  <spacer></spacer>
  <text-field-full
    maxLength="22"
    title="Handle"
    description="Choose a handle for your community.
            Handles can contain letters, numbers, hypens, and underscores."
  ></text-field-full>
  <spacer></spacer>
  <h2 class="communityActions__title">Privacy</h2>
  <select name="privacy" class="communityActions__privacy">
    <option value="Private">Private</option>
    <option value="Public">Public</option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextFieldFull from '../../ui/textfields/TextFieldFull.vue';
import Spacer from '../../ui/spacer/Spacer.vue';

export default defineComponent({
  components: {
    TextFieldFull,
    Spacer,
  },
});
</script>
