import { logError } from 'utils/request';

describe('request function', () => {
  it('returns undefined on catch', () => {
    const error = new Error('Error Message');
    expect(logError(error)).toBe(undefined);
  });
});
