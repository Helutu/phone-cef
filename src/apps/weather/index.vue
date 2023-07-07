<script>
import axios from "axios";

export default {
  data() {
    return {
      temps: [],
      city: "Iasi",
      apikey: "38d2ea53b1247910f44cf3ff5787e6ee",
      details: {
        feels: 0,
        humidity: 0,
        visibility: 0,
        precp: 0,
        temp: {
          now: 0,
          max: 0,
          min: 0,
        },
      },
    };
  },
  async beforeMount() {
    try {
      const { latitude, longitude } = await this.getCoordinates();
      const response = await this.getWeatherForecast(latitude, longitude);
      this.processWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    getCoordinates() {
      return axios
        .get(`https://geocoding-api.open-meteo.com/v1/search?name=${this.city}&count=1&language=en&format=json`)
        .then(res => res.data.results[0])
        .catch(err => { throw new Error(`Error fetching coordinates: ${err}`) });
    },
    getWeatherForecast(latitude, longitude) {
      return axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility,precipitation_probability`
        )
        .catch(err => { throw new Error(`Error fetching weather data: ${err}`) });
    },
    processWeatherData(data) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
      const formattedHour = `${String(currentDate.getHours()).padStart(
        2,
        "0"
      )}:00`;
      const indexHour = data.hourly.time.findIndex(
        (item) => item === `${formattedDate}T${formattedHour}`
      );

      const day = data.hourly.temperature_2m.slice(0, 24);
      this.details.temp.min = Math.round(Math.min(...day));
      this.details.temp.max = Math.round(Math.max(...day));

      if (
        indexHour !== -1 &&
        indexHour + 5 < data.hourly.time.length
      ) {
        this.details.temp.now =
          data.hourly.temperature_2m[indexHour];
        this.temps = data.hourly.temperature_2m
          .slice(indexHour, indexHour + 6)
          .map((item) => item);
        this.details.humidity = data.hourly.relativehumidity_2m.slice(indexHour, indexHour + 1)[0];
        this.details.feels = data.hourly.apparent_temperature.slice(indexHour, indexHour + 1)[0];
        this.details.visibility = (data.hourly.visibility.slice(indexHour, indexHour + 1)[0] * 0.000621371).toFixed();
        this.details.precp = data.hourly.precipitation_probability.slice(indexHour, indexHour + 1)[0];
      }
    },
  }
};
</script>


<template>
  <div class="app weather">
    <div class="container">
      <div class="main">
        <h3>{{ city }}</h3>
        <h4>{{ details.temp.now || 0 }}°</h4>
        <p class="maxmin">
          Max: {{ details.temp.max || 0 }}° Min: {{ details.temp.min || 0 }}°
        </p>
      </div>
      <div class="forecast">
        <div class="items">
          <div class="item">
            <h3>Now</h3>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png"
            />
            <p>{{ Math.round(temps[0]) || 0 }}°</p>
          </div>
          <div class="item">
            <h3>
              {{ String((new Date().getHours() + 1) % 24).padStart(2, "0") }}
            </h3>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png"
            />
            <p>{{ Math.round(temps[1]) || 0 }}°</p>
          </div>
          <div class="item">
            <h3>
              {{ String((new Date().getHours() + 2) % 24).padStart(2, "0") }}
            </h3>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png"
            />
            <p>{{ Math.round(temps[2]) || 0 }}°</p>
          </div>
          <div class="item">
            <h3>
              {{ String((new Date().getHours() + 3) % 24).padStart(2, "0") }}
            </h3>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png"
            />
            <p>{{ Math.round(temps[3]) || 0 }}°</p>
          </div>
          <div class="item">
            <h3>
              {{ String((new Date().getHours() + 4) % 24).padStart(2, "0") }}
            </h3>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png"
            />
            <p>{{ Math.round(temps[4]) || 0 }}°</p>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="card">
          <p>Feels Like</p>
          <h3>{{ details.feels }}°</h3>
        </div>
        <div class="card">
          <p>Humidity</p>
          <h3>{{ details.humidity }}%</h3>
        </div>
        <div class="card">
          <p>Visibility</p>
          <h3>{{ details.visibility }} mi</h3>
        </div>
        <div class="card">
          <p>Precip</p>
          <h3>
            {{ details.precp }}%
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/weather.css"></style>
