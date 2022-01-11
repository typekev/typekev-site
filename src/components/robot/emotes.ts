import {
  mdiRobotConfusedOutline,
  mdiRobotExcitedOutline,
  mdiRobotOutline,
} from "@mdi/js";

import { RobotSentiment } from "types.d";

export const SENTIMENT_EMOTE_MAP: Record<RobotSentiment, string> = {
  [RobotSentiment.NEUTRAL]: mdiRobotOutline,
  [RobotSentiment.POSITIVE]: mdiRobotExcitedOutline,
  [RobotSentiment.NEGATIVE]: mdiRobotConfusedOutline,
};
