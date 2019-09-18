import checkStatus from 'utils/checkStatus';

describe('checkStatus function', () => {
  it('returns response when status is 201', () => {
    const response = { status: 201 };
    expect(checkStatus(response)).toBe(response);
  });

  it('throws an error containing statusText', () => {
    const response = { status: 500, statusText: 'Error message' };
    expect(() => checkStatus(response)).toThrow(response.statusText);
  });
});
