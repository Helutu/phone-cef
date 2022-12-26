<script>
import ChangeWp from "./changeWp.vue";

export default {
  methods: {
    changePage(page) {
      this.page = page;
    },
  },
  created() {
    this.emitter.on("changeSettingsPages", (evt) => {
      this.page = evt;
      console.log(evt)
    });
  },
  data() {
    return {
      page: "Main",
    };
  },
  components: { ChangeWp },
};
</script>

<template>
  <div class="app settings" v-if="page === 'Main'">
    <div class="container">
      <div class="title-bar">
        <div class="title">Settings</div>
      </div>
      <div class="search-bar">
        <div class="input-group">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
              <path
                d="M4.337 7.885a3.549 3.549 0 1 0-3.548-3.549 3.548 3.548 0 0 0 3.548 3.549zm2.701-.155a4.337 4.337 0 1 1 .693-.693.502.502 0 0 1 .123.091l3.011 3.011a.513.513 0 0 1-.725.725l-3.011-3.011a.502.502 0 0 1-.091-.123z"
              />
            </svg>
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div class="workspace">
        <div class="rows">
          <div class="row profile">
            <div class="details">
              <div class="profile-img">
                <img src="../../assets/icons/usericon.png" />
              </div>
              <div class="about">
                <p>Helutu BOSS</p>
                <p>Account Details</p>
              </div>
            </div>
            <div>
              <div class="icon">
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="icon">
              <img src="../../assets/icons/theme.svg" alt="" />
            </div>
            <div class="info">
              <div class="title">My number</div>
              <div>
                <p
                  style="
                    margin-top: 0;
                    margin-bottom: 0;
                    color: grey;
                    font-size: 16px;
                  "
                >
                  5555555
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="icon">
              <img src="../../assets/icons/dnd.svg" alt="" />
            </div>
            <div class="info" style="padding-right: 0">
              <div class="title">Wallpaper</div>
              <div style="cursor: pointer" @click="changePage('changeWp')">
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ChangeWp v-if="page === 'changeWp'" />
</template>

<style scoped src="../../assets/css/settings.css"></style>


