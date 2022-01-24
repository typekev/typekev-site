/**
 *
 * Layout
 *
 */

import dynamic from "next/dynamic";
import { memo, PropsWithChildren } from "react";

import { isIE } from "utils/isIE";
import { nullFunction } from "utils/nullFunction";

const AudioProvider = dynamic<unknown>(
  import("contexts/AudioContext").then(({ AudioProvider }) => AudioProvider)
);

const NavBar = dynamic<unknown>(
  import("./NavBar").then(({ NavBar }) => NavBar)
);

const Robot = isIE
  ? nullFunction
  : dynamic<unknown>(import("./Robot").then(({ Robot }) => Robot));

export const Layout = memo(({ children }: PropsWithChildren<unknown>) => (
  <AudioProvider>
    <NavBar />
    <main>{children}</main>
    <Robot />
  </AudioProvider>
));

Layout.displayName = Layout.name;
