<script>
export default {
  props: ["data"],
  beforeMount() {
    this.emitter.emit(
      "changeBg",
      "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(-45deg, #304776 0%, #5a97bd 100%)"
    );
    this.playSong()
    // let phone = this.data.find((phone) => phone.number === this.id);
    // phone ? (this.name = phone.name) : (this.name = this.id);
  },
  methods: {
    reject() {
      this.emitter.emit("changeBg", "#fff");
      this.emitter.emit("downbarShow", true);
      this.emitter.emit("changePageHere", "Main");

      this.audio.pause();
      this.audio.currentTime = 0;
    },
    accept() {
      this.audio.pause();
      this.audio.currentTime = 0;

     
      this.emitter.emit("changePageHere", "CallPage");
      setTimeout(() => {
        this.emitter.emit('Responde', this.name)
      }, 10);
    },
    playSong() {
      this.audio = new Audio("src/assets/audio/song.mp3");
      this.audio.volume = 0.5;
      this.audio.loop = true;
      this.audio.play();
    },
  },
  data() {
    return {
      name: "Helutu",
      status: "Calling you",
      audio: null,
    };
  },
};
</script>

<template>
  <div class="main">
    <div class="by">
      <h1>{{ name }}</h1>
      <p>{{ status }}</p>
    </div>
    <div class="menu">
      <div class="btn reject" @click="reject()">
        <div class="circle">
          <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 15l-3-2V8.842zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 15l3-2V8.842z" fill="white"></path></svg>
        </div>
        <span>Reject</span>
      </div>
      <div class="btn accept" @click="accept()">
        <div class="circle">
          <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" fill="white"></path> </svg>
        </div>
        <span>Accept</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 100px;
  justify-content: space-between;
  height: 100%;
}
.by {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.by p {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  color: #fff;
  font-size: 12px;
}
.by h1 {
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  margin-block-start: 0;
  margin-block-end: 6px;
  margin-top: 6px;
}
.menu {
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
}
.menu .btn {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu .btn .circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.menu .btn .circle svg {
  width: 30px;
}
.menu .btn.reject .circle {
  background: red;
}
.menu .btn.accept .circle {
  background: green;
}
.menu .btn span {
  font-weight: 100;
  font-style: normal;
  color: #fff;
  font-size: 12px;
  padding-top: 5px;
}
</style>