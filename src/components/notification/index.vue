<script>
export default {
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    closeNotification(i) {
      this.notifications.splice(i, 1);
    },
  },
  created() {
    this.emitter.on("PutNotification", (evt) => {
      let notf = this.notifications.push(evt);
      setTimeout(() => {
        this.notifications.splice(notf - 1, 1);
      }, 6000);
    });
  },
};
</script>

<template>
  <ul v-if="notifications.length !== 0">
    <li v-for="(item, i) in notifications" v-bind:key="i" class="notification">
      <div style="display: flex; justify-content: space-between; height: 4vh">
        <div class="app-details">
          <img class="img" :src="item.image" v-if="item.image === 0" />
          <p class="application">{{ item.application }}</p>
        </div>
        <p
          class="application"
          @click="closeNotification(i)"
          style="cursor: pointer"
        >
          X
        </p>
      </div>
      <p class="description">{{ item.description }}</p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  z-index: 99;
  left: 0;
  position: absolute;
  right: 0;
  margin-left: -40px;
}
li:first-child {
  margin-top: 20px !important;
}
@keyframes notifcationEffect {
  0% {
    top: -100px;
  }
  20% {
    top: 0px;
  }
}
.notification {
  list-style: none;
  background-color: rgba(255, 255, 255, 2);
  color: white;
  z-index: 99;

  animation: notifcationEffect 4s;
  position: relative;

  margin-top: 10px;
  border-radius: 10px;
  margin-left: 6px;
  margin-right: 6px;
}
.notification .application {
  font-size: 12px;
  color: #808080;
  margin-right: 10px;
  margin-left: 3px;
}
.notification .description {
  color: #000;
  font-size: 12px;
  /* padding: 10px; */
  position: relative;
  /* top: -3.5vh; */
  padding-left: 10px;
  padding-bottom: 10px;
  width: 30vh;
  left: 2px;
  margin-top: 0;
}
.img {
  width: 1.7vh;
}
.app-details {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
</style>
