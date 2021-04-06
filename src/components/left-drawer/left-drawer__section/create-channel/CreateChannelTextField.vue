<template>
  <div class="createChannelTextField">
    <h2 class="createChannelTextField__title">Name</h2>
    <input class="createChannelTextField__input" maxlength="22" />
    <p class="createChannelTextField__description">
      Channel names can contain letters, numbers, hypens, and underscores.
    </p>
  </div>
</template>



<style lang="scss">
@import "../../../../assets/sass/main.scss";
.createChannelTextField {
  &__title {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__input {
    width: 100%;
    height: 3.6rem;
    outline: none;
    font-size: 1.4rem;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 0.5rem;
  }

  &__description {
    font-size: 1.4rem;
    color: var(--junto-primary-light);
    font-weight: 500;
  }
}
</style>