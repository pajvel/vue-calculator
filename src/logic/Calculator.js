import { ref } from 'vue'
import { evaluate } from 'mathjs'

export function useCalculator() {
    const dist = ['*', '/', '+', '-']
    const srtok = ref('0')

    function firstNum(indx) {
        console.log('Нажата цифра:', indx);
        srtok.value === '0' ? srtok.value = `${indx}` : srtok.value += indx
    }

    function dotka() {
        srtok.value.includes('.') ? '' : srtok.value += '.'
    }

    function cleanNum() {
        srtok.value === 'Error' ?
            srtok.value = `0` : '';
        srtok.value = srtok.value.length === 1 ?
            `0`
            : (srtok.value.slice(0, -1).endsWith('.') ? srtok.value.slice(0, -2) :
                srtok.value.slice(0, -1));
    }

    function viras(deistv) {
        dist.includes(srtok.value.slice(-1)) ? '' : srtok.value = srtok.value + deistv;
    }

    function ravni() {
        try {
            srtok.value = evaluate(srtok.value).toString();
            if (!isFinite(srtok.value)) {
                throw new Error("Invalid operation");
            }
        } catch {
            srtok.value = 'Error';
        }
    }
    function acFunc() {
        srtok.value = '0';
    }
    function procent(){
        srtok.value= `${srtok.value/100}`
    }
    return {firstNum, dotka, cleanNum, viras, srtok, ravni, acFunc, procent};

}