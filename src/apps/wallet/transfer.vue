<script>
export default {
  data() {
    return {
      sumInput: "",
      fromInput: "",
    };
  },
  watch: {
    sumInput(value) {
        const result = value.replace(/[^0-9]/g, '');
            if (result !== value) this.sumInput = result;
            if (result.length > 2) this.sumInput = result.substring(0, result.length - 2) + "," + result.substring(result.length - 2);
    }
},
  methods: {
    wallet() {
      this.$store.commit("CHANGE_PAGE", "Wallet");
    },
    transfer() {
      // This.sumInput, this.fromInput
      if (this.sumInput === "" || this.fromInput === "") {
        return this.emitter.emit("PutNotification", {
          application: "Wallet",
          description: `Completeaza campurile libere!`,
        });
      }
      this.$store.commit("CHANGE_PAGE", "Wallet");
      return this.emitter.emit("PutNotification", {
        application: "Wallet",
        description: `Ai transferat $${this.sumInput} catre ${this.fromInput} cu succes!`,
      });
    },
    addDashNumber() {
        let stringValue = this.fromInput.replace(/[^0-9]/g, '');
      let formattedValue = "";

      if (stringValue.length > 3) {
        formattedValue =
          stringValue.substring(0, 3) + "-" + stringValue.substring(3, 6);
      } else {
        formattedValue = stringValue;
      }

      this.fromInput = formattedValue;
    },
  },
};
</script>

<template>
  <div class="app wallet">
    <div class="container">
      <div class="control-bar" style="margin-top: 10px">
        <div class="control" @click="wallet()" style="color: #fff">
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
        <div class="title" style="color: #fff; margin-top: 2px">Transfer</div>
      </div>

      <div class="main" style="margin-top: 30px; margin-left: 0px">
        <div class="transactions" style="height: 295px">
          <div class="dataForTransfer">
            <div class="emoji">👨</div>
            <div style="margin-left: 70px; margin-top: -46px">
              <p>transfer to:</p>
              <div style="margin-top: -15px; margin-left: -2px">
                <input
                  type="tel"
                  placeholder="000-000"
                  maxlength="7"
                  pattern="[0-9]*"
                  v-model="fromInput"
                  @input="addDashNumber"
                />
              </div>
            </div>

            <div style="margin-left: 10px">
              <p style="margin-top: 35px">willing to transfer:</p>
              <div style="margin-top: -15px; margin-left: -2px">
                <span style="color: #fff; font-size: 20px">$</span
                ><input
                  type="tel"
                  placeholder="1,000"
                  pattern="[0-9]*"
                  maxlength="8"
                  v-model="sumInput"
                />
              </div>
            </div>

            <div style="margin-top: 46px; margin-left: 12px">
              <button
                class="btn-dusty"
                style="width: 200px"
                @click="transfer()"
              >
                <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
                  <circle
                    cx="12"
                    cy="12"
                    r="7.25"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></circle>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M14.25 8.75H11.375C10.4775 8.75 9.75 9.47754 9.75 10.375V10.375C9.75 11.2725 10.4775 12 11.375 12H12.625C13.5225 12 14.25 12.7275 14.25 13.625V13.625C14.25 14.5225 13.5225 15.25 12.625 15.25H9.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 7.75V8.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 15.75V16.25"
                  ></path></svg
                ><br />Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/wallet.css"></style>

