import { createMuiTheme } from '@material-ui/core/styles';
import { themeMap } from 'resources/theme';

it('should not throw an error', () => {
  expect(() => createMuiTheme(themeMap)).not.toThrow();
});
