import Filter from '../';
import Root from '../../../../Root';

const initialState = {
  filters: {
    items: ['XS', 'S']
  }
};

it('mounts без сбоя', () => {
  const wrapped = mount(
    <Root initialState={initialState}>
      <Filter />
    </Root>
  );
  wrapped.unmount();
});
