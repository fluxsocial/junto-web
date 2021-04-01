<template>
  <router-view />
</template>

<style lang="scss">
$junto-primary-dark: #000;
$junto-primary: #333;
$junto-primary-medium: #555;
$junto-primary-light: #999;
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Avenir", "Raleway", sans-serif;
  box-sizing: border-box;
  font-weight: 400;
  overflow-x: hidden;
  outline: none;
  color: $junto-primary;
}
</style>
