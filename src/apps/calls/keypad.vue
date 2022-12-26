<script>
import DownBar from "../../components/downbar.vue";
export default {
  data() {
    return {
      numberPhone: "",
      limit: false,
    };
  },
  watch: {
    numberPhone: {
      handler: function (value, beforeValue) {
        if (value.length > 6) {
          this.numberPhone = beforeValue;
          this.limit = true;
          setTimeout(() => {
            this.limit = false;
          }, 1000);
        }
        if (value.length < 6) {
          this.limit = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    setNumber(nr) {
      return (this.numberPhone = this.numberPhone + nr);
    },
    addNumberToContacts(numberp) {
      if (numberp.length === 0) {
        return;
      }
      this.$store.commit("CHANGE_PAGE", "Addcontact");
      this.$store.commit("CHANGE_NUMBER", this.numberPhone);
    },
    callNumber() {
      if(this.numberPhone.length === 0) return;
      this.$store.commit("SET_BEFORE_PAGE", [
        "Contacts",
        this.$store.getters.getPageState,
      ]);
      this.$store.commit("CHANGE_PAGE", "Contacts");
      this.$store.commit("CHANGE_NUMBER", this.numberPhone);
    }
  },
  components: {
    DownBar,
  },
};
</script>

<template>
  <div class="app phone" style="flex-direction: none !important">
    <div class="container">
      <div class="number-utility">
        <div class="number-wrapper">
          <div class="number" :class="{ swipeLeftToRight: limit }">
            {{ this.numberPhone }}
          </div>
        </div>
        <div class="add-number" @click="addNumberToContacts(this.numberPhone)">
          <div class="title" v-if="this.numberPhone.length !== 0">
            Add number
          </div>
        </div>
      </div>

      <div class="keypad">
        <div class="key" @click="setNumber('1')">
          <div class="digit">1</div>
          <div class="chars"></div>
        </div>
        <div class="key" @click="setNumber('2')">
          <div class="digit">2</div>
          <div class="chars">A B C</div>
        </div>
        <div class="key" @click="setNumber('3')">
          <div class="digit">3</div>
          <div class="chars">D E F</div>
        </div>
        <div class="key" @click="setNumber('4')">
          <div class="digit">4</div>
          <div class="chars">G H I</div>
        </div>
        <div class="key" @click="setNumber('5')">
          <div class="digit">5</div>
          <div class="chars">J K L</div>
        </div>
        <div class="key" @click="setNumber('6')">
          <div class="digit">6</div>
          <div class="chars">M N O</div>
        </div>
        <div class="key" @click="setNumber('7')">
          <div class="digit">7</div>
          <div class="chars">P Q R S</div>
        </div>
        <div class="key" @click="setNumber('8')">
          <div class="digit">8</div>
          <div class="chars">T U V</div>
        </div>
        <div class="key" @click="setNumber('9')">
          <div class="digit">9</div>
          <div class="chars">W X Y Z</div>
        </div>
        <div class="key asterisk" @click="setNumber('*')">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.967 15.131">
              <path
                d="M12.95 12.291l1.018-1.846-5.348-2.859 5.348-2.88-1.018-1.866-5.15 3.346.241-6.186h-2.115l.239 6.186-5.127-3.346-1.038 1.866 5.368 2.88-5.368 2.88 1.038 1.825 5.128-3.306-.239 6.146h2.114l-.241-6.126z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="key zero" @click="setNumber('0')">
          <div class="digit">0</div>
          <div class="chars">+</div>
        </div>
        <div class="key hashtag" @click="setNumber('#')">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
              <path
                d="M5.385 3.462h4.615v-3.462h1.923v3.462h3.077v1.923h-3.077v4.615h3.077v1.923h-3.077v3.077h-1.923v-3.077h-4.615v3.077h-1.923v-3.077h-3.462v-1.923h3.462v-4.615h-3.462v-1.923h3.462v-3.462h1.923zm0 1.923v4.615h4.615v-4.615z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="key inactive"></div>
        <div class="key call" @click="callNumber()">
          <div class="icon">
            <img src="../../assets/icons/phone_icon.svg" alt="" />
          </div>
        </div>
        <div
          class="key backspace"
          @click="this.numberPhone = this.numberPhone.slice(0, -1)"
        >
          <div class="icon">
            <img src="../../assets/icons/backspace.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- DOWN BAR -->
    <DownBar />
  </div>
</template>

<style scoped src="../../assets/css/calls/keypad.css"></style>
