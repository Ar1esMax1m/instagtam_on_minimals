<template>
  <v-container>
    <v-row>
      <ListPostItem
        v-for="post in paginatedData"
        v-bind:post="post"
        :key="post.id"
      />
    </v-row>

    <v-row justify="center mt-5">
      <v-btn
        elevation="2"
        large
        outlined
        class="col-2 mr-1"
        @click="prevPage"
        :disabled="pageNumber == 0"
      >
        Previous
      </v-btn>

      <v-btn
        elevation="2"
        large
        outlined
        class="col-2 ml-1"
        @click="nextPage"
        :disabled="pageNumber >= pageCount - 1"
      >
        Next
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import ListPostItem from "@/components/ListPostItem";
export default {
  data() {
    return {
      pageNumber: 0,
    };
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 3,
    },
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  computed: {
    pageCount() {
      let l = this.posts.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.posts.slice(start, end);
    },
  },
  components: {
    ListPostItem,
  },
};
</script>
