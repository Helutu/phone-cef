<script>
export default {
  data() {
    return {
      operator: "",
      firstNumber: "",
      isPrevOperator: false,
      secondaryDisplay: "",
      primaryDisplay: "0",
    };
  },
  methods: {
    ac() {
      this.operator = "";
      this.firstNumber = "";
      this.primaryDisplay = "0";
      this.secondaryDisplay = "";
      this.isPrevOperator = false;
    },

    PutNumber(nb) {
      if (this.primaryDisplay.length < 7) {
        if (this.primaryDisplay !== "0") {
          this.primaryDisplay += nb;
        } else if (nb !== "0") {
          this.primaryDisplay = nb;
        }
      }
    },
    pm() {
      if (this.primaryDisplay[0] == "-") {
        this.primaryDisplay = this.primaryDisplay.substring(1);
      } else if (this.primaryDisplay < 7 && this.primaryDisplay !== "0") {
        this.primaryDisplay = "-" + this.primaryDisplay;
      }
    },
    Equal() {
      this.firstNumber = this.calculate();

      this.operator = "";
      this.secondaryDisplay = this.firstNumber;
      this.primaryDisplay = "0";
      this.isPrevOperator = true;
    },
    Operator(btn) {
      if (!this.isPrevOperator) {
        if (this.secondaryDisplay && this.operator) {
          this.firstNumber = this.calculate();
        } else this.firstNumber = this.primaryDisplay;
        this.primaryDisplay = "0";
      }

      this.operator = btn;

      this.secondaryDisplay = this.firstNumber + " " + this.operator;
      this.isPrevOperator = true;
    },
    Decimal() {
      if (!this.primaryDisplay.includes(".")) {
        this.primaryDisplay += ".";
      }
    },
    calculate() {
      switch (this.operator) {
        case "+":
          return (
            Number(this.firstNumber) +
            Number(document.querySelector(".primary-display").innerHTML)
          );
        case "-":
          return (
            Number(this.firstNumber) -
            Number(document.querySelector(".primary-display").innerHTML)
          );
        case "x":
          return (
            Number(this.firstNumber) *
            Number(document.querySelector(".primary-display").innerHTML)
          );
        case "÷":
          return (
            Number(this.firstNumber) /
            Number(document.querySelector(".primary-display").innerHTML)
          );
        case "%":
          return (
            Number(this.firstNumber * 100) /
            Number(document.querySelector(".primary-display").innerHTML)
          );
      }
    },
  },
};
</script>

<template>
  <div class="app">
    <div class="calculator">
      <div class="secondary-display">{{ secondaryDisplay }}</div>
      <div class="primary-display">{{ primaryDisplay }}</div>
      <div class="buttons-container">
        <div class="button function ac" @click="ac()">C</div>
        <div class="button function pm" @click="pm()">±</div>
        <div class="button function percent" @click="Operator('%')">%</div>
        <div class="button operator division white" @click="Operator('÷')">
          ÷
        </div>
        <div class="button number white" @click="PutNumber('7')">7</div>
        <div class="button number white" @click="PutNumber('8')">8</div>
        <div class="button number white" @click="PutNumber('9')">9</div>
        <div
          class="button operator multiplication white"
          @click="Operator('x')"
        >
          x
        </div>
        <div class="button number white" @click="PutNumber('4')">4</div>
        <div class="button number white" @click="PutNumber('5')">5</div>
        <div class="button number white" @click="PutNumber('6')">6</div>
        <div class="button operator addition white" @click="Operator('+')">
          +
        </div>
        <div class="button number white" @click="PutNumber('1')">1</div>
        <div class="button number white" @click="PutNumber('2')">2</div>
        <div class="button number white" @click="PutNumber('3')">3</div>
        <div class="button operator subtraction white" @click="Operator('-')">
          -
        </div>
        <div class="button number zero white" @click="PutNumber('0')">0</div>
        <div class="button decimal white" @click="Decimal()">.</div>
        <div class="button equal white" @click="Equal()">=</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.white {
  color: #fff !important;
}
.calculator {
  position: absolute;
  bottom: 0;
  background-color: black;
  border-radius: 50px;
  margin-top: -30px;
  padding: 10px;
}

.secondary-display {
  font-size: 50px;
  text-align: right;
  color: #fff;
}

.primary-display {
  font-size: 50px;
  text-align: right;
  color: #fff;
}

.buttons-container {
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(5, 50px);
  grid-gap: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.button {
  background-color: #333;
  font-size: 24px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
}

.button:active {
  opacity: 1;
}

.function {
  background-color: #999;
  color: black;
}

.operator {
  background-color: orange;
  color: black;
}

.button.zero {
  width: 130px;
  border-radius: 55px;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;

  grid-column: 1/3;
}
</style>
