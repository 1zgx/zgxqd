<template>
    <div>
      <div id="top">
        <div id="calc-title">计算器1</div>
      </div>
      <div id="result">{{ result }}</div>
      <div id="button">
        <div @click="clearResult()">AC</div>
        <div @click="clickOperator('/')">÷</div>
        <div @click="clickOperator('*')">x</div>
        <div @click="del()">删除</div>
        <div @click="clickNumber(7)">7</div>
        <div @click="clickNumber(8)">8</div>
        <div @click="clickNumber(9)">9</div>
        <div @click="clickOperator('%')">%</div>
        <div @click="clickNumber(4)">4</div>
        <div @click="clickNumber(5)">5</div>
        <div @click="clickNumber(6)">6</div>
        <div @click="clickOperator('-')">-</div>
        <div @click="clickNumber(1)">1</div>
        <div @click="clickNumber(2)">2</div>
        <div @click="clickNumber(3)">3</div>
        <div @click="clickOperator('+')">+</div>
        <div></div>
        <div @click="clickNumber(0)">0</div>
        <div @click="clickPoint()">.</div>
        <div @click="doCalc()">=</div>
      </div>
    </div>
</template>


<style>
    #top {
        width: 450px;
        height: 50px;
        margin: auto;/* 居中 */
        background-color: #4278bb;
        border-radius: 10px 10px 0px 0px;
    }

    #calc-title {
        font-size: 22px;
        color: white;
        float: left;
        margin: 10px 10px 0px 200px;
    }

    #result {
        width: 445px;
        height: 60px;
        margin: auto;
        font-size: 40px;
        background-color: white;
        border: solid 3px #4278bb;
    }

    #button {
        width: 450px;
        height: 422px;
        background-color: #4278bb;
        margin: auto;
        }

    #button div{
        width: 108px;
        height: 80px;
        float: left;
        color: white;
        background-color: #7ecbff;
        margin: 2px;
        line-height: 80px;
        text-align: center;
        font-size: 26px;
    }

    #button div:hover{
        background-color: rgb(48,149,203);
    }

</style>

<script>
export default {
  data() {
    return {
      result: ''
    };
  },
  methods: {
    clickNumber(number) {
      this.result += number;
    },
    clickOperator(operator) {
      const string = this.result;
      const len = string.length;
      const last = string.charAt(len - 1);
      if (last === '+' || last === '-' || last === '*' || last === '/' || last === '%') {
        this.result = string.substr(0, len - 1) + operator;
      } else {
        this.result += operator;
      }
    },
    clickPoint() {
      if (!this.result.includes('.')) {
        this.result += '.';
      }
    },
    clearResult() {
      this.result = '';
    },
    del() {
      if (this.result.length > 0) {
        this.result = this.result.slice(0, -1);
      }
    },
    doCalc() {
      this.result = eval(this.result);
    }
  }
};
</script>



