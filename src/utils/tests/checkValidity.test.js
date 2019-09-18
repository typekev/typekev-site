import checkValidity from 'utils/checkValidity';

describe('checkValidity function', () => {
  it('returns true for status code 200', () => {
    expect(checkValidity(200)).toBe(true);
  });
  it('returns true for status code 200', () => {
    expect(checkValidity(200)).toBe(true);
  });
});
