import Thumb from '../';

const src = 'https://picsum.photos/200';

it('mount без сбоя', () => {
  const wrapped = mount(<Thumb src={src} />);
  wrapped.unmount();
});
