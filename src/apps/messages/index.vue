<script>
import message from "./message.vue";
export default {
  beforeMount() {
    if(this.$store.getters.getBeforePage === "DetailsContact") {
      this.page = "Message";
    }
  },
  components: { message },
  methods: {
    OpenSMS(id) {
      this.page = "Message";
      this.id = id;
      console.log(this.page)
    },

  },
  created() {
    this.emitter.on("changePageSMS", (evt) => {
      this.page = evt;
    });
  },
  data() {
    return {
      page: "Main",
      id: null,
      sms: [
        {
          id: "1234",
          name: "Fleeca Bank",
          phoneNumber: "555 555",
          message: "ECMS6235 20:12 Purchase $260 MASTERCARD Balance: $129,570",
          checked: false,
          date: "Yesterday",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="app messages" v-if="page === 'Main'">
    <div class="container">
      <div class="title-bar">
        <div class="title">Messages</div>
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
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div class="workspace">
        <div
          class="message-wrapper"
          v-for="item in sms"
          v-bind:key="item"
          @click="OpenSMS(item.id)"
        >
          <div class="dot-block">
            <div class="dot" v-if="!item.checked"></div>
          </div>
          <div class="icon-wrapper">
            <div class="icon img">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                <g transform="matrix(1.039 0 0 1.039 .358 .359)">
                  <circle
                    cx="15.845"
                    cy="15.845"
                    r="15.845"
                    transform="translate(.655 .655)"
                  ></circle>
                  <path
                    d="M16.845 1a15.845 15.845 0 0 0 0 31.69h.2a16.567 16.567 0 0 1-11.027-4.424c2.443-2.179 6.734-2.311 7.592-4.555.066-1.056.066-1.783.066-2.773a5.458 5.458 0 0 1-1.519-3.238c-.4 0-.99-.4-1.122-1.849a1.379 1.379 0 0 1 .528-1.386c-1.254-4.952-.594-9.243 5.282-9.375 1.452 0 2.575.4 3.037 1.188 4.291.594 2.971 6.338 2.377 8.187a1.519 1.519 0 0 1 .528 1.386c-.2 1.452-.792 1.849-1.122 1.849a5.1 5.1 0 0 1-1.518 3.235 19.679 19.679 0 0 0 .066 2.773c.858 2.245 5.15 2.443 7.592 4.621a19.83 19.83 0 0 1-9.441 4.357 15.883 15.883 0 0 0-1.519-31.686z"
                    transform="translate(-.345 -.345)"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="message">
            <div class="basic-info">
              <div class="sender">{{ item.name }}</div>
              <div class="info">
                <div class="datetime">{{ item.date }}</div>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 9">
                    <path
                      d="M.191 1.112a.67.67 0 0 1-.021-.912.59.59 0 0 1 .865-.022l3.79 3.862a.692.692 0 0 1-.02.942l-3.769 3.839a.591.591 0 0 1-.866-.021.67.67 0 0 1 .019-.912l3.125-3.237a.219.219 0 0 0 0-.3z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="message-text">
              <p>{{ item.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <message :id="id" v-if="page === 'Message'" />
</template>

<style scoped src="../../assets/css/messages/index.css"></style>
