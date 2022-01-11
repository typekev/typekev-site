/**
 *
 * RobotInPortal
 *
 */
import { PropsWithChildren, useEffect } from "react";

import { InPortal } from "react-reverse-portal";

import { robotPortalNode } from "./robotPortalNode";

export const RobotInPortal = ({ children }: PropsWithChildren<unknown>) => {
  useEffect(() => () => robotPortalNode.unmount(), []);

  return <InPortal node={robotPortalNode}>{children}</InPortal>;
};

RobotInPortal.displayName = RobotInPortal.name;
