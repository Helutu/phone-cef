<script>
export default {
  methods: {
    selectBg(id) {
      this.emitter.emit('changeBgWp', id)
      this.emitter.emit("PutNotification", {
          application: "Settings",
          description: "The background has been set!",
        });
    },
  },
  data() {
    return {
      backgrounds: ["1", "2", "3"],
    };
  },
};
</script>

<template>
  <div class="app settings">
    <div class="container">
      <div class="control-bar">
        <div class="control back" @click="this.emitter.emit('changeSettingsPages', 'Main')">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 10 17"
            >
              <path
                d="M9.619,2.1A1.214,1.214,0,0,0,9.66.378,1.229,1.229,0,0,0,7.929.336Q.371,7.61.351,7.631a1.254,1.254,0,0,0,.04,1.78l7.537,7.251a1.229,1.229,0,0,0,1.732-.039A1.214,1.214,0,0,0,9.622,14.9L3.373,8.786a.4.4,0,0,1,0-.57Z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="title">Background</div>
        <div class="control inactive"></div>
      </div>
      <div class="box">
        <img
          v-for="(item) in backgrounds"
          :src="`/src/assets/backgrounds/bg${item}.png`"
          v-bind:key="item"
          @click="selectBg(item)"
          class="img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background: #fff;
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  height: 57vh;
  overflow: auto;
}
.box .img {
  height: 25vh;
  width: 40%;
  border-radius: 6px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  cursor: pointer;
}
</style>