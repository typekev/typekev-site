import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { ThemeMode } from 'types';
import { palette } from './palette';

export const theme: Record<ThemeMode, FlattenSimpleInterpolation> = {
  light: css`
    :root {
      @property --bg1 {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[400]};
        inherits: false;
      }
      @property --bg2 {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[300]};
        inherits: false;
      }
      @property --bg3 {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[200]};
        inherits: false;
      }
      @property --bg4 {
        syntax: '<color>';
        initial-value: ${palette.retroOffWhite[100]};
        inherits: false;
      }
      --fg: ${palette.retroOffBlack[400]};
    }
  `,
  dark: css`
    :root {
      @property --bg1 {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[100]};
        inherits: false;
      }
      @property --bg2 {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[200]};
        inherits: false;
      }
      @property --bg3 {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[300]};
        inherits: false;
      }
      @property --bg4 {
        syntax: '<color>';
        initial-value: ${palette.retroOffBlack[400]};
        inherits: false;
      }
      --fg: ${palette.retroOffWhite[100]};
    }
  `,
};
