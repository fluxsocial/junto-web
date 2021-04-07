<template>
  <div class="createChannelButton">
    <div>&nbsp;</div>
    <button class="createChannelButton__button">Create</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';
.createChannelButton {
  display: flex;
  justify-content: space-between;

  &__button {
    padding: 1rem 2rem;
    outline: none;
    border-radius: 5px;
    box-shadow: none;
    background-color: $junto-border-color;
    border: none;
    text-decoration: none;
    color: $junto-primary;
    &:hover {
      cursor: pointer;
      background-color: $junto-accent-color;
      color: white;
      transition: all 0.2s;
    }
  }
}
</style>
