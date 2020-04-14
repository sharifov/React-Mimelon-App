import CartProduct from '../';

const productMock = {
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
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <CartProduct product={productMock} removeProduct={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('Добавление класса shelf-item--mouseover когда наводим на x button', () => {
  expect(wrapped.find('.shelf-item').hasClass('shelf-item--mouseover')).toEqual(
    false
  );
  wrapped.find('.shelf-item__del').simulate('mouseover');
  expect(wrapped.find('.shelf-item').hasClass('shelf-item--mouseover')).toEqual(
    true
  );
});
