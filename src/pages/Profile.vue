<template>
  <div class="home container-fluid">

    <div class="about text-center">
      <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded" :src="profile.picture" alt="" />
      <p>{{ profile.email }}</p>
    </div>

    <div class="row">
      <div class="col-11">
        <CreateBlog></CreateBlog>
      </div>
    </div>

    <div class="row">
      <Blog v-for="blog in blogs" :blog="blog" :key="blog._id"></Blog>
    </div>
  </div>
</template>

<script>
  import Blog from "../components/Blog";
  import Blogs from "../pages/Blogs";
  import CreateBlog from "../components/CreateBlog";
  import Comment from "../components/Comment";
  import CreateComment from "../components/CreateComment";
  export default {
    name: "Profile",
    computed: {
      profile() {
        return this.$store.state.profile;
      },
      blogs() {
        return this.$store.state.myBlogs
      },
      comment() {
        return this.$store.state.myComments
      },
    },
    created() {
      this.$store.dispatch("getMyBlogs");
      this.$store.dispatch("getMyComments");
    },

    components: {
      Blog,
      CreateBlog,
      Comment,
    }
  };
</script>

<style scoped>
  img {
    max-width: 100px;
  }
</style>