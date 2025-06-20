<template>
  <div
      v-for="(btn, index) in buttons"
      :key="index"
      class="btn"
      :class="btn.class"
      tabindex="0"
      @click="handleClick(btn)"
  >
    {{ btn.label }}
  </div>
</template>

<script>
import { CalcButtons } from '../logic/CalcButtons.js'

export default {
  name: "CalcButtons",
  props: {
    firstNum: Function,
    dotka: Function,
    cleanNum: Function,
    viras: Function,
    ravni: Function,
    handleKey: Function,
    procent: Function,
    acFunc: Function,
  },
  data() {
    return {
      buttons: CalcButtons,
    };
  },
  methods: {
    handleClick(btn) {
      switch (btn.type) {
        case "num":
          this.firstNum(btn.value);
          break;
        case "op":
          this.viras(btn.value);
          break;
        case "dot":
          this.dotka();
          break;
        case "eq":
          this.ravni();
          break;
        case "clear":
          this.cleanNum();
          break;
        case "ac":
          this.acFunc();
          break;
        case "percent":
          this.procent();
          break;
        default:
          break;
      }
    }
  }
};
</script>
