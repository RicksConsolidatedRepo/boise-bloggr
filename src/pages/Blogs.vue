<template>
  <div class="blogs">
    <div class="row">
      <Blog v-for="blog in blogs" :blog="blog" :key="blog._id"></Blog>
    </div>
  </div>
</template>

<script>
  import Blog from "../components/Blog";
  export default {
    name: "blogs",
    data() {
      return {};
    },
    computed: {
      blogs() {
        return this.$store.state.blogs
      }
    },
    created() {
      this.$store.dispatch("getBlogs");
    },
    methods: {},
    components: {
      Blog
    }
  };
</script>

<style>
</style>