import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { ThemeMode } from 'types';
import { gradients } from './gradients';
import { palette } from './palette';

export const theme: Record<ThemeMode, FlattenSimpleInterpolation> = {
  light: css`
    :root {
      --bg: ${gradients.bgThemeLight};
      --fg: ${palette.retroOffBlack[400]};
    }
  `,
  dark: css`
    :root {
      --bg: ${gradients.bgThemeDark};
      --fg: ${palette.retroOffWhite[100]};
    }
  `,
};
