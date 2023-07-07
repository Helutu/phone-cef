<script>
import Downbar from "../../components/downbar.vue";
import Call from "./call.vue";
import ViewCall from './viewcall.vue'

export default {
  components: { Downbar, Call, ViewCall },
  methods: {
    addNumberToContacts() {
      this.$store.commit("CHANGE_PAGE", "Addcontact");
    },
    Call(item) {
      this.emitter.emit("downbarShow", false);
      this.page = "CallPage";
      this.id = item.number;
    },
    showViewCall() {
      this.emitter.emit("downbarShow", false);
      this.page = 'ViewCall';
    },
    EditContact(name, number) {
      this.$store.commit("CHANGE_CONTACT", { name, number });
      this.$store.commit("CHANGE_PAGE", "EditContact");
      this.emitter.emit("changeBg", "#fff");
      this.emitter.emit("downbarShow", true);
    },
  },
  beforeMount() {


    // this.showViewCall();


    
    if (
      this.$store.getters.getBeforePage === "Keypad" || this.$store.getters.getBeforePage === "Recents" || this.$store.getters.getBeforePage === "DetailsContact" &&
      this.$store.getters.getNumber.length !== 0 
    ) {
      
      this.Call({ number: this.$store.getters.getNumber });
      this.$store.commit("CHANGE_NUMBER", "");
    }
  },
  data() {
    return {
      input: "",
      page: "Main",
      hover: false,
    };
  },
  computed: {
    FilterUserByInput() {
      return this.$store.getters.getContacts.filter((user) =>
        user.name.toLowerCase().includes(this.input.toLowerCase())
      );
    },
    sortNames: function () {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }

      return this.$store.getters.getContacts.sort(compare);
    },
  },
  created() {
    this.emitter.on("changePageHere", (evt) => {
      this.page = evt;
      this.$store.commit("CHANGE_PAGE", this.$store.getters.getBeforePage );
    });
  },
};
</script>

<template>
  <div class="app contacts" v-if="page === 'Main'">
    <div class="container">
      <div class="control-bar">
        <div class="control inactive"></div>
        <div class="title">Contacts</div>
        <div class="control add" @click="addNumberToContacts()">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
              <path d="M8 0h2v18h-2zM0 8h18v2h-18z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="search-bar">
        <div class="input-group">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
              <path
                d="M4.337 7.885a3.549 3.549 0 1 0-3.548-3.549 3.548 3.548 0 0 0 3.548 3.549zm2.701-.155a4.337 4.337 0 1 1 .693-.693.502.502 0 0 1 .123.091l3.011 3.011a.513.513 0 0 1-.725.725l-3.011-3.011a.502.502 0 0 1-.091-.123z"
              ></path>
            </svg>
          </div>
          <input type="text" placeholder="Search" v-model="input" />
        </div>
      </div>
      <div class="workspace">
        <div class="contacts-group">
          <div class="contact-wrapper" v-if="input === ''">
            <div
              class="contact"
              v-for="(item, i) in sortNames"
              :key="i"
              @mouseover="hover = item"
              @mouseleave="hover = {}"
            >
              <span @click="Call(item)">{{ item.name }}</span>

              <img
                src="https://www.svgrepo.com/show/345041/pencil-square.svg"
                v-if="hover === item"
                @click="EditContact(item.name, item.number)"
              />
            </div>
          </div>
          <div class="contact-wrapper" v-else>
            <div
              class="contact"
              v-for="(item, index) in FilterUserByInput"
              :key="index"
              @click="Call(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation -->
    <Downbar />
  </div>

  <Call :id="id" v-if="page === 'CallPage'" />
  <ViewCall :data="contacts" v-if="page === 'ViewCall'"/>
  
</template>

<style scoped src="../../assets/css/calls/contacts.css">
</style>
<style scoped>
.div-hover {
  background-color: yellow;
}
</style>
