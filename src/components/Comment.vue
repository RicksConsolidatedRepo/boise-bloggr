<template>
  <div class="card col-3 m-5">
    <h5>{{commentData.body}}</h5>
    <p>{{commentData.creatorEmail}}</p>
    <form @submit.prevent="editComment()">
      <div class="form-group">
        <label for="body">Edit your Comment</label>
        <input type="text" name="body" id="" class="form-control" placeholder="enter edit" aria-describedby="helpId"
          v-model="commentData.body" required>
      </div>
      <div class="col-3 d-flex mb-1 ml-auto"></div>
      <button type="submit">
        <i class="fas fa-pencil-alt text-warning"></i>
      </button>
      <button class="btn btn-sm" @click="deleteComment()">
        <i class="fas fa-trash-alt text-danger"></i>
      </button>
    </form>
  </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    props: ["commentData"],
    data() {
      return {};
    },
    methods: {
      deleteComment() {
        this.$store.dispatch("deleteComment", this.commentData);
      },
      editComment() {
        this.$store.dispatch("editComment", this.commentData);
      },
    },
    components: {}
  };
</script>


<style scoped>
</style>