<template>
  <div class="createDirectMessage">
    <input type="text" class="createDirectMessage__input" />
  </div>
</template>


<style lang="scss" scoped>
@import "../../../assets/sass/main.scss";
.createDirectMessage {
  height: 7.5rem;
  width: 100%;
  padding: 2rem;
  background-color: $junto-background-color;
  border-top: 1px solid $junto-border-color;
  position: absolute;
  bottom: 0;
  left: 0;

  &__input {
    width: 100%;
    outline: none;
    font-size: 1.4rem;
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid $junto-border-color;
    overflow: scroll;
  }
}
</style>