<template>
  <nav
    ref="menu"
    id="right-click-menu"
    tabindex="0"
    v-show="viewMenu"
    @blur="closeMenu"
    :style="{ top, left }"
  >
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    eventData: Object,
    el: String,
  },
  watch: {
    eventData(e) {
      console.log({ target: e.currentTarget.id, el: this.el });
      if (e.currentTarget.id === this.el) {
        this.openMenuHandler(e);
      }
    },
  },
  data() {
    return {
      viewMenu: false,
      top: '0px',
      left: '0px',
    };
  },
  methods: {
    setMenu(top, left) {
      this.top = `${top}px`;
      this.left = `${left}px`;
    },

    closeMenu(e) {
      e.preventDefault();
      setTimeout(() => {
        this.viewMenu = false;
      }, 250);
    },

    openMenuHandler(e) {
      e.preventDefault();
      console.log('menuHandler');
      const { menu } : any = this.$refs;

      this.viewMenu = true;
      this.setMenu(e.y, e.x);

      setTimeout(() => { menu.focus(); }, 10);
    },
  },
});
</script>

<style scoped>
#right-click-menu {
  outline: 0;
  background: var(--junto-background-color);
  border: 1px solid var(--junto-border-color);
  border-radius: 6px;
  display: block;
  list-style: none;
  margin: 0;
  padding-top: 6px;
  padding-bottom: 6px;
  position: fixed;
  z-index: 999999;
}

#right-click-menu li {
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
  padding: 5px 35px;
}

#right-click-menu li:last-child {
  border-bottom: none;
}

#right-click-menu li:hover {
  background: #1e88e5;
  color: #fafafa;
}
</style>
