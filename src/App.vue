<template>
      <router-view></router-view>
</template>

<script>
import MainPage from "./components/MainPage";
import LocaleSwitcher from "./components/LocaleSwitcher";

export default {
  name: "App",
  components: {
    MainPage,
    LocaleSwitcher
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
