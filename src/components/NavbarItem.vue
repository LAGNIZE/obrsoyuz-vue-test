<template>
  <div class="navbar">
    <div class="navbar__link" v-on:click="$router.push('/')">
      Vue3. Страница с новостями
    </div>
  </div>
</template>

<script></script>

<style scoped>
.navbar {
  color: white;
  height: 50px;
  background-color: black;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
}

.navbar__link {
  cursor: pointer;
}
</style>
