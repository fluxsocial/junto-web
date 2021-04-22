<template>
  <div class="channelView">
      <dynamic-scroller
        :items="messageList"
        :min-item-size="150"
        class="channelView__messages"
        ref="messagesContainer"
      >
        <template v-slot="{ item, index, active }">
          <dynamic-scroller-item
            :item="item"
            :active="active"
            :data-index="index"
          >
            <message-date
              v-if="item.type === 'date'"
              :date="item.date"
            ></message-date>
            <direct-message
              v-if="item.type === 'message'"
              :message="item.message"
              :showAvatar="showAvatar(index)"
            ></direct-message>
          </dynamic-scroller-item>
        </template>
      </dynamic-scroller>
    <create-direct-message
      :createMessage="createDirectMessage"
    ></create-direct-message>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller';
import DirectMessage from '@/components/direct-message/display/DirectMessage.vue';
import CreateDirectMessage from '@/components/direct-message/create/CreateDirectMessage.vue';
import { ChatMessage, messages } from '@/data/messages';
import { format, differenceInMinutes } from 'date-fns';
import MessageDate from './MessageDateHeader.vue';

interface ChatItem {
  id: string;
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
      let i = 0;

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
          id: i.toString(),
          type: 'date',
          date: key,
        });
        i += 1;

        value.forEach((v) => {
          list.push({
            id: i.toString(),
            type: 'message',
            message: v,
          });
          i += 1;
        });
      });
      console.log(list);
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
    DynamicScroller,
    DynamicScrollerItem,
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
    width: 100%;
    // 9.5 = 7.5rem (height of MainVewTopBar) + 2rem
    padding: 9.5rem 2rem 7.5rem 2rem;
  }
}
</style>
