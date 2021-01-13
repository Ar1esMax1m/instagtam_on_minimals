<template>
  <v-container><ListPost v-bind:posts="posts"/></v-container>
</template>

<script>
import ListPost from "@/components/ListPost";
export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    ListPost,
  },
  mounted() {
    fetch("/getPost", {
      method: "GET",
    })
      .then((res) => {
        res.json().then( (posts) => {this.posts = posts} )
        console.log(this.posts)
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
