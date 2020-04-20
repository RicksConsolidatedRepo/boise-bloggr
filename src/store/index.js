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
    activeBlog: {},
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
    }
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

    async editBlog({
      commit,
      dispatch
    }, blog) {
      try {
        let res = await api.put("blogs/" + blog.id, blog)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
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

    async addComment({
      commit,
      dispatch
    }, newComment) {
      try {
        let res = await api.post('comments/', newComment)
        this.dispatch('selectBlog', newComment.blogId)
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

    async deleteComment({
      commit,
      dispatch
    }, commentId) {
      try {
        let res = api.delete("comments/" + commentId.id)
        dispatch('getComments')
      } catch (error) {
        console.error(error)
      }
    }
  },
});