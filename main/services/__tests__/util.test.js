import { formatPrice } from '../util';

describe('Пакетовые функции', () => {
  describe('formatPrice()', () => {
    it('должен поменять точки на запятую', () => {
      expect(formatPrice(10, 'AZN')).toEqual('10,00');
    });

    it('должен вернуть сумму с точкой', () => {
      expect(formatPrice(10)).toEqual('10.00');
    });
  });
});
