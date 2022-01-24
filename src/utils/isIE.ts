interface IEDocument extends Document {
  documentMode?: number;
}

export const isIE = !!(
  typeof document === "undefined" ? undefined : (document as IEDocument)
)?.documentMode;

export const isIECss =
  "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)";
