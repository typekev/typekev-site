/* eslint-disable import/no-extraneous-dependencies */
import 'jest-canvas-mock';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';
/* eslint-enable import/no-extraneous-dependencies */
Enzyme.configure({ adapter: new Adapter() });

global.fetch = fetch;
global.scrollTo = jest.fn();
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};
