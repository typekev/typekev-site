/**
 *
 * Layout
 *
 */

import dynamic from "next/dynamic";
import { memo, PropsWithChildren } from "react";

const NavBar = dynamic<unknown>(
  import("./NavBar").then(({ NavBar }) => NavBar)
);

const Robot = dynamic<unknown>(import("./Robot").then(({ Robot }) => Robot));

export const Layout = memo(({ children }: PropsWithChildren<unknown>) => (
  <>
    <NavBar />
    <main>{children}</main>
    <Robot />
  </>
));

Layout.displayName = Layout.name;
