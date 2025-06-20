import { useCalculator } from '../../logic/Calculator';

describe('Калькулятор', () => {
    it('должен корректно складывать числа', () => {
        const { firstNum, viras, ravni, srtok } = useCalculator();
        firstNum(2);
        viras('+');
        firstNum(3);
        ravni();
        expect(srtok.value).toBe('5');
    });

    it('должен обрабатывать деление на ноль', () => {
        const { firstNum, viras, ravni, srtok } = useCalculator();
        firstNum(5);
        viras('/');
        firstNum(0);
        ravni();
        expect(srtok.value).toBe('Error');
    });

    it('должен сбрасываться через acFunc', () => {
        const { firstNum, acFunc, srtok } = useCalculator();
        firstNum(9);
        acFunc();
        expect(srtok.value).toBe('0');
    });
});
