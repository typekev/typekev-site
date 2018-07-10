
import { fromJS } from 'immutable';
import structureReducer from '../reducer';

describe('structureReducer', () => {
  it('returns the initial state', () => {
    expect(structureReducer(undefined, {})).toEqual(fromJS({}));
  });
});
