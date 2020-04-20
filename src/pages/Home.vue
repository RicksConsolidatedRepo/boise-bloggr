<template>
  <div>
    <Blogs class="bg-transparent">blogs go here</Blogs>
  </div>
</template>

<script>
  import Parallax from "vue-parallaxy";
  import Blogs from "./Blogs";
  export default {
    name: "Home",
    data() {
      return {
        images: []
      };
    },
    mounted() {
      console.log(this.$auth);
      this.$store.dispatch("getBlogs");
    },
    computed: {
      blogs() {
        return this.$store.state.blogs
      },
    },
    components: { Parallax, Blogs }
  };
</script>
<style>
  body {
    background-color: #E0F0FF;
    background-image: url("https://i.pinimg.com/originals/5e/70/c9/5e70c9a00ab0941cc4e65cd7f86ecc94.jpg");
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .parallax-container {
    position: relative;
    height: 1000px;
  }

  .image {
    height: 700px;
  }
</style>