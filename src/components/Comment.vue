<template>
  <div class="card col-3 m-5">
    <h5>{{commentData.body}}</h5>
    <p>{{commentData.creatorEmail}}</p>
    <div class="col-3 d-flex mb-1 ml-auto">
      <button class="btn btn-sm" @click="editComment(commentData)" data-toggle="modal" data-target="#editComments">
        <i class="fas fa-pencil-alt text-warning"></i>
      </button>
      <EditComment id="editComment"></EditComment>
      <button class="btn btn-sm" @click="deleteComment()">
        <i class="fas fa-trash-alt text-danger"></i>
      </button>
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
        this.$store.dispatch("deleteComment", this.myComment);
      },
      editComment() {
        this.$store.dispatch("editComment", this.myComment);
      },
    },
    components: {}
  };
</script>


<style scoped>
</style>