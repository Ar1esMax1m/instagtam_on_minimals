<template>
  <v-container>
    <v-img :src="this.post.url"></v-img>
    <p>{{ this.post.des }}</p>
  </v-container>
</template>

<script>
export default {
  created: function() {
    fetch(`/post/${this.$route.params.id}`, {
      method: "GET",
    })
      .then((res) => {
        res.json().then((post) => (this.post = post));
      })
      .catch((err) => console.log(err));
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
