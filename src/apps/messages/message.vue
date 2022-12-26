<script>
export default {
  props: ["id"],
  beforeMount() {
    if (this.number === null) {
      this.number = this.id;
    }
  },
  created() {
    this.emitter.on("PutIdSMS", (evt) => {
      this.number = evt;
      console.log("putidsms: " + this.number);
    });
  },
  methods: {
    formatData(data) {
      
    },
    sendMessage() {
      this.messages.push({from: "me", time: new Date(), text: this.message})
      this.message = "";
    },
  },
  data() {
    return {
      number: null,
      counter: 3,
      name: "Fleeca Bank",
      message: "",
      messages: [
        {
          from: "me",
          time: new Date(),
          text: "Connect me browtf casds dsadasd sa as sad sa",
        },
        {
          from: "me",
          time: new Date(),
          text: "Connect me browtf casds dsadasd sa as sad sa",
        },
        {
          from: "me",
          time: new Date(),
          text: "Connect me browtf casds dsadasd sa as sad sa",
        },
        {
          from: "me",
          time: new Date(),
          text: "Connect me browtf casds dsadasd sa as sad sa",
        },
        {
          from: "me",
          time: new Date(),
          text: "Connect me browtf casds dsadasd sa as sad sa",
        },
        {
          from: "me",
          time: new Date(),
          text: "Connect me browtf casds dsadasd sa as sad sa",
        },
        {
          from: "me",
          time: new Date(),
          text: "Connect me browtf casds dsadasd sa as sad sa",
        },
        {
          from: "him",
          time: new Date(),
          text: "Connect me browtf casds dsadasd sa as sad sa",
        },
        {
          from: "me",
          time: new Date(),
          text: "Salut",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="app messages">
    <div class="container">
      <div class="control-bar">
        <div
          class="control back"
          @click="this.emitter.emit('changePageSMS', 'Main')"
        >
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 10 17"
            >
              <path
                d="M9.619,2.1A1.214,1.214,0,0,0,9.66.378,1.229,1.229,0,0,0,7.929.336Q.371,7.61.351,7.631a1.254,1.254,0,0,0,.04,1.78l7.537,7.251a1.229,1.229,0,0,0,1.732-.039A1.214,1.214,0,0,0,9.622,14.9L3.373,8.786a.4.4,0,0,1,0-.57Z"
              ></path>
            </svg>
          </div>
          <div class="counter">3</div>
        </div>
        <div class="title">{{ number }}</div>
        <div class="control inactive"></div>
      </div>
      <div class="workspace chat" id="chat">
        <div v-for="message in messages.slice().reverse()" v-bind:key="message">
          <div class="datetime" v-if="message.time">
            <timeago :datetime="message.time"></timeago>
          </div>
          <div class="messages-group" :class="{ my: message.from === 'me' }">
            <div class="message">{{ message.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-input">
      <div class="camera-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.296 17.75">
          <path
            d="M18.564 5.732a.555.555 0 1 0-.546-.555.551.551 0 0 0 .546.555zm-16.016-4.623h1.82a.367.367 0 0 1 .364.37v.74h-2.548v-.74a.367.367 0 0 1 .364-.37zm9.1 14.791a5.547 5.547 0 1 0-5.46-5.547 5.5 5.5 0 0 0 5.46 5.547zm0-1.109a4.438 4.438 0 1 1 4.368-4.437 4.4 4.4 0 0 1-4.368 4.437zm-9.464-11.833h3.035a1.088 1.088 0 0 0 .926-.521l.855-1.394a2.176 2.176 0 0 1 1.855-1.043h5.587a2.176 2.176 0 0 1 1.852 1.043l.858 1.394a1.088 1.088 0 0 0 .926.521h3.035a2.2 2.2 0 0 1 2.187 2.219v10.354a2.2 2.2 0 0 1-2.184 2.219h-18.932a2.2 2.2 0 0 1-2.184-2.219v-10.354a2.2 2.2 0 0 1 2.184-2.219z"
          ></path>
        </svg>
      </div>
      <div class="input-group">
        <input type="text" placeholder="Text Message" v-model="message" />
        <button class="send" @click="sendMessage()">
          <div class="icon">
            <img src="../../assets/icons/arrow.svg" alt="" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/messages/index.css"></style>
