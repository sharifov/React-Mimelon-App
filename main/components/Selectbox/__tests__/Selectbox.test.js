import Selectbox from '..';

const optionsMock = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Сперва дешевые' },
  { value: 'highestprice', label: 'Сперва дорогие' }
];

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Selectbox options={optionsMock} handleOnChange={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('mount 3 опции элемента', () => {
  expect(wrapped.find('option').length).toEqual(3);
});
