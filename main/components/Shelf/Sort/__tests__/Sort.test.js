import Sort from '../';
import Root from '../../../../Root';

const initialState = {
  sort: {
    type: 'highestprice'
  }
};

it('mounts без сбоя', () => {
  const wrapped = mount(
    <Root initialState={initialState}>
      <Sort />
    </Root>
  );
  wrapped.unmount();
});
