import Checkbox from '..';

const label = 'M';
let wrapped;

beforeEach(() => {
  wrapped = mount(<Checkbox label={label} handleCheckboxChange={() => {}} />);
});

afterEach(() => {
  wrapped.unmount();
});

it('При ввода input проверка isChecked', () => {
  const input = wrapped.find('input');

  /* isChecked should start with false */
  expect(wrapped.state().isChecked).toEqual(false);
  input.simulate('change');
  /* Then toggle to true */
  expect(wrapped.state().isChecked).toEqual(true);
  input.simulate('change');
  /* And then to false */
  expect(wrapped.state().isChecked).toEqual(false);
});

it('innerText равняется ли Пропорцию', () => {
  const text = wrapped.find('span').text();
  expect(text).toEqual(label);
});
