<template>
  <navbar></navbar>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/NavbarItem.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  padding: 20px;
}
</style>
