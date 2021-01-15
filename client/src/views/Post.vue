<template>
  <v-container>
    <v-img :src="this.post.url"></v-img>
    <p>{{ this.post.description }}</p>
  </v-container>
</template>

<script>
import GetPostService from "@/services/GetPostService"
export default {
  async created() {
    let post = await GetPostService.getPost(this.$route.params.id);
    this.post = post
  },
  data() {
    return {
      post: "",
    };
  },
};
</script>

<style scoped land="scss">
p {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  border: 3px solid #ccc;
}
</style>
