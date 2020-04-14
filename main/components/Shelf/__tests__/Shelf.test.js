import Shelf from '..';
import Root from '../../../Root';
import ShelfHeader from '../ShelfHeader';
import ProductList from '../ProductList';
import Product from '../ProductList/Product';

const initialState = {
  shelf: {
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
      <Shelf />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('показ 2 товаров', () => {
  expect(wrapped.find(Product).length).toEqual(2);
});

it('показ шапки shelf с 2 товаром', () => {
  expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(2);
});

it('показ список товаров', () => {
  expect(wrapped.find(ProductList).length).toEqual(1);
});
