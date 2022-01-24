/* eslint-disable import/no-unassigned-import */
import { isIE } from "utils/isIE";

if (isIE) {
  require("intersection-observer");
}

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  require("@webcomponents/shadydom");
}
