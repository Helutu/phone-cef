<script>
export default {
  props: ["id", "data"],

  computed: {
    req() {
      return this.data.find((item) => item.id === this.id);
    },
  },
};
</script>

<template>
  <div class="app notes">
    <div class="container">
      <div class="control-bar" style="margin-top: -10px">
        <div
          class="control"
          @click="this.emitter.emit('changeNotePages', 'Main')"
          style="color: rgb(233, 176, 54)"
        >
          <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.25 6.75L4.75 12L10.25 17.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 12H5"
            ></path>
          </svg>
        </div>
        <div class="title" style="color: #f8f8f8">View Note</div>
        <div
          class="control"
          @click="this.emitter.emit('changeNotePages', 'EditNote')"
          style="color: rgb(233, 176, 54)"
        >
          <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 19.25H13.75"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="main"
        style="
          margin-top: -10px;
          margin-left: 0px;
          width: 250px;
          text-align: left;
        "
      >
        <h3>{{ req.title }}</h3>
        <p style="white-space: pre-line; word-wrap: break-word">
          {{ req.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/notes.css">
</style>

