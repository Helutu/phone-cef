<script>
export default {
  props: ["id", "data"],

  beforeMount() {
    this.emitter.emit(
      "changeBg",
      "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(-45deg, #304776 0%, #5a97bd 100%)"
    );
    let phone = this.data.find((phone) => phone.number === this.id);
    phone ? (this.name = phone.name) : (this.name = this.id);
    this.playSound()
  },
  methods: {
   
  },
  data() {
    return {
      name: "Helutu",
      mute: false,
      audio: null,
      responde: false,
    };
  },
  computed: {
    req() {
      return this.data.find((item) => item.id === this.id);
    },
  },
};
</script>

<template>
  <div class="app call active">
    <div class="container">
      <div class="call-header">
        <div class="caller">{{ name }}</div>
        <div class="call-type">calling...</div>
      </div>
      <div class="control-buttons">
        <div class="keypad">
          <div class="button inactive"></div>
          <div
            class="button"
            data-desc="Mute"
            :class="{ active: mute }"
            @click="mute = !mute"
          >
            <div class="icon microphone-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 24">
                <path
                  d="M0 .967l1.273-.742 13.727 23.034-1.273.741zm8.368 16.437a4.066 4.021 0 0 1-4.928-3.925v-4.346zm2.988-2.657l-7.479-12.549a4.062 4.017 0 0 1 7.684 1.819v9.463a4.045 4 0 0 1-.207 1.267zm.916 1.536a5.566 5.504 0 0 0 .82-2.884v-2.408a.738.73 0 0 1 1.477 0v2.407a7.037 6.959 0 0 1-1.471 4.269zm-.908 6.146l.629 1.056a.739.731 0 0 1-.661.403h-7.663a.738.73 0 0 1 0-1.46h3.142v-2.074a6.998 6.92 0 0 1-6.378-6.708v-2.655a.738.73 0 0 1 1.477 0v2.656a5.598 5.536 0 0 0 7.222 5.04l.767 1.287a7.049 6.971 0 0 1-1.711.381v2.074h3.173z"
                />
              </svg>
            </div>
          </div>
          <div class="button inactive"></div>
          <div class="button inactive"></div>
          <div class="button inactive"></div>
          <div class="button inactive"></div>
        </div>
        <div class="button decline" @click="closeCall()">
          <div class="icon">
            <img src="../../assets/icons/phone_icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/calls/call.css"></style>