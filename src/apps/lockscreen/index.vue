<script>
export default {
  data() {
    return {
      time: null,
      date: null,
    };
  },
  methods: {
    getTime() {
      let date = new Date();
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      this.time = `${date.getHours()} : ${
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      }`;

      this.date = `${weekday[date.getDay()]}, ${
        month[new Date().getMonth()]
      } ${date.getDay()}`;
     
    },
  },
  created() {
    this.getTime();
    this.interval = setInterval(() => {
      this.getTime();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<template>
  <div class="app lockscreen">
    <div class="container">
      <div class="lock-status">
        <div class="icon">
          <img src="../../assets/icons/lock.svg" />
        </div>
      </div>
      <div class="datetime">
        <div class="time">{{ time }}</div>
        <div class="date">{{ date }}</div>
      </div>
    </div>
    <!-- <div class="quick-actions">
      <div class="button">
        <div class="icon">
          <img src="../../assets/svg/navigation.svg" alt="" />
        </div>
      </div>
      <div class="button">
        <div class="icon">
          <img src="../../assets/svg/camera.svg" alt="" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped src="../../assets/css/lockscreen.css"></style>
