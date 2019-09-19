import { logError } from 'utils/request';

describe('request function', () => {
  it('returns undefined on catch', () => {
    const errorMessage = 'Error Message';
    logError(errorMessage);
    expect(global.console.error).toHaveBeenCalledWith('request failed', errorMessage);
  });
});
