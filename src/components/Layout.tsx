/**
 *
 * Layout
 *
 */

import dynamic from "next/dynamic";
import { memo, PropsWithChildren } from "react";

const AudioProvider = dynamic<unknown>(
  import("contexts/AudioContext").then(({ AudioProvider }) => AudioProvider)
);

const NavBar = dynamic<unknown>(
  import("./NavBar").then(({ NavBar }) => NavBar)
);

const Robot = dynamic<unknown>(import("./Robot").then(({ Robot }) => Robot));

export const Layout = memo(({ children }: PropsWithChildren<unknown>) => (
  <AudioProvider>
    <NavBar />
    <main>{children}</main>
    <Robot />
  </AudioProvider>
));

Layout.displayName = Layout.name;
