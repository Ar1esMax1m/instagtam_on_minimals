<template>
  <v-container><ListPost v-bind:posts="posts"/></v-container>
</template>

<script>
import ListPost from "@/components/ListPost";
import GetPostsService from "@/services/GetPostsService";

export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    ListPost,
  },
  async mounted() {
    try {
      this.posts = await GetPostsService.getPosts();
    } catch (e) {
      if (e.response.status === 400) {
        console.error("Ошибка получение постов");
      }
    }
  },
};
</script>
