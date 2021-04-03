<template>
  <div class="left-nav">
    <communities-list></communities-list>
    <div>Profile</div>
  </div>
</template>

<script>
import CommunitiesList from "./CommunitiesList.vue";
export default {
  components: {
    CommunitiesList,
  },
};
</script>

<style lang="scss">
.left-nav {
  height: 100vh;
  width: 5vw;
  min-width: 10rem;
  background-color: white;
  border-right: 1px #eee solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  color: blue;
}
</style>

