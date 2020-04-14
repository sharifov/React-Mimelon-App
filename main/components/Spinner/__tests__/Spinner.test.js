import Spinner from '../';

it('mount без сбоя', () => {
  const wrapped = mount(<Spinner />);
  wrapped.unmount();
});
