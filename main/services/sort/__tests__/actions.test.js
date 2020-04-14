import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Проверка сортировки', () => {
  it('Проверка отработки payload', () => {
    const text = 'lowestprice';

    const expectedAction = {
      type: types.UPDATE_SORT,
      payload: text
    };

    expect(actions.updateSort(text)).toEqual(expectedAction);
  });
});
