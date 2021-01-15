<template>
  <v-col class="post col-4 pa-1"
    ><router-link :to="buildUrl(post.id)"
      ><v-img
        :src="post.url"
        max-height="100"
        class="d-flex align-start"
      ></v-img></router-link
  ></v-col>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },

  methods: {
    buildUrl(id) {
      return `/post/${id}`;
    },
  },
};
</script>
