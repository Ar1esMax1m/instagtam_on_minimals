<template>
  <v-row>
      <ListPostItem v-for="post in posts" v-bind:post="post" :key="post.id" />
  </v-row>
</template>

<script>
import ListPostItem from "@/components/ListPostItem";
export default {
  props: ["posts"],
  components: {
    ListPostItem,
  },
};
</script>
