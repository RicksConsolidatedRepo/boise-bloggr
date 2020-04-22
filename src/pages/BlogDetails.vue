<template>
  <div class="blog-detail">
    <div class="row justify-content-center">
      <div class="col-6 d-flex flex-column bg-light mt-2 pb-2">
        <div class="row justify-content-center">
          <div class="col-4 d-flex">
            <img class="img-fluid img-thumbnail mt-2" :src="blog.imgUrl" />
          </div>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.body}}</p>
        <small>{{blog.creatorEmail}}</small>
        <form class="pt-2" @submit.prevent="editBlog()">
          <div class="form-group">
            <label for="title">Edit Title</label>
            <input type="text" name="title" id="" class="form-control" placeholder="edit title"
              aria-describedby="helpId" v-model="blog.title" required>
          </div>
          <div class="form-group">
            <label for="body">Edit Body</label>
            <input type="text" name="body" id="" class="form-control" placeholder="edit body" aria-describedby="helpId"
              v-model="blog.body" required>
          </div>
        </form>
        <button type="submit" class="btn btn-sm btn-success">Save Edit</button>
        <button type="button" class="btn btn-sm btn-danger" @click="deleteBlog()">Delete</button>
      </div>
    </div>

    <div class="row">
      <Comment v-for="comment in comments" :commentData="comment" :key="comment._id"></Comment>
    </div>
    <CreateComment>this is where you create a comment</CreateComment>
  </div>
</template>


<script>
  import CreateComment from "../components/CreateComment";
  import Comment from "../components/Comment";
  export default {
    name: "blog-details",
    data() {
      return {};
    },
    created() {
      this.$store.dispatch("selectBlog", this.$route.params.blogId);
    },
    computed: {
      blog() {
        return this.$store.state.activeBlog.blog;
      },
      comments() {
        return this.$store.state.activeBlog.comments;
      }
    },
    methods: {
      deleteBlog() {
        this.$router.push({ name: "Home" });
        this.$store.dispatch("deleteBlog", this.blog._id);
      },
      editBlog() {
        this.$store.dispatch("editBlog", this.blog);
      }
    },
    components: {
      CreateComment,
      Comment
    }
  };
</script>


<style scoped>
  button {
    margin-top: 0.5rem;
  }
</style>