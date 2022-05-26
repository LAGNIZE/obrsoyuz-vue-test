<template>
  <div>
    <h1>Это страница поста с ID = {{ $route.params.id }}</h1>
  </div>
  <div v-if="!isPostLoading">
    <div>
      Название:
      <strong>
        {{ posts.title }}
      </strong>
    </div>
    <div>
      Описание:
      <strong>
        {{ posts.body }}
      </strong>
    </div>
  </div>
  <div v-else>Идёт загрузка...</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      isPostLoading: false,
    };
  },
  methods: {
    async fetchInfo() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
          );
          this.posts = response.data;
          this.isPostLoading = false;
        }, 1000);
      } catch (e) {
        alert("Ошибка");
      }
    },
  },
  mounted() {
    this.fetchInfo();
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
