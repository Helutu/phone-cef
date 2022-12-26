<script>
export default {
  data() {
    return {
      name: "",
      phonenumber: this.$store.getters.getNumber,
    };
  },
  methods: {
    addContact() {
      if (this.name === "" || this.phonenumber === "") return;
      this.$store.commit("CHANGE_NUMBER", "");
      this.$store.commit("CHANGE_PAGE", this.$store.getters.getBeforePage);
    },
    cancelContact() {
      this.$store.commit("CHANGE_PAGE", this.$store.getters.getBeforePage);
      this.$store.commit("CHANGE_NUMBER", "");
    },
  },
};
</script>

<template>
  <div class="app new-contact">
    <div class="Scontainer">
      <div class="control-bar">
        <div class="control" @click="cancelContact()">Cancel</div>
        <div class="title">New Contact</div>
        <div class="control" @click="addContact()">Done</div>
      </div>
      <div class="workspace">
        <div class="basic-info">
          <div class="icon">
            <img src="../../assets/icons/addcontact/person.png" alt="person" />
          </div>
          <div class="rows">
            <div class="row">
              <div style="display: flex; align-items: center">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class="iconRow"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    ></path>
                    <path
                      d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  class="inputPhone"
                  v-model="name"
                />
              </div>
            </div>

            <div class="row">
              <div style="display: flex; align-items: center">
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class="iconRow"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Phone number"
                  class="inputPhone"
                  v-model="phonenumber"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/calls/addcontact.css"></style>
