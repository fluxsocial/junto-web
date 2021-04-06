<template>
  <button class="toggleThemeButton" @click="toggleTheme">
    <img class="toggleThemeButton__icon" :src="themeIcon" alt="" />
  </button>
</template>


<script>
export default {
  methods: {
    toggleTheme() {
      if (this.currentTheme === "light") {
        this.$store.commit({ type: "toggleTheme", value: "dark" });
      } else {
        this.$store.commit({ type: "toggleTheme", value: "light" });
      }
    },
  },
  computed: {
    currentTheme() {
      return this.$store.getters.getCurrentTheme;
    },
    themeIcon() {
      if (this.currentTheme === "light") {
        return require("../../../assets/icons/sun.png");
      } else {
        return require("../../../assets/icons/moon.png");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.toggleThemeButton {
  padding: 1rem 2rem;
  outline: none;
  border: 1px solid var(--junto-border-color);
  background-color: var(--junto-border-color);
  margin-bottom: 2rem;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
  &__icon {
    height: 1.7rem;
    color: var(--junto-primary);
  }
}
</style>