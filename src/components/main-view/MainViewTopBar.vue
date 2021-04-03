<template>
  <div class="mainView__topBar">
    <div class="mainView__topBar--title">
      <img
        class="mainView__topBar--title--icon"
        src="../../assets/icons/feeds.png"
      />
      <p class="mainView__topBar--title--name">main</p>
    </div>
  </div>
</template>

<style lang="scss">
.mainView__topBar {
  height: 7.5rem;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 2rem;
  display: flex;
  align-items: center;
  &--title {
    display: flex;
    align-items: center;

    &--icon {
      height: 2rem;
      margin-right: 0.5rem;
    }

    &--name {
      font-size: 2rem;
      font-weight: 700;
    }
  }
}
</style>