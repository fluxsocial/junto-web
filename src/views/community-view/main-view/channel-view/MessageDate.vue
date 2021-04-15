<template>
  <div class="message-date">
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line object-curly-newline
import { format, isToday, isYesterday, parse } from 'date-fns';

export default defineComponent({
  props: {
    date: { type: String, required: true, default: Date.now() },
  },
  computed: {
    value(): string {
      if (isToday(parse(this.date))) {
        return 'today';
      }
      if (isYesterday(parse(this.date))) {
        return 'yesterday';
      }

      return format(this.date, 'MMM-DD-YYYY');
    },
  },
});
</script>

<style>
.message-date {
  background-color: coral;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  width: 220px;
  text-align: center;
  color: #fff;
}
</style>
