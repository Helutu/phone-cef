import { createStore } from "vuex";

export default createStore({
  state: {
    page: "LockScreen",
    beforePage: "",
    passNumber: "",
    id: "",
    contact: {}
  },
  mutations: {
    CHANGE_PAGE: (state, payload) => {
      state.page = payload;
    },
    SET_BEFORE_PAGE: (state, payload) => {
      state.page = payload[0];
      state.beforePage = payload[1];
    },
    CHANGE_NUMBER: (state, payload) => {
      state.passNumber = payload;
    },
    CHANGE_ID: (state, payload) => {
      state.id = payload;
    },
    CHANGE_CONTACT: (state, payload) => {
      state.contact = payload;
    }
  },
  getters: {
    getPageState: (state) => {
      return state.page;
    },
    getBeforePage: (state) => {
      return state.beforePage;
    },
    getNumber: (state) => {
      return state.passNumber;
    },
    getID: (state) => {
      return state.id;
    },
    getContact: (state) => {
      return state.contact;
    }
  },
});
