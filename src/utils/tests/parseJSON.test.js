import parseJSON from 'utils/parseJSON';

describe('parseJSON function', () => {
  it('returns data when json is called', () => {
    const data = [];
    expect(parseJSON({ json: () => data })).toBe(data);
  });
});
