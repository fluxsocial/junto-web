<template>
  <div class="left-nav">
    <communities-list></communities-list>
    <bottom-section></bottom-section>
  </div>
</template>

<script>
import CommunitiesList from "./CommunitiesList.vue";
import BottomSection from "./BottomSection.vue";

export default {
  components: {
    CommunitiesList,
    BottomSection,
  },
};
</script>

<style lang="scss">
.left-nav {
  height: 100vh;
  width: 5vw;
  min-width: 10rem;
  padding: 2rem;
  background-color: white;
  border-right: 1px #eee solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9999;
}
</style>

