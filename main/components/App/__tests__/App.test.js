import Root from '../../../Root';
import App from '../';

import Shelf from '../../Shelf';
import FloatCart from '../../FloatCart';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('показ shelf', () => {
  expect(wrapped.find(Shelf).length).toEqual(1);
});

it('показ floatCart', () => {
  expect(wrapped.find(FloatCart).length).toEqual(1);
});
