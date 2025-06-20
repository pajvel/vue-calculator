<template>
  <div class="calc">
    <div class="btn btn-theme" @click="swithTheme">
      {{ theme === 'dark' ? '☀️' : '🌙' }}
    </div>
    <CalcScreen :value="srtok" />

    <div class="buttons">
        <CalcButtons
          :firstNum="firstNum"
          :dotka="dotka"
          :cleanNum="cleanNum"
          :viras="viras"
          :ravni="ravni"
          :handleKey="handleKey"
          :acFunc="acFunc"
          :procent="procent"
      />
    </div>

  </div>

</template>

<script>

import CalcScreen from './components/CalcScreen.vue';
import CalcButtons from "./components/CalcButtons.vue";
import { useCalculator } from "./logic/Calculator";
export default {
  components: { CalcScreen, CalcButtons },
  setup() {
    const {
      srtok,
      firstNum,
      dotka,
      cleanNum,
      viras,
      ravni,
      procent,
      acFunc,
    } = useCalculator()
    return {
      srtok,
      firstNum,
      dotka,
      cleanNum,
      viras,
      ravni,
      procent,
      acFunc,
    }
  },
  data() {
    return {
      theme: 'dark', // начальная тема
    };
  },

  methods: {
        swithTheme(){
          this.theme =  this.theme === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', this.theme);
        },
        handleKey(e) {
          const key = e.key;
          if (key >= '0' && key <= '9') {
            this.firstNum(Number(key));
          } else if (key === '.') {
            this.dotka();
          } else if (['+', '-', '*', '/'].includes(key)) {
            this.viras(key);
          } else if (key === 'Enter') {
            this.ravni();
          } else if (event.key === 'Backspace' && event.shiftKey) {
            this.srtok = '0';
          } else if (key === 'Backspace') {
            this.cleanNum();
          }
        },
    },
  mounted() {
    window.addEventListener('keydown', this.handleKey);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  },
}
</script>

<style scoped>
/* Можно оставить пустым или добавить дополнительные стили */
</style>