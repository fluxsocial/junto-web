<template>
  <div class="channelView">
    <div class="channelView__messages" ref="messagesContainer">
      <slot v-for="message in messageList" :key="message.value">
        <message-date
          v-if="message.type === 'date'"
          :date="message.value"
        ></message-date>
        <direct-message
          v-if="message.type === 'message'"
          :message="message.value"
        ></direct-message>
      </slot>
    </div>

    <create-direct-message
      :createMessage="createDirectMessage"
    ></create-direct-message>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DirectMessage from '@/components/direct-message/display/DirectMessage.vue';
import CreateDirectMessage from '@/components/direct-message/create/CreateDirectMessage.vue';
import { messages } from '@/data/messages';
import { format } from 'date-fns';
import MessageDate from './MessageDate.vue';

export default defineComponent({
  mounted() {
    this.scrollToBottom();
  },
  data() {
    return {
      messages,
    };
  },
  computed: {
    messageList(): any {
      const obj: { [x: string]: Array<any> } = {};
      const list: any[] = [];

      messages.forEach((e) => {
        const formattedDate = format(e.timestamp, 'MM/DD/YYYY');
        if (obj[formattedDate] !== undefined) {
          obj[formattedDate].push(e);
        } else {
          obj[formattedDate] = [e];
        }
      });

      Object.entries(obj).forEach(([key, value]) => {
        list.push({
          type: 'date',
          value: key,
        });

        value.forEach((v) => {
          list.push({
            type: 'message',
            value: v,
          });
        });
      });

      return list;
    },
  },
  methods: {
    createDirectMessage(message: any): void {
      this.messages.push(message);
      setTimeout(this.scrollToBottom, 300);
    },
    scrollToBottom(): void {
      const container: any = this.$refs.messagesContainer;
      container.scrollTop = container.scrollHeight;
    },
  },

  components: {
    DirectMessage,
    CreateDirectMessage,
    MessageDate,
  },
});
</script>
,
    MessageDate
<style lang="scss">
.channelView {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  max-height: 100vh;

  &__messages {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    // 9.5 = 7.5rem (height of MainVewTopBar) + 2rem
    padding: 9.5rem 2rem 7.5rem 2rem;
  }
}
</style>
