<script>
import Downbar from "../../components/downbar.vue";
import Call from "./call.vue";

export default {
  components: { Downbar, Call },
  
  methods: {
    getMissedCalls() {
      this.missedCalls = this.$store.getters.getRecentCalls.filter((e) => e.type === "Missed");
    },
    Call(id) {
      this.$store.commit("SET_BEFORE_PAGE", [
        "Contacts",
        this.$store.getters.getPageState,
      ]);
      this.$store.commit("CHANGE_PAGE", "Contacts");
      this.$store.commit("CHANGE_NUMBER", id); 
    },
    getNameFromNumber(number) {
      let contact = this.$store.getters.getContacts.find(
        (contact) => contact.number === parseInt(number)
      )
      if(contact) {
        return contact.name
      } else {
        return number;
      }
    },
    goToDetails(call) {
      let contact = this.$store.getters.getContacts.find(
        (contact) => contact.number === parseInt(call.number)
      )
      if (contact === undefined) {
        this.$store.commit("CHANGE_PAGE", "Addcontact");
        this.$store.commit("CHANGE_NUMBER", call.number);
        return;
      }
      this.$store.commit("SET_BEFORE_PAGE", [
        "DetailsContact",
        this.$store.getters.getPageState,
      ]);
      this.$store.commit("CHANGE_PAGE", "DetailsContact");
      this.$store.commit("CHANGE_CONTACT", { name: this.getNameFromNumber(call.number), number: call.number });
    },
  },
  created() {
    this.getMissedCalls();
  },
  data() {
    return {
      page: "All",
      calls: [],
      missedCalls: [],
    };
  },
};
</script>

<template>
  <div class="app contacts recents">
    <div class="container">
      <div class="control-bar" style="margin-top: 12px">
        <div class="control inactive"></div>
        <div class="control switcher">
          <div class="switch-buttons">
            <button
              :class="{ active: this.page === 'All' }"
              @click="this.page = 'All'"
            >
              All
            </button>
            <button
              :class="{ active: this.page === 'Missed' }"
              @click="this.page = 'Missed'"
            >
              Missed
            </button>
          </div>
        </div>
      </div>
      <div class="title-bar">
        <div class="title">Recent</div>
      </div>
      <div v-if="this.page === 'Missed' && missedCalls.length === 0">
        <p style="color: red; font-weight: bold">You have no missed calls</p>
      </div>
      <div class="workspace" v-if="this.page === 'Missed'">
        <div
          class="call-wrapper"
          v-for="(call, index) in missedCalls"
          :key="index"
        >
          <div class="call missed">
            <div class="basic-info" @click="Call(call.number)">
              <div class="caller">{{ getNameFromNumber(call.number) }}</div>
              <div class="call-type">{{ call.type }}</div>
            </div>
            <div class="datetime">{{ call.time }}</div>
            <div class="info-icon" @click="goToDetails(call)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 8">
                <path
                  d="M.793 7.658v-4.92h-.793v-.307h2.226v5.221h.774v.348h-3v-.342zm.717-6.091a.821.898 0 0 0 .896-.781.821.898 0 0 0-.896-.781.821.898 0 0 0-.896.781.821.898 0 0 0 .896.782z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="workspace" v-if="this.page === 'All'">
        <div class="call-wrapper" v-for="(call, index) in this.$store.getters.getRecentCalls" :key="index">
          <div class="call" :class="{ missed: call.type === 'Missed' }">
            <div class="basic-info" @click="Call(call.number)">
              <div class="caller">{{ getNameFromNumber(call.number) }}</div>
              <div class="call-type">{{ call.type }}</div>
            </div>
            <div class="datetime">{{ call.time }}</div>
            <div class="info-icon" @click="goToDetails(call)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 8">
                <path
                  d="M.793 7.658v-4.92h-.793v-.307h2.226v5.221h.774v.348h-3v-.342zm.717-6.091a.821.898 0 0 0 .896-.781.821.898 0 0 0-.896-.781.821.898 0 0 0-.896.781.821.898 0 0 0 .896.782z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Downbar />
  </div>
</template>

<style scoped src="../../assets/css/calls/contacts.css"></style>
