import { createStore } from "vuex";

export default createStore({
  state: {
    page: "LockScreen",
    beforePage: "",
    passNumber: "",
    id: "",
    contact: {},
    contacts: [
      { name: "Helutu", number: 555555 },
      { name: "Dustyhawk", number: 123123 },
    ],
    RecentCalls: [
      {
        number: 555555,
        type: "Incoming",
        time: "13:18",
      },
      {
        number: 123123,
        type: "Incoming",
        time: "13:18",
      },
      {
        number: 555555,
        type: "Missed",
        time: "13:18",
      },
      {
        number: 123123,
        type: "Incoming",
        time: "13:18",
      },
      {
        number: 555555,
        type: "Incoming",
        time: "13:18",
      },
      {
        number: 654123,
        type: "Missed",
        time: "13:18",
      },
      {
        number: 123123,
        type: "Incoming",
        time: "13:18",
      },
      {
        number: 123456,
        type: "Incoming",
        time: "13:18",
      },
      {
        number: 555555,
        type: "Missed",
        time: "13:18",
      },
    ],
    messages: [
      {
        from: "him",
        time: new Date(),
        text: "Thank you bro for installing my phone",
        author: "Helutu",
      },
      {
        from: "me",
        time: new Date(),
        text: "I also thank you for posting it and the work done",
        author: "Helutu",
      },
      {
        from: "him",
        time: new Date(),
        text: "yooo bro",
        author: "Dustyhawk",
      },
    ]
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
    },
    ADD_CONTACT: (state, payload) => {
      state.contacts.push(payload)
    },
    CHANGE_CONTACTS: (state, payload) => {
      const contactIndex = state.contacts.findIndex(contact => contact.number === parseInt(payload.firstPhoneNumber));

      state.contacts[contactIndex].number = parseInt(payload.phoneNumber);
    },
    DELETE_CONTACT: (state, payload) => {
      state.contacts = state.contacts.filter(contact => contact.number !== payload)
    },
    ADD_RECENT_CALL: (state, payload) => {
      state.RecentCalls.push(payload)
    },
    ADD_MESSAGE: (state, payload) => {
      state.messages.push(payload)
    },
  },
  getters: {
    getPageState: (state) =>state.page,
    getBeforePage: (state) => state.beforePage,
    getNumber: (state) => state.passNumber,
    getID: (state) => state.id,
    getContact: (state) => state.contact,
    getContacts: (state) => state.contacts,
    getRecentCalls: (state) => state.RecentCalls,
    getMessages: (state) => state.messages,
  },
});
