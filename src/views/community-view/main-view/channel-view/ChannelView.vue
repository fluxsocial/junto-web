<template>
  <div class="channelView">
    <div class="channelView__messages" ref="messagesContainer">
      <slot v-for="(message, index) in messageList" :key="message.value">
        <message-date
          v-if="message.type === 'date'"
          :date="message.date"
        ></message-date>
        <direct-message
          v-if="message.type === 'message'"
          :message="message.message"
          :showAvatar="showAvatar(index)"
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
import { ChatMessage, messages } from '@/data/messages';
import { format, differenceInMinutes } from 'date-fns';
import MessageDate from './MessageDateHeader.vue';

interface ChatItem {
  type: 'date' | 'message';
  date?: Date | string | number;
  message?: ChatMessage;
}

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
    messageList(): Array<ChatItem> {
      const obj: { [x: string]: Array<ChatMessage> } = {};
      const list: Array<ChatItem> = [];

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
          date: key,
        });

        value.forEach((v) => {
          list.push({
            type: 'message',
            message: v,
          });
        });
      });

      return list;
    },
  },
  methods: {
    createDirectMessage(message: ChatMessage): void {
      this.messages.push(message);
      setTimeout(this.scrollToBottom, 300);
    },
    scrollToBottom(): void {
      const container: HTMLDivElement = this.$refs
        .messagesContainer as HTMLDivElement;
      container.scrollTop = container.scrollHeight;
    },
    showAvatar(index: number): boolean {
      const previousMessage = this.messageList[index - 1];
      const message = this.messageList[index];

      if (previousMessage.type === 'date') {
        return true;
      }

      if (previousMessage.message?.username !== message.message?.username) {
        return true;
      }

      return (
        previousMessage.message?.username === message.message?.username
        && differenceInMinutes(
          message.message?.timestamp ?? Date.now(),
          previousMessage.message?.timestamp ?? Date.now(),
        ) >= 2
      );
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
