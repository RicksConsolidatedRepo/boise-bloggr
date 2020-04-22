import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import {
  api
} from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    myBlogs: [],
    myComments: [],
    activeBlog: {},
    activeComment: {},
    comments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs
    },
    setMyBlogs(state, blogs) {
      state.myBlogs = blogs;
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    },
    setComments(state, comments) {
      state.comments = comments
    },
    setMyComments(state, comments) {
      state.myComments = comments;
    },
    setActiveComment(state, comment) {
      state.activeComment = comment
    },
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    async getProfile({
      commit
    }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getBlogs() {
      try {
        let res = await api.get("blogs")
        this.commit("setBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getMyBlogs({ commit }) {
      try {
        let res = await api.get("profile/blogs");
        commit("setMyBlogs", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getBlog({ commit }, blogId) {
      try {
        let res = await api.get(`blogs/${blogId}`);
        commit("setActiveBlog", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async createBlog({ commit }, newBlog) {
      try {
        let res = await api.post("blogs/", newBlog);
        this.dispatch("getMyBlogs")
      } catch (error) {
        console.error(error);
      }
    },

    async addBlog({
      commit,
      dispatch
    }, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },

    async deleteBlog({
      commit,
      dispatch
    }, blogId) {
      try {
        await api.delete('blogs/' + blogId)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },

    async editBlog({ commit }, blog) {
      try {
        let res = await api.put("blogs/" + blog.id, blog);
        this.dispatch("getBlogs")
      } catch (error) {
        console.error(error);
      }
    },

    async selectBlog({
      commit,
      dispatch
    }, blogId) {
      try {
        let res = await api.get('blogs/' + blogId)
        console.log(res.data)
        commit('setActiveBlog', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getComments({
      commit,
      dispatch
    }) {
      try {
        let res = await api.get("comments")
        commit('setComments', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getMyComments({ commit }) {
      try {
        let res = await api.get("profile/comments");
        commit("setMyComments", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async createComment({ commit }, newComment) {
      try {
        let res = await api.post("comments/", newComment);
        this.dispatch("getMyComments")
      } catch (error) {
        console.error(error);
      }
    },

    async addComment({
      commit,
      dispatch
    }, newComment) {
      try {
        let res = await api.post('comments/', newComment)
        this.dispatch('selectComment', newComment.commentId)
      } catch (error) {
        console.error(error)
      }
    },


    async deleteComment({ commit }, commentData) {
      try {
        let res = await api.delete("comments/" + commentData.id);
        this.dispatch("getBlog", commentData.blogId)
      } catch (error) {
        console.error(error);
      }
    },

    async editComment({ commit }, comment) {
      try {
        console.log("editComment", comment)
        let res = await api.put("comments/" + comment.id, comment);
        this.dispatch("getBlog", comment.blogId)
      } catch (error) {
        console.error(error);
      }
    },

    async selectComment({
      commit,
      dispatch
    }, commentId) {
      try {
        let res = await api.get('comments/' + commentId)
        console.log(res.data)
        commit('setActiveComment', res.data)
      } catch (error) {
        console.error(error)
      }
    },
  },
});