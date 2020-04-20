<template>
  <div class="comment col-3">
    <h5>{{commentData.body}}</h5>
    <p>{{commentData.creatorEmail}}</p>
    <div class="col-3 d-flex mb-1 ml-auto" v-if=" this.commentData.creatorEmail == this.profile.email">
      <button class="btn btn-sm" @click="editComment(commentData)" data-toggle="modal" data-target="#editComments">
        <i class="fas fa-pencil-alt text-warning"></i>
      </button>
      <EditComments id="editComments"></EditComments>
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
      editComment() {
        console.log("deleteComment", this.commentData)
        this.$store.dispatch("deleteComment", this.commentData);
      }
    },
    components: {}
  };
</script>


<style scoped>
</style>