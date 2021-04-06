<template>
  <div class="createDirectMessage">
    <div class="createDirectMessage__text-field">
      <input type="text" class="createDirectMessage__text-field--input" />
      <img
        src="../../../assets/icons/send.png"
        class="createDirectMessage__text-field--icon"
        alt=""
      />
    </div>
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

  &__text-field {
    width: 100%;
    outline: none;
    font-size: 1.4rem;
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid $junto-border-color;
    display: flex;
    align-items: center;

    &--icon {
      height: 1.7rem;
    }

    &--input {
      width: 100%;
      border: 0;
      outline: none;
      font-size: 1.4rem;
    }
  }
}
</style>