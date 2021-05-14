<template>
  <div class="left-drawer" v-if="community != null">
    <div class="left-drawer__top">
      <community-name :title="community.name"></community-name>
      <details
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
            v-for="channel in group.children"
            :key="channel.id"
            :channel="channel"
          ></left-drawer-section-item>
        </div>
      </details>
      <button @click="createGroup">Create group</button>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { Community, useStore } from '@/store';
import { generateGroups } from '@/helpers/perspectiveHelpers';
import CommunityName from './CommunityName.vue';
import LeftDrawerSectionItem from './left-drawer__section/LeftDrawerSectionItem.vue';
import CreateChannelIcon from './left-drawer__section/create-channel/CreateChannelIcon.vue';

export default defineComponent({
  props: {
    community: {
      type: Object as PropType<Community>,
      required: true,
    },
  },
  components: { CommunityName, LeftDrawerSectionItem, CreateChannelIcon },
  computed: {
    groups(): any {
      const { perspectives } = this.community;
      return generateGroups(perspectives);
    },
  },
  methods: {
    createGroup() {
      const store = useStore();
      store.commit('createGroup', { name: 'hello', communityId: this.community.id });
    },
  },
});
</script>

<style lang="scss" scoped>
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

.left-drawer__section {
  cursor: pointer;
  margin-bottom: 1.5rem;
  position: relative;

  &:after {
    top: 9px;
    left: 0;
    position: absolute;
    display: block;
    content: "";
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
