/**
 *
 * RobotOutPortal
 *
 */
import { memo } from "react";

import { OutPortal } from "react-reverse-portal";

import { robotPortalNode } from "./robotPortalNode";

export const RobotOutPortal = memo(() => <OutPortal node={robotPortalNode} />);

RobotOutPortal.displayName = RobotOutPortal.name;
