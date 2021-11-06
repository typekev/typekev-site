import { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { ThemeMode } from 'types';
import { palette } from './palette';

export const theme: Record<ThemeMode, FlattenSimpleInterpolation> = {
  light: css`
    --bg1: ${palette.retroOffWhite[400]};
    --bg2: ${palette.retroOffWhite[300]};
    --bg3: ${palette.retroOffWhite[200]};
    --bg4: ${palette.retroOffWhite[100]};
    --fg: ${palette.retroOffBlack[400]};
  `,
  dark: css`
    --bg1: ${palette.retroOffBlack[100]};
    --bg2: ${palette.retroOffBlack[200]};
    --bg3: ${palette.retroOffBlack[300]};
    --bg4: ${palette.retroOffBlack[400]};
    --fg: ${palette.retroOffWhite[100]};
  `,
};

export const varProps: Record<ThemeMode, FlattenSimpleInterpolation> = {
  light: css`
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
    @property --fg {
      syntax: '<color>';
      initial-value: ${palette.retroOffBlack[400]};
      inherits: false;
    }
  `,

  dark: css`
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
    @property --fg {
      syntax: '<color>';
      initial-value: ${palette.retroOffWhite[100]};
      inherits: false;
    }
  `,
};
