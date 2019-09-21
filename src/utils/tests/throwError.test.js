import throwError from 'utils/throwError';

describe('throwError function', () => {
  it('throws an error containing statusText', () => {
    const response = { statusText: 'Error message' };
    expect(() => throwError(response)).toThrow(response.statusText);
  });
});
