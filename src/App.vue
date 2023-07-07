<script>
import LockScreen from "./apps/lockscreen/index.vue";
import Home from "./apps/home/index.vue";
import Keypad from "./apps/calls/keypad.vue";
import Contacts from "./apps/calls/contacts.vue";
import Addcontact from "./apps/calls/addcontact.vue";
import Recent from "./apps/calls/recent.vue";
import Detailcontact from "./apps/calls/detailcontact.vue";
import Editcontact from "./apps/calls/editcontact.vue";
import Settings from "./apps/settings/index.vue";
import Messages from "./apps/messages/index.vue";
import Calculator from "./apps/calculator/index.vue";
import Notes from "./apps/notes/index.vue";
import Weather from "./apps/weather/index.vue";
import Wallet from "./apps/wallet/index.vue";
import WalletPayPage from "./apps/wallet/pay.vue";
import WalletTransferPage from "./apps/wallet/transfer.vue";
import WalletRequestPage from "./apps/wallet/requestR.vue";

import Notification from "./components/notification/index.vue";

export default {
  data() {
    return {
      show: null,
      wallpaperBackground:
        'url("https://w0.peakpx.com/wallpaper/112/265/HD-wallpaper-ios-14-apple-iphone.jpg")',
      Background: "",
      downbar: true,
      interval: null,
      time: null,
    };
  },
  computed: {
    page() {
      return this.$store.getters.getPageState;
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  watch: {
    page(page) {
      switch (page) {
        case "Calculator":
          this.Background = "#000";
          break;

        case "Notes":
          this.Background = "#1b1b1b";
          break;

        case "Weather":
          this.Background =
            "linear-gradient(202deg, rgba(2,0,36,1) 0%, rgba(0,37,136,1) 0%, rgba(0,212,255,1) 100%)";
          break;

        case "Wallet":
        case "WalletTransferPage":
        case "WalletRequestPage":
        case "WalletPayPage":
          this.Background =
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(5,31,50,1) 58%, rgba(15,58,66,1) 100%)";
          break;

        case "Keypad":
        case "Contacts":
        case "Addcontact":
        case "Recents":
        case "DetailsContact":
        case "EditContact":
        case "Messages":
          this.Background = "#fff";
          break;

        case "Settings":
          this.Background = "#f0eef5";
          break;
        default:
          this.Background = "";
          break;
      }
    },
  },
  methods: {},
  components: {
    Settings,
    Messages,
    LockScreen,
    Home,
    Keypad,
    Contacts,
    Addcontact,
    Recent,
    Detailcontact,
    Editcontact,
    Calculator,
    Notification,
    Notes,
    Weather,
    Wallet,
    WalletPayPage,
    WalletTransferPage,
    WalletRequestPage,
  },
  created() {
    this.emitter.on("changeBg", (evt) => {
      this.Background = evt;
    });
    this.emitter.on("changeBgWp", (evt) => {
      this.wallpaperBackground = `url(/src/assets/backgrounds/bg${evt}.png)`;
    });

    this.emitter.on("downbarShow", (evt) => {
      this.downbar = evt;
    });

    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "ArrowUp" && this.show === false) ||
        (e.key === "ArrowUp" && this.show === null)
      ) {
        this.show = true;
        this.$store.commit("CHANGE_PAGE", "LockScreen");
      }
      if (e.key === "ArrowDown" && this.show) {
        this.show = false;
      }
    });

    this.interval = setInterval(() => {
      let date = new Date();
      this.time = `${date.getHours()} : ${
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      }`;
    }, 1000);
  },
};
</script>

