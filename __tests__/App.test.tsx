import {doubleValue} from '../src/utils/util';

describe('Test util function', () => {
  test('Test doubleValue function', () => {
    expect(doubleValue(2)).toEqual(4);
  });
});
