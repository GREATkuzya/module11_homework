import {getPercents} from '../index.js';

describe ("Get persent from number", () => {
    it('get 25 persent from 100', () => {
        expect(getPercents(25, 100)).toBe(25);
      });

    it('get ten persent from 100', () => {
        expect(getPercents("ten", 100)).toBe("Entering value not a number");
      });

    it('get 123 persent from -100', () => {
        expect(getPercents(123, -100)).toBe(-123);
      });

      it('get -55 persent from 100', () => {
        expect(getPercents(-55, 100)).toBe("Value of percent should be above zero");
      });

      it('get 1.23 persent from 0.5', () => {
        expect(getPercents(1.23, 0.5)).toBe(0.00615);
      });
})