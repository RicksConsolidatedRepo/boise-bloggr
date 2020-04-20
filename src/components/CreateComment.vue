<template>
  <div class="create-comment border col-12">
    <div class="form-group">
      <label for="comment">Comment</label>
      <input type="text" name="comment" id="" class="form-control" placeholder="enter comment..."
        aria-describedby="helpId" v-model="newComment.body" required>
    </div>
    <button type="submit" class="btn btn-success" @click="addComment()">Add Comment</button>
  </div>
</template>

<script>
  export default {
    name: "create-comment",
    data() {
      return {
        newComment: {}
      };
    },
    computed: {},
    methods: {
      addComment() {
        this.newComment.blogId = this.$route.params.blogId;
        this.$store.dispatch("addComment", this.newComment);
        this.newComment = {};
      }
    },
    components: {}
  };
</script>

<style>
  .comment {
    outline: 1px solid black;
  }
</style>