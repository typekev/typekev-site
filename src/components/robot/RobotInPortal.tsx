/**
 *
 * RobotInPortal
 *
 */
import { PropsWithChildren } from "react";

import { InPortal } from "react-reverse-portal";

import { robotPortalNode } from "./robotPortalNode";

export const RobotInPortal = ({ children }: PropsWithChildren<unknown>) => {
  return <InPortal node={robotPortalNode}>{children}</InPortal>;
};

RobotInPortal.displayName = RobotInPortal.name;
