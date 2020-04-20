<template>
  <div class="card col-4 m-5" v-if="$auth.isAuthenticated" @click="selectBlog()">
    <p>Title: {{blog.title}}</p>
    <p>Name: {{blog.creatorName}}</p>
    <p>Email: {{blog.creatorEmail}}</p>
  </div>
</template>

<script>
  export default {
    name: "blog",
    props: ["blog"],
    data() {
      return {};
    },
    methods: {
      selectBlog() {
        this.$store.commit("setActiveBlog", {});
        this.$router.push({
          name: "BlogDetails",
          params: { blogId: this.blog._id }
        });
      }
    },
    components: {}
  };
</script>

<style>
</style>