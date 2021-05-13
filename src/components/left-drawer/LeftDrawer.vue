<template>
  <div
    ref="drawer"
    v-if="community != null"
    :class="{ 'left-drawer--no-select': isDragging }"
    class="left-drawer"
  >
    <div class="left-drawer__top">
      <span role="presentation" class="left-drawer__handle" @mousedown="startResize"></span>
      <community-name :title="community.name"></community-name>
      <left-drawer-section type="Feed"></left-drawer-section>
      <left-drawer-section type="Channel" :community="community"></left-drawer-section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Community } from '@/store/index';
import CommunityName from './CommunityName.vue';
import LeftDrawerSection from './left-drawer__section/LeftDrawerSection.vue';

export default defineComponent({
  props: {
    community: Object as PropType<Community>,
  },
  components: { CommunityName, LeftDrawerSection },
  data() {
    return {
      startX: 0,
      startWidth: 0,
      isDragging: false,
    };
  },
  methods: {
    startResize(e) {
      const drawer = this.$refs.drawer as HTMLSpanElement;
      const drawerWidth = parseInt(window.getComputedStyle(drawer).width, 10);

      this.startWidth = drawerWidth;
      this.isDragging = true;
      this.startX = e.clientX;

      document.addEventListener('mousemove', this.doResize, false);
      document.addEventListener('mouseup', this.stopResize, false);
    },
    doResize(e) {
      const drawer = this.$refs.drawer as HTMLSpanElement;
      drawer.style.width = `${this.startWidth + e.clientX - this.startX}px`;
    },
    stopResize() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.doResize);
    },
  },
});
</script>

<style lang="scss" scoped>
.left-drawer {
  padding: 2rem;
  width: 15vw;
  min-width: 20rem;
  max-width: 200rem;
  flex-shrink: 0;
  background-color: var(--junto-background-color);
  display: flex;
  flex-direction: column;
  position: relative;
}

.left-drawer--no-select {
  user-select: none;
}

.left-drawer__handle {
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  background: var(--junto-border-color);
  cursor: col-resize;
  height: 100%;
}
</style>
