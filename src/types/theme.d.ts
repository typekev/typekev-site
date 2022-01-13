declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontFamilyAlt: React.CSSProperties["fontFamily"];
  }

  interface TypographyVariantsOptions {
    fontFamilyAlt?: React.CSSProperties["fontFamily"];
  }
}

export enum ThemeMode {
  dark = "dark",
  light = "light",
}

export interface Theme {
  mode: ThemeMode;
}