<template>
  <div
    id="iphone"
    style="transform: scale(0.849074)"
    v-if="this.show !== null"
    :class="{ fromBottomToUp: this.show, fromUpToBottom: !this.show }"
  >
    <div class="face">
      <div class="forelock">
        <!-- <div class="speaker"></div> -->
        <div class="camera">
          <div class="camera-dot"></div>
        </div>
      </div>
      <div
        class="screen wallpaper"
        :style="`background: ${
          this.$store.getters.getPageState === 'LockScreen' ||
          this.$store.getters.getPageState === 'Home'
            ? this.wallpaperBackground
            : this.Background
        }`"
      >
        <div class="status-bar">
          <div class="bar">
            <div
              class="time"
              :class="{
                dark:
                  this.Background === '#fff' || this.Background === '#f0eef5',
              }"
            >
              {{ time }}
            </div>
            <div class="status-icons">
              <div
                class="icon service-icon"
                data-state="4"
                :class="{
                  dark:
                    this.Background === '#fff' || this.Background === '#f0eef5',
                }"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8">
                  <path
                    d="M12.365 0h.835a.781.781 0 0 1 .8.762v6.476a.781.781 0 0 1-.8.762h-.835a.781.781 0 0 1-.8-.762v-6.476a.781.781 0 0 1 .8-.762z"
                  />
                  <path
                    d="M8.51 1.714h.835a.781.781 0 0 1 .8.762v4.762a.781.781 0 0 1-.8.762h-.835a.782.782 0 0 1-.8-.762v-4.762a.782.782 0 0 1 .8-.762z"
                  />
                  <path
                    d="M4.655 3.614h.835a.782.782 0 0 1 .8.762v2.862a.782.782 0 0 1-.8.762h-.835a.781.781 0 0 1-.8-.762v-2.857a.781.781 0 0 1 .8-.762z"
                  />
                  <path
                    d="M.8 5.143h.835a.781.781 0 0 1 .8.762v1.333a.781.781 0 0 1-.8.762h-.835a.781.781 0 0 1-.8-.762v-1.338a.781.781 0 0 1 .8-.757z"
                  />
                </svg>
              </div>
              <div
                class="icon battery-icon"
                data-battery-percent="100"
                :class="{
                  dark:
                    this.Background === '#fff' || this.Background === '#f0eef5',
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 9"
                  height="9"
                  width="20"
                >
                  <g>
                    <path
                      d="M2.062.001a2.021 2 0 0 0-2.062 1.957v5.085a2.021 2 0 0 0 2.062 1.957h14.02a2.021 2 0 0 0 2.062-1.957v-5.085a2.021 2 0 0 0-2.062-1.957zm0 .783h14.02a1.212 1.2 0 0 1 1.237 1.174v5.085a1.212 1.2 0 0 1-1.237 1.174h-14.02a1.212 1.2 0 0 1-1.237-1.174v-5.085a1.212 1.2 0 0 1 1.237-1.174zM18.97 2.611a1.938 1.918 0 0 1 0 3.389z"
                    />
                  </g>
                  <rect
                    x="1.633"
                    y="1.565"
                    rx=".799"
                    height="5.87"
                    width="14.694"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Notification />

        <!-- SCREEN -->
        <LockScreen v-if="this.$store.getters.getPageState === 'LockScreen'" />
        <Home v-if="this.$store.getters.getPageState === 'Home'" />
        <Settings v-if="this.$store.getters.getPageState === 'Settings'" />

        <Keypad v-if="this.$store.getters.getPageState === 'Keypad'" />
        <Contacts v-if="this.$store.getters.getPageState === 'Contacts'" />
        <Addcontact v-if="this.$store.getters.getPageState === 'Addcontact'" />
        <Recent v-if="this.$store.getters.getPageState === 'Recents'" />
        <Detailcontact
          v-if="this.$store.getters.getPageState === 'DetailsContact'"
        />
        <Editcontact
          v-if="this.$store.getters.getPageState === 'EditContact'"
        />

        <Messages v-if="this.$store.getters.getPageState === 'Messages'" />

        <Calculator v-if="this.$store.getters.getPageState === 'Calculator'" />

        <Notes v-if="this.$store.getters.getPageState === 'Notes'" />

        <Weather v-if="this.$store.getters.getPageState === 'Weather'" />

        <Wallet v-if="this.$store.getters.getPageState === 'Wallet'" />

        <WalletPayPage
          v-if="this.$store.getters.getPageState === 'WalletPayPage'"
        />

        <WalletTransferPage
          v-if="this.$store.getters.getPageState === 'WalletTransferPage'"
        />

        <WalletRequestPage
          v-if="this.$store.getters.getPageState === 'WalletRequestPage'"
        />

        <!-- -------------------------------- -->
        <div
          class="home-button-zone"
          v-if="this.$store.getters.getPageState !== 'Home'"
        >
          <div v-if="this.downbar">
            <div
              class="home-button-wrapper"
              @click="
                this.$store.commit('SET_BEFORE_PAGE', [
                  'Home',
                  this.$store.getters.getPageState,
                ])
              "
            >
              <div class="home-button"></div>
            </div>
          </div>
          <div v-else-if="this.downbar === false"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./assets/css/mockup.css">
</style>
