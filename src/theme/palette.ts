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
};

export const THEME_MODE_PALETTE_MAP = {
  [ThemeMode.light]: {
    text: palette.retroOffBlack[100],
    primary: palette.retroOffBlack[200],
    secondary: palette.cornflowerLilac,
    accent: palette.peachSchnapps,
    success: palette.surf,
    background: palette.retroOffWhite[400],
    drawer: palette.retroOffWhite[400],
    input: palette.retroOffWhite[100],
  },
  [ThemeMode.dark]: {
    text: palette.retroOffWhite[100],
    primary: palette.retroOffWhite[300],
    secondary: palette.portage,
    accent: palette.retroOffBlack[100],
    success: palette.surf,
    background: palette.retroOffBlack[100],
    drawer: palette.retroOffBlack[400],
    input: palette.retroOffBlack[100],
  },
};
