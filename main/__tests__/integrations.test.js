import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';
import ShelfHeader from '../components/Shelf/ShelfHeader';
import Product from '../components/Shelf/ProductList/Product';
import CartProduct from '../components/FloatCart/CartProduct';

import { productsAPI } from '../services/util';

const productsMock = {
  products: [
    {
      "id": 11,
      "sku": "A1011",
      "title": "Huawei P40 Pro",
      "description": "Huawei",
      "availableSizes": ["128GB", "512GB"],
      "style": "Black",
      "price": 310.0,
      "installments": 9,
      "currencyId": "AZN",
      "currencyFormat": "AZN",
      "isFreeShipping": true
    },
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
    }
  ]
};

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(productsAPI, {
    status: 200,
    response: productsMock
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('Внедрение', () => {
  it('Выборка 2 продуктов и добавление одной', done => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(0);

    moxios.wait(() => {
      wrapped.update();

      expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(2);

      expect(wrapped.find(CartProduct).length).toEqual(0);

      wrapped
        .find(Product)
        .at(0)
        .simulate('click');

      expect(wrapped.find(CartProduct).length).toEqual(1);

      wrapped.unmount();
      done();
    });
  });
});
