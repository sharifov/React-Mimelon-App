import Product from '..';
import Root from '../../../../../Root';

const productMock = {
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

it('mount без сбоя', () => {
  const wrapped = mount(
    <Root>
      <Product product={productMock} addProduct={() => {}} />
    </Root>
  );
  wrapped.unmount();
});
