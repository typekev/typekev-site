import { logError } from 'utils/request';

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
};

describe('request function', () => {
  it('returns undefined on catch', () => {
    const errorMessage = 'Error Message';
    logError(errorMessage);
    expect(global.console.error).toHaveBeenCalledWith('request failed', errorMessage);
  });
});
