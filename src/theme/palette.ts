import { ThemeMode } from "types.d";

export const palette = {
  retroOffWhite: {
    100: "#fdfbfb",
    200: "#fdf9f8",
    300: "#fdf9f7",
    400: "#fdf9f6",
  },
  retroOffBlack: {
    100: "#282727",
    200: "#111010",
    300: "#040404",
    400: "#010101",
  },
  peachSchnapps: "#fed2ce",
  cornflowerLilac: "#ffa9a4",
  orchid: "#e681d8",
  portage: "#8b9fe8",
  pictonBlue: "#35c3f3",

  supernova: "#ffc901",
  moonGlow: "#fcfeda",
  aquamarineBlue: "#81d8e6",
  surf: "#bbd7c1",
  geraldine: "#FB8989",

  dodgerBlue: "#1f93fa",
};

export const THEME_MODE_PALETTE_MAP = {
  [ThemeMode.light]: {
    text: palette.retroOffBlack[100],
    primary: palette.retroOffBlack[200],
    background: palette.retroOffWhite[100],
    accent: palette.peachSchnapps,
  },
  [ThemeMode.dark]: {
    text: palette.retroOffWhite[100],
    primary: palette.retroOffWhite[300],
    background: palette.retroOffBlack[100],
    accent: palette.retroOffBlack[100],
  },
};
