<script>
export default {
  props: ["id", "data"],

  methods: {
    deleteNote() {
      this.emitter.emit("changeNotePages", "Main");
      this.emitter.emit("deleteNote", {
        id: this.id,
      });
    },
  },
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
        <div style="display: flex; align-items: center;">
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
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(233, 176, 54); cursor: pointer"
            @click="deleteNote()"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V6.75C5.75 5.64543 6.64543 4.75 7.75 4.75H14L18.25 9V13.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 17.25L15.75 17.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M18 9.25H13.75V5"
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

