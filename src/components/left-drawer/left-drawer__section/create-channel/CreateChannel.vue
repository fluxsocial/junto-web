<template>
  <teleport to="body">
    <div class="createChannel">
      <div class="createChannel__dialog">
        <div class="createChannel__dialog--top">
          <div class="createChannel__dialog--title">
            <h2 class="createChannel__dialog--title--text">Create a channel</h2>
            <div
              class="createChannel__dialog--title--container"
              @click="showCreateChannel"
            >
              <svg class="createChannel__dialog--title--icon">
                <use href="@/assets/icons/icons.svg#cancel"></use>
              </svg>
            </div>
          </div>
          <p class="createChannel__dialog--description">
            Channels are ways to organize your conversations by topics. You can
            create up to 5 channels for your community.
          </p>
          <text-field-full
            v-model="channelName"
            maxLength="22"
            title="Name"
            description="Channel names can contain letters, numbers, hypens, and underscores."
          ></text-field-full>
        </div>
        <div class="createChannel__dialog--bottom">
          <create-button @click="createChannel"></create-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import TextFieldFull from '../../../ui/textfields/TextFieldFull.vue';
import CreateButton from '../../../ui/buttons/CreateButton.vue';

export default defineComponent({
  components: {
    TextFieldFull,
    CreateButton,
  },
  data() {
    return {
      channelName: '',
    };
  },
  props: {
    group: {
      type: Object,
      required: true,
    },
    showCreateChannel: {
      type: Function,
      required: true,
    },
  },
  methods: {
    createChannel() {
      const store = useStore();
      const { communityId } = this.$route.params;
      console.log('create channel');
      store.commit('createChannel', {
        channel: {
          id: '123123',
          name: this.channelName,
          type: 'channel',
          parentId: this.group.id,
        },
        communityId,
      });
      this.showCreateChannel();
    },
  },
});
</script>

<style lang="scss">
@import '../../../../assets/sass/main.scss';
.createChannel {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;

  &__dialog {
    height: 60vh;
    width: 30vw;
    background-color: var(--junto-background-color);
    border-radius: 25px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 40rem;

    &--title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      &--text {
        font-size: 2.8rem;
        font-weight: 700;
      }

      &--container {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &:hover {
          cursor: pointer;
        }
      }

      &--icon {
        height: 3rem;
        width: 3rem;
        fill: var(--junto-primary);
      }
    }

    &--description {
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--junto-primary-medium);
      margin-bottom: 3rem;
    }
  }
}
</style>
