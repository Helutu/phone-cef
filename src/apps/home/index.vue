<script>
export default {
  methods: {
    goApp(app) {
      this.$store.commit('CHANGE_PAGE', app.name)
      this.$store.commit("SET_BEFORE_PAGE", [
        app.name,
        this.$store.getters.getPageState,
      ]);
    },
  },
  data() {
    return {
      apps: [
        {
          name: "Calculator",
          icon: "calculator.png",
        },
        {
          name: "Notes",
          icon: "notes.png",
        },
        {
          name: "Weather",
          icon: "weather.svg",
        },
        {
          name: "Wallet",
          icon: "wallet.svg",
        },
      ],
      bottomApps: [
        {
          name: "Keypad",
          icon: "phone.svg",
          notifications: 0,
        },
        {
          name: "Messages",
          icon: "message.svg",
          notifications: 1,
        },
        {
          name: "Contacts",
          icon: "contacts.png",
          notifications: 0,
        },
        {
          name: "Settings",
          icon: "settings.svg",
          notifications: 0,
        },
      ],
    };
  },
};
</script>

<template>
  <div
    class="app homescreen"
    :class="{
      'zoom-in-out-box ': this.$store.getters.getBeforePage === 'LockScreen',
    }"
  >
    <div class="Scontainer">
      <div class="apps">
        <div class="app-wrapper" v-for="(item, index) in apps" :key="index">
          <div
            class="app"
            @click="this.$store.commit('CHANGE_PAGE', item.name)"
          >
            <div class="icon">
              <img v-bind:src="'/src/assets/icons/' + item.icon" />
            </div>
            <div class="title">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dock">
      <ul class="dock-apps">
        <li
          class="app"
          v-for="(item, index) in bottomApps"
          :key="index"
          @click="goApp(item)"
        >
          <div class="icon">
            <img v-bind:src="'/src/assets/icons/' + item.icon" />
          </div>
          <div class="notification-counter" v-if="item.notifications !== 0">
            {{ item.notifications }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/home.css"></style>
