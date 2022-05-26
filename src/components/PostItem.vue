<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div>
        Название:
        <strong>
          {{ post.title }}
        </strong>
      </div>
      <div>
        Описание:
        <strong>
          {{ post.body }}
        </strong>
      </div>
    </div>
    <div class="post__btns">
      <my-button v-on:click="$router.push(`/posts/${post.id}`)"
        >Открыть</my-button
      >
      <my-button v-on:click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: {
    MyButton,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns {
  display: flex;
  gap: 5px;
}
</style>
