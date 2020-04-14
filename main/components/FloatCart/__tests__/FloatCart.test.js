import Root from '../../../Root';
import FloatCart from '..';
import CartProduct from '../CartProduct';

const initialState = {
  cart: {
    products: [
		{
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
		},
		{
		  "id": 13,
		  "sku": "A1013",
		  "title": "iPhone 8 with FaceTime",
		  "description": "Apple",
		  "availableSizes": ["256GB", "64GB"],
		  "style": "Silver",
		  "price": 147.0,
		  "installments": 3,
		  "currencyId": "AZN",
		  "currencyFormat": "AZN",
		  "isFreeShipping": true
		}
    ]
  }
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <FloatCart />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('mount изменение 2 товара', () => {
  expect(wrapped.find(CartProduct).length).toEqual(2);
});
