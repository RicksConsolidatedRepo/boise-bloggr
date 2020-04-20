<template>
  <div class="create-blog border col-12">
    <form @submit.prevent="createBlog()">
      <div class="form-group text-light">
        <label for="title">Title</label>
        <input type="text" name="title" id="" class="form-control" placeholder="enter title..."
          aria-describedby="helpId" v-model="newBlog.title" required>
      </div>
      <div class="form-group text-light">
        <label for="body">Body</label>
        <input type="text" name="body" id="" class="form-control" placeholder="enter body..." aria-describedby="helpId"
          v-model="newBlog.body" required>
      </div>
      <div class="form-group text-light">
        <label for="img">Image</label>
        <input type="text" name="img" id="" class="form-control" placeholder="enter img url..."
          aria-describedby="helpId" v-model="newBlog.imgUrl" required>
      </div>
      <button type="submit" class="btn btn-success" @click="addBlog()">Add Blog</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "create-blog",
    data() {
      return {
        newBlog: {}
      };
    },
    computed: {},
    methods: {
      addBlog() {
        this.$store.dispatch("addBlog", this.newBlog);
        this.newBlog = {};
      }
    },
    components: {}
  };
</script>


<style scoped>
</style>

<style>
</style>