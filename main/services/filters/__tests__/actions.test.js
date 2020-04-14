import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Проверка фильтра', () => {
  it('Проверки отработки функции payload', () => {
    const text = 'L';

    const expectedAction = {
      type: types.UPDATE_FILTER,
      payload: text
    };

    expect(actions.updateFilters(text)).toEqual(expectedAction);
  });
});
