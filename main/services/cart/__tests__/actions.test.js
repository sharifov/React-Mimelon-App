import * as actions from '../actions';
import * as types from '../actionTypes';

const mockProduct = {
	"id": 12,
	"sku": "A1012",
	"title": "Samsung Galaxy S20",
	"description": "Samsung",
	"availableSizes": ["512GB"],
	"style": "Cloud Blue",
	"price": 225.0,
	"installments": 5,
	"currencyId": "AZN",
	"currencyFormat": "AZN",
	"isFreeShipping": false
};

describe('Проверка floatcart -а', () => {
  describe('loadCart', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.LOAD_CART,
        payload: mockProduct
      };

      expect(actions.loadCart(mockProduct)).toEqual(expectedAction);
    });
  });

  describe('addProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.ADD_PRODUCT,
        payload: mockProduct
      };

      expect(actions.addProduct(mockProduct)).toEqual(expectedAction);
    });
  });

  describe('removeProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.REMOVE_PRODUCT,
        payload: mockProduct
      };

      expect(actions.removeProduct(mockProduct)).toEqual(expectedAction);
    });
  });
});
