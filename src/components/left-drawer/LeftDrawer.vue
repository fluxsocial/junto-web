<template>
  <div
    id="top"
    @contextmenu="handleTopLevelContextMenu"
    class="left-drawer"
    v-if="community != null"
  >
    <div class="left-drawer__top">
      <community-name :title="community.name"></community-name>

      <div class="left-drawer__section--items">
        <left-drawer-section-item
          v-for="channel in standalonePerspectives"
          :key="channel.id"
          :id="channel.id"
          @contextmenu="handleGroupContextMenu"
          :channel="channel"
        ></left-drawer-section-item>
      </div>

      <details
        :id="group.id"
        @contextmenu="handleGroupContextMenu"
        open
        class="left-drawer__section"
        v-for="group in groups"
        :key="group.id"
      >
        <summary class="left-drawer__section--title">
          <p class="left-drawer__section--title--name">{{ group.name }}</p>
          <create-channel-icon :group="group"></create-channel-icon>
        </summary>
        <div class="left-drawer__section--items">
          <left-drawer-section-item
          :id="channel.id"
            @contextmenu="handleChannelContextMenu"
            v-for="channel in group.children"
            :key="channel.id"
            :channel="channel"
          ></left-drawer-section-item>
        </div>
      </details>

      <context-menu el="top" :eventData="contextEvent">
        <button
          class="left-drawer__create-group-button"
          @click="showCreateGroup = true"
        >
          Create group
        </button>
        <button
          class="left-drawer__create-group-button"
          @click="showCreateChannel = true"
        >
          Create channel
        </button>
      </context-menu>

      <context-menu :el="contextGroupId" :eventData="contextEvent">
        <button
          class="left-drawer__create-group-button"
          @click="createCommunityFromGroup"
        >
          Create community
        </button>
      </context-menu>

      <context-menu :el="contextChannelId" :eventData="contextEvent">
        <button
          class="left-drawer__create-group-button"
          @click="createCommunityFromChannel"
        >
          Create community
        </button>
      </context-menu>

      <modal
        title="Create group"
        :show="showCreateGroup"
        @toggle="showCreateGroup = !showCreateGroup"
      >
        <text-field-full
          v-model="groupName"
          maxLength="22"
          title="Name"
          description="Group names can contain letters, numbers, hypens, and underscores."
        ></text-field-full>
        <button class="button" @click="createGroup">Create group</button>
      </modal>

      <modal
        title="Create channel"
        :show="showCreateChannel"
        @toggle="showCreateChannel = !showCreateChannel"
      >
        <text-field-full
          v-model="channelName"
          maxLength="22"
          title="Name"
          description="Group names can contain letters, numbers, hypens, and underscores."
        ></text-field-full>
        <button class="button" @click="createChannel">Create channel</button>
      </modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Community, useStore } from '@/store';
import {
  generateGroups,
  getTopLevelPerspectives,
} from '@/helpers/perspectiveHelpers';
import TextFieldFull from '@/components/ui/textfields/TextFieldFull.vue';
import CommunityName from './CommunityName.vue';
import LeftDrawerSectionItem from './left-drawer__section/LeftDrawerSectionItem.vue';
import CreateChannelIcon from './left-drawer__section/create-channel/CreateChannelIcon.vue';
import Modal from '../modal/Modal.vue';
import ContextMenu from '../context-menu/ContextMenu.vue';

export default defineComponent({
  props: {
    community: {
      type: Object as PropType<Community>,
      required: true,
    },
  },
  data() {
    return {
      channelName: '',
      groupName: '',
      contextGroupId: null,
      contextChannelId: null,
      contextEvent: {},
      showCreateChannel: false,
      showCreateGroup: false,
    };
  },
  components: {
    ContextMenu,
    Modal,
    CommunityName,
    LeftDrawerSectionItem,
    CreateChannelIcon,
    TextFieldFull,
  },
  computed: {
    groups(): any {
      const { perspectives } = this.community;
      return generateGroups(perspectives);
    },
    standalonePerspectives(): any {
      const { perspectives } = this.community;
      return getTopLevelPerspectives(this.community.id, perspectives);
    },
  },
  methods: {
    handleGroupContextMenu(e) {
      e.preventDefault();
      this.contextGroupId = e.currentTarget.id;
      this.contextEvent = e;
    },
    handleChannelContextMenu(e) {
      console.log('channel context', e.currentTarget.id);
      e.preventDefault();
      this.contextChannelId = e.currentTarget.id;
      this.contextEvent = e;
    },
    handleTopLevelContextMenu(e) {
      this.contextEvent = e;
    },
    createChannel() {
      const store = useStore();
      store.commit('createChannel', {
        channel: {
          name: this.channelName, type: 'channel', parentId: this.community.id,
        },
        communityId: this.community.id,
      });
      this.showCreateChannel = false;
    },
    createGroup() {
      const store = useStore();
      store.commit('createGroup', {
        name: this.groupName,
        communityId: this.community.id,
      });
      this.showCreateGroup = false;
    },
    createCommunityFromGroup() {
      const store = useStore();
      const { community } = this;
      const perspective = community.perspectives.find(
        (p) => p.id === this.contextGroupId,
      );
      const children = community.perspectives.filter(
        (p) => p.parentId === perspective?.id,
      );
      console.log({ perspective, children });
      store.commit('createCommunity', {
        ...perspective,
        perspectives: children,
      });
    },
    createCommunityFromChannel() {
      const store = useStore();
      const { community } = this;
      const perspective = community.perspectives.find(
        (p) => p.id === this.contextChannelId,
      );
      const children = community.perspectives.filter(
        (p) => p.parentId === perspective?.id,
      );
      console.log({ perspective, children });
      store.commit('createCommunity', {
        ...perspective,
        perspectives: children,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 1rem 2rem;
  outline: none;
  border-radius: 5px;
  box-shadow: none;
  background-color: var(--junto-border-color);
  border: none;
  text-decoration: none;
  color: var(--junto-primary);
  &:hover {
    cursor: pointer;
    background-color: var(--junto-accent-color);
    transition: all 0.2s;
    color: white;
  }
}

.left-drawer {
  padding: 2rem;
  width: 15vw;
  min-width: 20rem;
  background-color: var(--junto-background-color);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--junto-border-color);
  justify-content: space-between;
}

.left-drawer__create-group-button {
  padding: 10px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  border: 0;
  width: 100%;
  color: var(--junto-primary);
  background: var(--junto-background-color);
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background: var(--junto-border-color);
  }
}

.left-drawer__section {
  cursor: pointer;
  margin-bottom: 1.5rem;
  position: relative;

  &:after {
    top: 9px;
    left: 0;
    position: absolute;
    display: block;
    content: '';
    border-right: 1px solid var(--junto-primary-light);
    border-bottom: 1px solid var(--junto-primary-light);
    width: 7px;
    height: 7px;
    transition: all 0.2s ease;
    transform: rotate(-45deg);
  }

  &[open]:after {
    transform: rotate(45deg);
  }

  &--title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-left: 1.5rem;
    &--name {
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--junto-primary-light);
    }
  }

  &--items {
    display: flex;
    flex-direction: column;
  }
}
</style>
